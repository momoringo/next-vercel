import type { NextPage } from 'next'
import React, { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import dayjs from 'dayjs'
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Editor from '@/components/Editor'
import { useGetProductsQuery, GetProductsDocument } from '@/graphql'
import { initializeApollo } from '@/lib/apollo'

const intervalSecond = 20
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
});

type Props = {nextCreatedAt:any }


const Home: NextPage<Props> = ({ createdAt, nextCreatedAt}: Props) => {

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
      {process.env.VERCEL_ENV}

       <h1>
          {nextCreatedAt}
        </h1>
       
    </ThemeProvider>
    </div>
  )
}

export async function getStaticProps() {


  /*
  const apolloClient = initializeApollo()



  const {data} = await apolloClient.query({
    query: GetProductsDocument
  })

  */

      const date = new Date();
    const current = date.toLocaleString()

  return {
    props: {
      nextCreatedAt: current,
    },
    revalidate: intervalSecond,
  }
}

export default Home
