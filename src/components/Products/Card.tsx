import { Products } from '@/@types'
import React from 'react'
import Rating from '../Rating/StartRating'
import { useRouter } from 'next/navigation'

export default function Card({
  id,
  image,
  title,
  rating,
  price,
  category,
}: Products) {
  // navegar para a página do produto
  const router = useRouter()

  const handleProduct = () => {
    router.push(`/produto/${id}`)
  }
  return (
    <div
      className="relative flex flex-col justify-between p-6  bg-primaryone shadow-sm border border-[#ddd] rounded-lg w-full 
    lg:w-full 2xl:w-full"
      onClick={handleProduct}
    >
      <div className="relative h-60 bg-primary flex justify-center items-center   text-white px-4 pt-4 rounded-md">
        <img className="rounded-sm   h-52" src={image} alt="card-image" />
      </div>
      <div className=" pb-6 flex flex-col gap-y-4">
        <h6 className="mb-1 text-black text-lg  font-bold line-clamp-1">
          {/* {title.length > 25 ? `${title.slice(0, 25)}...` : title} */}
          {title}
        </h6>
        <p className=" ">{category}</p>
        <div className="flex items-center gap-2">
          <Rating rating={rating.rate} />
          <p className="text-slate-600 text-base ">{rating.count} Avaliações</p>
        </div>
        <p className="text-red-500 font-semibold  text-base">R$ {price}</p>
      </div>
    </div>
  )
}
