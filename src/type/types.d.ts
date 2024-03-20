
export interface  user {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
} 


export interface dataInv {
  id    :       string   
  createdAt  :  string
  paymentDue  : DateTime
  description:  string
  paymentTerms: number
  clientName :  string
  clientEmail : string
  status    :   string
  street     :  string
  city        : string
  postCode   :  string
  country    :  string
  item       :  Item[]
  total     :  number
  user       :  number
  invoinceId :  number
}


export interface Item { 
  name   :  string
  quantity: number
  price    : number
  total    : number
  invoicen : string
  itemId :  string
}