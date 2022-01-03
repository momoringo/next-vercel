import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { css } from '@emotion/react'


const screen = css`
	color: pink
`

const Editor: NextPage = () => {
  return (
    <div>
      <p css={screen}>エディター</p>
      <Button variant="contained">Text</Button>
    </div>
  )
}

export default Editor
