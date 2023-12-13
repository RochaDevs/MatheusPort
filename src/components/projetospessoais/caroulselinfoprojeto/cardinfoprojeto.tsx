import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import React from 'react';

interface ICardInfoProjeto {
    logo: string | React.ReactNode
    titulo: string | React.ReactNode
    texto1: string 
    texto2: string 
    texto3: string
    texto4: string
    texto5?: string 
    texto6?: string 
    texto7?: string 
    texto8?: string 
}

export function CardInfoProjeto({logo, titulo, texto1, texto2, texto3, texto4, texto5, texto6, texto7, texto8}: ICardInfoProjeto) {
  return (
    <Card sx={{
        height: '25rem',
        width: '13rem',
        border: 'solid 3px #F06529'
    }}>
      <Paper sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0.5rem'
      }}>
        {logo}
      </Paper>

      <CardContent sx={{
        gap: '0.5rem',
        display: 'flex',
        flexDirection: 'column'
      }}>

        <Typography gutterBottom variant="h6" component="div" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
          {titulo}
        </Typography>

        <Typography variant="body2" color="text.secondary" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto1}
        </Typography>

        <Typography variant="body2" color="text.secondary" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto2}
        </Typography>

        <Typography variant="body2" color="text.secondary" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto3}
        </Typography>

        <Typography variant="body2" color="text.secondary" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto4}
        </Typography>

        <Typography variant="body2" color="text.secondary" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto5}
        </Typography>

        <Typography variant="body2" color="text.secondary" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto6}
        </Typography>

        <Typography variant="body2" color="text.secondary" lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto7}
        </Typography>

        <Typography variant="body2" color="text.secondary"  lineHeight={'1rem'} fontFamily={"'Exo 2', sans-serif"}>
            {texto8}
        </Typography>

      </CardContent>

    </Card>
  );
}
