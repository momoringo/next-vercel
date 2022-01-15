import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { css } from '@emotion/react'
import Form from '@/components/Form'
import Box from '@mui/material/Box';
import Aside from '@/components/Aside';
import Drag from '@/components/Drag';
import Screen from '@/components/Screen';

const container = css`
  display: flex;
  min-width: 1100px;
  height: 100vh;
`

const main = css`
  flex: 1 1 auto;
`
const side = css`
  width: 300px;
  border: solid 1px #000;
`

const Editor: NextPage = () => {
  return (
    <div>
      <Box css={container}>
        <Box css={main} mr={2}>
          <Screen />    
        </Box>
        <Box css={side}>
          <Form />    
        </Box>
      </Box>
    </div>
  )
}

export default Editor
