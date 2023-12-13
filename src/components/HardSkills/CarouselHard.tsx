import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import { Box } from "@mui/material";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiAxios } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { CardHard } from "./CardHard";


const SliderStyled = styled(Slider)`
    display: flex;
    height: 100%;
    width: 60%;
    margin-bottom: 10rem;
    .slick-slide {
        transition: all 0.6s ease;
    }
    .slick-center {
        transform: scale(1.1);
        padding: 1rem;
    }
    .slick-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`



export const CarouselHard = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "5rem",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <SliderStyled {...settings} >

                <CardHard
                    logo={
                        <IoLogoCss3
                            fontSize='4rem'
                            color='#1572B6'
                        />
                    }
                    titulo={'CSS3'}
                    texto1={
                        'Responsividade e Mobile First'
                    }
                    texto2={
                        'Layouts e Posicionamento'
                    }
                    texto3={
                        'Display Flex e Grid'
                    }
                    texto4={
                        'Transições e Animações'
                    }
                    texto5={
                        'Propriedades e Valores'
                    }
                    texto6={
                        'Tipografia'
                    }
                    texto7={
                        'Cores e fundos'
                    }
                    texto8={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <IoLogoJavascript
                            fontSize='4rem'
                            color='#F7DF1E'
                        />
                    }
                    titulo={'Javascript'}
                    texto1={
                        'Operadores e Métodos de String e Array'
                    }
                    texto2={
                        'Estruturas de Controle de Fluxo'
                    }
                    texto3={
                        'Funções, Eventos e Classes'
                    }
                    texto4={
                        'Assincronicidade e Promises'
                    }
                    texto5={
                        'Objetos e JSON'
                    }
                    texto6={
                        'Depuração e DevTools'
                    }
                    texto7={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <SiTypescript
                            fontSize='4rem'
                            color='#3178C6'
                        />
                    }
                    titulo={'Typescript'}
                    texto1={
                        'Tipagem Estática e Tipos Básicos'
                    }
                    texto2={
                        'Declaração de Interfaces'
                    }
                    texto3={
                        'Classes e Objetos'
                    }
                    texto4={
                        'Funções e Tipos de Retorno'
                    }
                    texto5={
                        'Generics'
                    }
                    texto6={
                        'Decorators'
                    }
                    texto7={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <FaReact
                            fontSize='4rem'
                            color='#61DAFB'
                        />
                    }
                    titulo={'React'}
                    texto1={
                        'Componentes e Props'
                    }
                    texto2={
                        'Estado (State) e Ciclo de Vida'
                    }
                    texto3={
                        'JSX (JavaScript XML)'
                    }
                    texto4={
                        'React Hooks (State, Effect e Context)'
                    }
                    texto5={
                        'Eventos e Manipulação de Eventos'
                    }
                    texto6={
                        'Renderização Condicional e Listas'
                    }
                    texto7={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <SiReactrouter
                            fontSize='4rem'
                            color='#CF000F'
                        />
                    }
                    titulo={'React Router'}
                    texto1={
                        'Criação de uma Single Page Application - SPA'
                    }
                    texto2={
                        'BrowserRouter, Routes, Route, Link e NavLink'
                    }
                    texto3={
                        'Parâmetros de URL'
                    }
                    texto4={
                        'Navegação Programática'
                    }
                    texto5={
                        'Roteamento Aninhado'
                    }
                    texto6={
                        'Customização de Rotas e Rotas de Erro'
                    }
                    texto7={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <SiReactquery
                            fontSize='4rem'
                            color='#FF4154'
                        />
                    }
                    titulo={'React Query'}
                    texto1={
                        'Fetch de Dados com useQuery'
                    }
                    texto2={
                        'Mutations com useMutation'
                    }
                    texto3={
                        'Cache e Gerenciamento de Estado'
                    }
                    texto4={
                        'Otimizações de Performance'
                    }
                    texto5={
                        'Gerenciamento de Erros'
                    }
                    texto6={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <SiAxios
                            fontSize='4rem'
                            color='#5A29E4'
                        />
                    }
                    titulo={'Axios'}
                    texto1={
                        'Realizar Requisições HTTP'
                    }
                    texto2={
                        'Tratamento de Respostas e Erros'
                    }
                    texto3={
                        'Uso de Promessas'
                    }
                    texto4={
                        'URLs e Parâmetros'
                    }
                    texto5={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <FaSass
                            fontSize='4rem'
                            color='#CC6699'
                        />
                    }
                    titulo={'Sass'}
                    texto1={
                        'Sintaxe SCSS e SASS'
                    }
                    texto2={
                        'Variáveis'
                    }
                    texto3={
                        'Aninhamento'
                    }
                    texto4={
                        'Operações Matemáticas'
                    }
                    texto5={
                        'Funções'
                    }
                    texto6={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <SiStyledcomponents
                            fontSize='4rem'
                            color='#FFC0CB'
                        />
                    }
                    titulo={'Styled Component'}
                    texto1={
                        'Criação de Componentes Estilizados'
                    }
                    texto2={
                        'Aninhamento e Pseudo-Classes'
                    }
                    texto3={
                        'Media Queries e Responsividade'
                    }
                    texto4={
                        'Utilização com Componentes Existentes'
                    }
                    texto5={
                        'Manutenção e Organização do Código'
                    }
                    texto6={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <SiMui
                            fontSize='4rem'
                            color='#007FFF'
                        />
                    }
                    titulo={'MUI components'}
                    texto1={
                        'Uso de Componentes MUI'
                    }
                    texto2={
                        'Personalização de Temas'
                    }
                    texto3={
                        'Componentes de Entrada de Dados'
                    }
                    texto4={
                        'Icons e Buttons'
                    }
                    texto5={
                        'Responsividade e Media Queries'   
                    }
                    texto6={
                        '...'
                    }
                />

                <CardHard
                    logo={
                        <FaHtml5
                            fontSize='4rem'
                            color='#F06529'
                        />
                    }
                    titulo={'HTML5'}
                    texto1={
                        'Estrutura Semântica de Documentos'
                    }
                    texto2={
                        'Formulários HTML'
                    }
                    texto3={
                        'Incorporação de Imagens e Multimídia'
                    }
                    texto4={
                        'Links e Navegação'
                    }
                    texto5={
                        'Uso de Divs e Span:'
                    }
                    texto6={
                        'Tabelas HTML'
                    }
                    texto7={
                        '...'
                    }
                />

            </SliderStyled>
        </Box>
    );
}
