import React from 'react'

export default function Loader() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <img src="/img/logo.png" alt="logo" className="w-56 animate-pulse" />
        {/* <div className="flex">
          <h1 className="text-3xl font-bold">Carregando</h1>
          <p className="text-3xl animate-pulse">...</p>
        </div> */}
      </div>
    </div>
  )
}
