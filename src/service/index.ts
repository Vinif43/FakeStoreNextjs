import { Products } from '@/@types'
import axios from 'axios'

// export const getImovel = async ({
//   search = '',
// }: { search?: string } = {}): Promise<Imovel[]> => {
//   const session = await getSession()
//   const token = session?.user?.access
//   const response = await axios.get(`${baseUrl}/imoveis/lista/`, {
//     params: {
//       nome: search,
//     },
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   return response.data
// }

export const getProducts = async (): Promise<Products[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/`,
  )

  return response.data
}
