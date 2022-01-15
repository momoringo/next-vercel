import type { NextPage } from 'next'
import  React, {ComponentProps, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { css, Theme } from '@emotion/react'
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/model/user';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';



const soleil = ['星宮いちご', '霧矢あおい', '紫吹蘭'] as const;
//type MemberOfSoleil = typeof soleil[number]['index'];


const screen = css`
	color: pink
`


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never;


//type Unpacked5<T> = { [K in T]: string };


type Unpacked6<T> = { [K in keyof T]: K extends infer G ?  G : never};

const a = {name0: 't', name1: 'bb'} as const

const bb = [1, 5]
	//const y: keyof typeof bb = 88



type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]

/*

	type Append<Elm, T extends unknown[]> = ((
  arg: Elm,
  ...rest: T
) => void) extends ((...args: infer T2) => void)
  ? T2
  : never;

  */



//type Gbhd<T> = T extends  { [K in keyof T]: infer K } ?  : never;


const arr = ['one', 'two','one', 'two','one', 'two','one', 'two'] as const;

const arr2 = ['one', 'two'];

const jmk = {...arr} as const;

type VB = keyof ['one', 'two']


type G = Unpacked6<typeof arr>;



const num:G[number] = "0"



type UnionOf<T extends any[]> = T[number];

/**
 * Returns the length of an array or tuple
 */
type LengthOf<T extends any[] = []> = T["length"];

/**
 * Returns all but the first item's type in a tuple/array
 */
export type Tail<T extends any[]> =
	((...args: T) => any) extends ((head: any, ...tail: infer R) => any) ? R : never;

/**
 * Returns the given tuple/array with the item type prepended to it
 */
type Unshift<List extends any[], Item> =
	((first: Item, ...rest: List) => any) extends ((...list: infer R) => any) ? R : never;

/**
 * Tests if two types are equal
 */
type Equals<T, S> =
	[T] extends [S] ? (
		[S] extends [T] ? true : false
	) : false;


type Range<N = 8, T extends number[] = []> = {
	0: T,
	1: Range<N, Unshift<T, LengthOf<T>>>,
}[Equals<LengthOf<Tail<T>>, N> extends true ? 0 : 1];


const mkkk = arr.length > 0 && arr.length < 50 ? arr.length : 10 as const;

//const g:LengthOf<typeof arr> = 2



const rt6 = arr.length


const ymn:UnionOf<Range<typeof rt6>> = 7




type StrictKeyof<T> = keyof T extends infer K
	? (K extends number ? `name${K}` : K)
	: never;

//const ttt: StrictKeyof<Gbhd<arr>> = 0

//const h: StrictKeyof<typeof a> = 'name7'

type StrictPropertyKey = string | symbol;



type NM = {[key in XNumber]: string }

type XNumber= `name${UnionOf<Range>}`;
type TForm = Readonly<NM & {
  mom: number;
}>;


type TForm2 = {
	name: string;
  mom: number;
}

const style = (c: string) => css`
  background-color: red;
  &:hover {
    background-color: ${c};
  }
`;

const select = css`
  background-color: #fff;
`;

type CardProps = ComponentProps<typeof Form>;

const Bn = (): JSX.Element => <div />

const nb: CardProps = {children: Bn}

const Form: React.FC = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<TForm2>({
  	     defaultValues: {
          name: "",        
          mom: 999
      	},
      resolver: yupResolver(schema),
  });  
  const onSubmit2: SubmitHandler<TForm2> = (data) => {
  	return console.log(data)
  };	


  const [age, setAge] = useState('');

  const on = (e: SelectChangeEvent) => {
		setAge(e.target.value as string);
  }

  return (
	  <form onSubmit={handleSubmit(onSubmit2)}>
	    <Box sx={{ flexGrow: 1 }}>
	      <Grid container spacing={2} className="tes">
	        <Grid item xs={12}>
		      <FormControl fullWidth>
			    <Controller
				    control={control}
				    name="name"
		        render={({ field, fieldState: { error } }) => (
					     <TextField {...field} />
		        )}					    
					 />
			    </FormControl>
		      <FormControl fullWidth>
		        <InputLabel id="demo-simple-select-label">Age</InputLabel>
					    <Controller
						    control={control}
						    name="mom"
				        render={({ field, fieldState: { error } }) => (
							     <Select
							      	{...field}
						          labelId="demo-simple-select-label"
						          id="demo-simple-select"
						          value={age}
						          label="Age"
						          onChange={on}
						          css={select}
							      >
					          <MenuItem value={10}>Ten2</MenuItem>
					          <MenuItem value={20}>Twenty</MenuItem>
					          <MenuItem value={30}>Thirty</MenuItem>
						      </Select>
				        )}					    
							 />
			      </FormControl>
			      <Button type="submit" id="uh">
			      	送信
			      </Button>
	        </Grid>
	      </Grid>
	    </Box>
	  </form>	    
  )
}

export default Form
