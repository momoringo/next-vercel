import  React, {ComponentPropsWithoutRef, forwardRef, useRef, useEffect} from 'react'
import { css } from '@emotion/react'
import {useDroppable} from '@dnd-kit/core'
import { useGetBooks } from '@/hooks/useGetBooks'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const container = css`
  display: flex;
  min-width: 1100px;
`

const main = css`
  flex: 1 1 auto;
`
const side = css`
  width: 300px;
  border: solid 1px #000;
`

type Props = {
  shape: "checkbox" | "radio" | "toggle";
  button: React.ComponentPropsWithRef<"button">;
};

const Input = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>((props, ref) => <button {...props} ref={ref} />);

const Drag: React.FC = () => {


  const {data} = useGetBooks();
  console.log(data);
  const ref = useRef<HTMLButtonElement>(null)



  useEffect(() => {

  }, [])


  return (
    <div>

      <Input ref={ref}>
        テスト
      </Input>

    </div>
  )
}

export default Drag
