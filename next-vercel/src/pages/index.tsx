import type { NextPage } from 'next'
import React, { useEffect } from "react";
import { gql } from '@apollo/client';
import Head from 'next/head'
import Image from 'next/image'
import dayjs from 'dayjs'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Editor from '@/components/Editor'
import { useGetProductsQuery, GetProductsDocument } from '@/graphql'
import { initializeApollo } from '@/lib/apollo'

const intervalSecond = 60
const formatStyle = "MM/DD HH:mm:ss"
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
  button: {
    textTransform: "none"
  } 
});

type Props = {nextCreatedAt:any }


const Home: NextPage<Props> = ({nextCreatedAt}: Props) => {

    // console.log(props)
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
        <h1>
          {nextCreatedAt}
        </h1>
    </ThemeProvider>
    </div>
  )
}

/*

export async function getServerSideProps(context: any) {
  const apolloClient = initializeApollo()

  const {data} = await apolloClient.query({
    query: GetProductsDocument,
    fetchPolicy: "no-cache"
  })

  console.log(data);

  return {
    props: {
      nextCreatedAt: data?.getProducts[0]?.name,
    },
  }
}
    */

const GET_DOGS = gql`
query Enterprises {
  enterprises {
    id
    name
  }
}
`;    

export async function getStaticProps() {

  const apolloClient = initializeApollo()


  const {data} = await apolloClient.query({
    query: GET_DOGS,
    fetchPolicy: "no-cache"
  })

console.log(data);

  return {
    props: {
      nextCreatedAt: 'ff' //data?.getProducts[0]?.name,
    },
    revalidate: intervalSecond,
  }
}


export default Home
