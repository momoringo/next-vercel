
import { useGetProductsQuery } from '@/graphql'

export const useGetBooks = () => {
  const {data} = useGetProductsQuery()

  return { data }

}