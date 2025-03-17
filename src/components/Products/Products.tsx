'use client'
import React from 'react'
import Card from './Card'
import { productGet } from '@/hook/productGet'
import Loader from '../Loader/Loader'

export default function Products() {
  const { product, productLoading } = productGet(1)

  if (productLoading) {
    return <Loader />
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 bg-primary max-w-[85rem] mx-auto">
      {product.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          rating={product.rating}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  )
}
