"use client"
import { dataInv } from "@/type/types";
import { IconArrowBadgeDownFilled } from "@tabler/icons-react";
import moment from "moment";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";






const ContendProfile = () => {

  const [data,setData] = useState([])
  useEffect(()=> {
    setData(JSON.parse(localStorage.getItem("data") || "[]"))
  },[])
  return (
    <div className="w-full flex flex-col">
      <header className="w-full flex justify-between">
        <div>
          <h2>Invoices</h2>
          <span>{data?.length > 0 ? data.length : "No invoices"}</span>
        </div>
        <div>
          <button>Filter</button>
          <IconArrowBadgeDownFilled />
        </div>
        <div>
          <button>
            <img src="/img/icon-plus.svg" alt="plus" />
          </button>
          <span>New</span>
        </div>
      </header>
      <ul className="flex flex-col w-full gap-5">
        {
          data?.map((e:dataInv)=> (
            <li key={data.length + 1000} className="bg-[#1e2139]">
              <div>
                <strong>#{e.id}</strong>
                <span>{e.clientName}</span>
              </div>
              <section>
                <div>
                  <p>{moment(e.createdAt).format("DD MMM YYYY")}</p>
                  <p>{new Intl.NumberFormat("de-DE",{
                    style:"currency",
                    currency: "EUR"
                  }).format(Number(e.total))}</p>
                </div>
                <span>{e.status}</span>
              </section>
            </li>
          ))
        }
      </ul>
      <button className="w-full bg-gradient-to-r text-white from-sky-500 to-indigo-500 p-2 rounded-lg" onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default ContendProfile ;