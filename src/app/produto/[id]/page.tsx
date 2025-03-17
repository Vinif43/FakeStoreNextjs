import ProductPage from '@/components/Products/ProductPage'
import React, { use } from 'react'

interface CharacterParams {
  params: Promise<{ id: string }>
}

export default function page({ params }: CharacterParams) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = use(params)
  return (
    <div>
      <ProductPage id={parseInt(id)} />
    </div>
  )
}
