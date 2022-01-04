import type { NextPage } from 'next'
import React, { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Editor from '@/components/Editor'
import { useGetProductsQuery, GetProductsDocument } from '@/graphql'
import { initializeApollo } from '@/lib/apollo'


const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    third: {
      main: "pink",
    },    
    error: {
      main: red.A400,
    },
  },
});

type Props = { tes: number }


const Home: NextPage = (props) => {

     console.log(props)
  /*

  const {loading, data, error} = useGetProductsQuery()

  console.log(data)
  */

  useEffect(() => {

  }, [])
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Editor />
      {props.tes}
    </ThemeProvider>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()



  const {data} = await apolloClient.query({
    query: GetProductsDocument
  })

  return {
    props: {
      tes: data?.getProducts[0]?.name
    },
    revalidate: 10,
  }
}

export default Home
