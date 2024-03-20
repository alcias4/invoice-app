
import prisma from "./prisma";
import data from "@/data/data.json"
import bcrypt from "bcrypt"



export const dataInitial = async() => {
  const em = "example@gmail.com"
  const userFound = await prisma.user.findUnique({
    where: {
      email: em
    }
  })

  if(userFound)return null
  
  if(!userFound){
    const pass =await bcrypt.hash("ruben123",10)
    const user = await prisma.user.create({
      data:{
        email: em,
        name: "Ruben Gomez",
        password: pass,
        image: "image-avatar.jpg"
      }
    })

    for (const invoice of data){
      const invoiceNew = await prisma.invoicen.create({
        data:{
          id: invoice.id,
          createdAt: invoice.createdAt,
          paymentDue: invoice.paymentDue,
          description: invoice.description,
          clientEmail: invoice.clientEmail,
          clientName: invoice.clientName,
          status: invoice.status,
          street: invoice.clientAddress.street,
          city: invoice.clientAddress.city,
          postCode: invoice.clientAddress.postCode,
          country: invoice.clientAddress.country,
          total: invoice.total,
          paymentTerms : invoice.paymentTerms,
          user: {
            connect:{
              id:user.id
            }
          }
        }
      })

      for (const item of invoice.items){
        await prisma.item.create({
          data:{
            name:item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.total,
            invoicen: {
              connect: {
                id: invoiceNew.id
              }
            }
          }
        })
      }
    }

    return user
    
  }
}

