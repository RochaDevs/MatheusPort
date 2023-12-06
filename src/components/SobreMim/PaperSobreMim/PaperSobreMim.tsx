import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SchoolIcon from '@mui/icons-material/School';
import HikingIcon from '@mui/icons-material/Hiking';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";


export function PaperSobreMim() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '60%',
                height: '100%'
            }}
        >
            <Paper
                elevation={24}
                sx={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '100%'
                }}
            >
                <Typography variant='h6' sx={{display: 'flex', alignItems: 'center', gap: '.25rem', fontFamily: "'Exo 2', sans-serif"}}>
                    <AutorenewIcon sx={{color: '#FF9209'}} />
                    Sobre mim
                </Typography>

                <Typography variant='subtitle1' sx={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Atualmente tenho <Box component={'span'} sx={{color: '#FF9209'}}>23 anos</Box> de idade. Resido em <Box component={'span'} sx={{color: '#FF9209'}}>Indaiatuba-SP</Box>, mas já transitei por São Paulo-SP, Praia Grande-SP, Salto de Pirapora-SP e outras cidades. Gosto de conhecer lugares novos! <Box component={'span'} sx={{color: '#FF9209'}}>Estou noivo</Box> de uma linda mulher chamada Sara e alguns de meus hobbies são: <Box component={'span'} sx={{color: '#FF9209'}}>ler mangás (meu favorito é Jujutsu Kaisen)</Box>, caminhar acompanhado, fazer café e <Box component={'span'} sx={{color: '#FF9209'}}>desenvolver aplicações web</Box>.
                </Typography>

                <Typography variant='h6' sx={{display: 'flex', alignItems: 'center', gap: '.25rem', fontFamily: "'Exo 2', sans-serif"}}>
                    <HikingIcon sx={{color: '#FF9209'}}/>
                    Trajetória
                </Typography>

                <Typography variant='subtitle1' sx={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Formado como <Box component={'span'} sx={{color: '#FF9209'}}>Técnico em Química</Box>, trabalhei na área como operador de pesagem na <Box component={'span'} sx={{color: '#FF9209'}}>L'oréal por quase 2 anos</Box>. Senti que essa área não me pertencia, então arrisquei na área de Lógistica. Fui Representante de Envios no <Box component={'span'} sx={{color: '#FF9209'}}>Mercado Livre</Box> por quase 1 ano, e também não me encontrei. Retornei para uma antiga paixão na área de Cenografia, operando máquinas de corte 3D. Após pouco mais de 1 ano nessa área, por estar em contato com <Box component={'span'} sx={{color: '#FF9209'}}>softwares e hardwares específicos</Box>, ascendeu em mim um amor pela <Box component={'span'} sx={{color: '#FF9209'}}>área de TI</Box> como um todo, e foi quando comecei a estudar para me tornar <Box component={'span'} sx={{color: '#FF9209'}}>um desenvolvedor frontend</Box>.
                </Typography>

                <Typography variant='h6' sx={{display: 'flex', alignItems: 'center', gap: '.25rem', fontFamily: "'Exo 2', sans-serif"}}>
                    <SchoolIcon sx={{color: '#FF9209'}}/>
                    Formação
                </Typography>

                <Typography variant='subtitle1' sx={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Caminhando para o 2ª semestre de <Box component={'span'} sx={{color: '#FF9209'}}>Análise e Desenvolvimento de Sistemas</Box> na Faculdade Descomplica (incrível por sinal!). Há quase 1 ano estudando na <Box component={'span'} sx={{color: '#FF9209'}}>escola frontend da Alura</Box>, a melhor instituição de ensino de tecnologia que conheci, inclusive já renovei meu contrato com eles por mais um ano! Tecnologias como <Box component={'span'} sx={{color: '#FF9209'}}>Javascript <IoLogoJavascript color='#F7DF1E' fontSize='1.25rem' />, Typescript <SiTypescript color='#3178C6' fontSize='1.25rem'/>, React Js <FaReact color='#61DAFB' fontSize='1.25rem' /></Box> entre outras estão no meu escopo de conhecimento e prática constante. 
                </Typography>
            </Paper>
        </Box>
    );
}