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
    <div className="w-full flex flex-col p-6 gap-10">
      <header className="w-full flex justify-between">
        <div className="flex items-center flex-col">
          <h2 className="font-bold text-xl">Invoices</h2>
          <span>{data?.length > 0 ? `${data.length}  invoices` : "No invoices"}</span>
        </div>
        <div className="flex gap-5 items-center">
          <button className="flex items-center justify-center gap-4">
            Filter
            <IconArrowBadgeDownFilled />
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#7c5dfa] px-2 h-[80%]  rounded-3xl">
            <img className="bg-white p-2 rounded-full " src="/img/icon-plus.svg" alt="plus" />
            <span>New</span>
          </button>
        </div>
      </header>
      <ul className="flex flex-col w-full gap-5">
        {
          data?.map((e:dataInv)=> (
            <li key={data.length + 1000} className="bg-[#1e2139] rounded-lg p-2 py-4 flex flex-col gap-5">
              <div className="w-full flex justify-between items-center">
                <p><b className="text-[#6c74a9]">#</b>{e.id}</p>
                <span>{e.clientName}</span>
              </div>
              <section className="w-full flex justify-between items-center">
                <div>
                  <p className=" text-sm pb-2 font-light">{moment(e.createdAt).format("DD MMM YYYY")}</p>
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

export default ContendProfile;