'use client'
import { useCart } from '@/context/CartContext'
import { productGet } from '@/hook/productGet'
import React from 'react'
import Rating from '../Rating/StartRating'
import { FaCartShopping } from 'react-icons/fa6'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import Loader from '../Loader/Loader'

type ProductPageProps = {
  id: number
}

export default function ProductPage({ id }: ProductPageProps) {
  const { productIdd, productLoading } = productGet(id)
  const { dispatch } = useCart()

  if (productLoading) {
    return <Loader />
  }

  if (!productIdd || productIdd.length === 0) {
    return <p className="text-center text-red-500">Produto não encontrado</p>
  }

  return (
    <div className="min-h-screen flex items-start p-4 justify-center">
      <div className="bg-primaryone rounded-lg p-4 w-full md:w-3xl lg:w-4xl drop-shadow-lg">
        <div className="py-4">
          <div className="px-4">
            <Link
              href="/"
              className="flex gap-x-2 items-center text-icon font-semibold"
            >
              <FiArrowLeft className="text-xl" />
              Voltar
            </Link>
          </div>
        </div>
        {productIdd.map((product) => (
          <div
            key={product.id}
            className="flex max-md:flex-col justify-around py-2 gap-4"
          >
            <div className="flex justify-center lg:w-1/2 items-start">
              <div className="p-2 py-4 rounded-lg w-96 flex justify-center bg-primary">
                <img src={product.image} className="w-64" alt={product.title} />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-y-4 py-4">
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p className="text-[#555]">{product.description}</p>
              <p className="font-bold">{product.category}</p>
              <div className="flex gap-x-2">
                <Rating rating={product.rating.rate} />
                <p>{product.rating.count}</p>
              </div>
              <p className="text-red-500 font-semibold text-xl">
                R$ {product.price}
              </p>
              <button
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    product: {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                      description: product.description!,
                      rating: product.rating,
                      quantity: 1,
                    },
                  })
                }}
                className="bg-icon text-white text-base p-2 rounded-3xl flex justify-center items-center gap-x-2"
              >
                <FaCartShopping className="text-lg" />
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
