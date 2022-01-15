import type { NextPage } from 'next'
import React, { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Editor from '@/components/Editor'
import { useGetProductsQuery, GetProductsDocument } from '@/graphql'
import { initializeApollo } from '@/lib/apollo'
const Nossr = dynamic(() => import('@/components/Nossr'), {
  ssr: false,
  loading: () => <p>Now Loading...</p>,
});


const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },  
    error: {
      main: red.A400,
    },
  },
});

type Props = { tes: number }


const About: NextPage = (props) => {

  //const {loading, data, error} = useGetProductsQuery()

 // console.log(data)

  useEffect(() => {

  }, [])
  return (
    <div>
        <Nossr />
    </div>
  )
}


export default About
