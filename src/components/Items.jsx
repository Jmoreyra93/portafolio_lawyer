import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid  item xs={4}>
        <Item className=" h-24 flex items-center justify-center hover:backdrop-opacity-95" >Delitos de estupefacientes</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la integridad sexual</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la vida</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la vida</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la vida</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la vida</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la vida/integridad física</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la propiedad</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos informáticos</Item>
      </Grid>
      <Grid item xs={4}>
        <Item className="bg-[url('/src/assets/leyhor.jpg')] bg-cover bg-no-repeat bg-center h-24 flex items-center justify-center">Delitos contra la libertad</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <div className=" py-24 sm:py-32 lg:py-40 ">
      <div className="mx-20 max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Al tratarse de procesos penales, resulta fundamental para nuestro staff entender las necesidades de quien confía su caso. Por ello, siempre habrá disponibilidad inmediata para actuar cuando la situación lo requiera. Trabajamos en el ámbito de CABA y Provincia de Buenos Aires, también en todo el país si se trata de causas que tramitan en el fuero federal. Trabajaremos así, de manera rápida y eficaz la mejor estrategia posible para la solución de su problema. 
          </p>
        </div>
      </div>
        <Box className="mx-auto mt-6 max-w-2xl" sx={{ flexGrow: 1 }}>
          <Grid  container spacing={1}>
            <Grid container item spacing={3}>
              <FormRow  />
            </Grid>
            {/* <Grid container item spacing={3}>
              <FormRow />
            </Grid>
            <Grid container item spacing={3}>
              <FormRow />
            </Grid> */}
          </Grid>
        </Box>
      </div>
      );
}
