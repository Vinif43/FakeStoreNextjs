import { Products } from '@/@types'
import { getProducts } from '@/service'
import { useQuery } from '@tanstack/react-query'

export function productGet(id: number, id2?: number) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, refetch } = useQuery<Products[]>({
    queryKey: ['product'],
    queryFn: getProducts,
  })

  const product = data ?? []

  const productId = () => {
    if (data) {
      const productId = data.filter((product) => product.id === id)
      return productId
    }
    return []
  }

  // productAplicativoId não pode ser uma função mas sim um array
  // const productAplicativoId = product.filter((product) => product.clinica === id2)

  //   const edicoAplicativoIdd = () => {
  //     if (data) {
  //       const productAplicativoId = data.filter((product) => product.clinica === id2)
  //       return productAplicativoId
  //     }
  //     return []
  //   }

  return {
    product,
    productIdd: productId(),
    // productAplicativoId: edicoAplicativoIdd(),
    productError: error,
    productLoading: isLoading,
    productRefetch: refetch,
  }
}
