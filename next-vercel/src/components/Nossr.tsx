import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Editor from '@/components/Editor'
import { useGetProductsQuery, GetProductsDocument } from '@/graphql'


const Nossr: NextPage = () => {

  //const {loading, data, error} = useGetProductsQuery()

  return (
    <div>  
      <Editor />
    </div>
  )
}

export default Nossr
