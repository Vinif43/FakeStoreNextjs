import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoPerson } from 'react-icons/io5'

export default function Header() {
  return (
    <div className="bg-primaryone border-b border-gray-200 drop-shadow-sm">
      <div className="flex justify-between items-center bg-primaryone text-gray-600 p-2  max-w-[85rem] mx-auto ">
        <div className="flex justify-around items-center gap-x-4 text-base font-medium">
          <img src="/img/logo.png" alt="logo" className="w-16" />

          <Link
            className="hover:bg-secondary transition p-2 rounded-lg font-bold"
            href="/"
          >
            Produtos
          </Link>
          <Link
            className="hover:bg-secondary transition p-2 rounded-lg font-bold"
            href="/sobre"
          >
            Sobre
          </Link>
          {/* <Link
            className="hover:bg-secondary transition p-2 rounded-lg font-bold"
            href="/contato"
          >
            Contato
          </Link> */}
        </div>
        <div className="flex px-4 gap-x-6 text-lg text-icon">
          <div className="hover:bg-secondary transition p-1 rounded-lg">
            <FaCartShopping className="" />
          </div>

          <div className="hover:bg-secondary transition p-1 rounded-lg">
            <IoPerson />
          </div>
        </div>
      </div>
    </div>
  )
}
