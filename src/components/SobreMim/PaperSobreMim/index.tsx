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
                width: '80%',
                height: '100%',
                '@media (max-width: 600px)': {
                    width: '85%'
                }
            }}
        >
            <Paper
                elevation={24}
                sx={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    height: '100%'
                }}
            >
                <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', gap: '.25rem', fontFamily: "'Exo 2', sans-serif" }}>
                    <AutorenewIcon sx={{ color: '#FF9209' }} />
                    Sobre mim
                </Typography>

                <Typography variant='subtitle1' sx={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Olá! Meu nome é Matheus e tenho <Box component={'span'} sx={{ color: '#FF9209' }}>23 anos</Box> de idade. Atualmente, resido em <Box component={'span'} sx={{ color: '#FF9209' }}>São Paulo-SP</Box>. Sou apaixonado por explorar novos lugares e absorver as diferentes culturas e experiências que cada um oferece.
                    <Box component={'span'} sx={{ color: '#FF9209' }}> Estou noivo</Box> da incrível Sara, com quem compartilho muitos momentos especiais. Nos meus tempos livres, você pode me encontrar mergulhado no universo dos mangás, sendo <Box component={'span'} sx={{ color: '#FF9209' }}>'Jujutsu Kaisen'</Box> o meu favorito. Além disso, adoro caminhar ao lado de pessoas queridas, preparar um bom café e <Box component={'span'} sx={{ color: '#FF9209' }}>colocar minha criatividade em prática desenvolvendo aplicações web</Box>.
                </Typography>

                <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', gap: '.25rem', fontFamily: "'Exo 2', sans-serif" }}>
                    <HikingIcon sx={{ color: '#FF9209' }} />
                    Trajetória
                </Typography>

                <Typography variant='subtitle1' sx={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Sou formado como <Box component={'span'} sx={{ color: '#FF9209' }}>Técnico em Química</Box> e iniciei minha carreira trabalhando como operador de pesagem na <Box component={'span'} sx={{ color: '#FF9209' }}>L'oréal</Box>, onde permaneci por quase 2 anos. Apesar da experiência valiosa, percebi que essa área não era a minha verdadeira vocação. Em busca de novos horizontes, migrei para a área de Logística, atuando como Representante de Envios no <Box component={'span'} sx={{ color: '#FF9209' }}>Mercado Livre</Box> por aproximadamente um ano. Essa experiência, embora enriquecedora, também não ressoou com meus interesses profundos.

                    Retornei, então, a uma paixão antiga: a área de Cenografia. Foi um período de mais de um ano de aprendizado e crescimento. Contudo, foi o meu envolvimento com <Box component={'span'} sx={{ color: '#FF9209' }}>softwares e hardwares específicos</Box> que acendeu uma nova chama em mim: o amor pela <Box component={'span'} sx={{ color: '#FF9209' }}>área de TI</Box>. Esse interesse me levou a começar os estudos para me tornar <Box component={'span'} sx={{ color: '#FF9209' }}>um desenvolvedor frontend</Box>.
                </Typography>

                <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', gap: '.25rem', fontFamily: "'Exo 2', sans-serif" }}>
                    <SchoolIcon sx={{ color: '#FF9209' }} />
                    Formação
                </Typography>

                <Typography variant='subtitle1' sx={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Estou avançando para o segundo semestre do curso de <Box component={'span'} sx={{ color: '#FF9209' }}>Análise e Desenvolvimento de Sistemas</Box> na Faculdade Descomplica, uma instituição de ensino verdadeiramente incrível. Há quase um ano, venho aprimorando minhas habilidades na <Box component={'span'} sx={{ color: '#FF9209' }}>escola frontend da Alura</Box>, que considero a melhor instituição de ensino de tecnologia que já conheci. No meu arsenal de habilidades tecnológicas, tenho me dedicado a tecnologias como <Box component={'span'} sx={{ color: '#FF9209' }}>JavaScript <IoLogoJavascript color='#F7DF1E' fontSize='1.25rem' />, TypeScript <SiTypescript color='#3178C6' fontSize='1.25rem' />, e React Js <FaReact color='#61DAFB' fontSize='1.25rem' /></Box>, entre outras. Essas habilidades estão em constante desenvolvimento e prática no meu percurso profissional.
                </Typography>
            </Paper>
        </Box>
    );
}
