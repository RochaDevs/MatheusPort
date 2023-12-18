import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import { Box } from "@mui/material";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { CardDevelopment } from "./CardDevelopment";



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

    @media (max-width: 600px) {
        width: 70%
    }
`



export const CarouselDevelopment = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "5rem",
        slidesToShow: 3,
        speed: 500
    };

    const settingsMobile = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0.5rem",
        slidesToShow: 1,
        speed: 500
    };

    return (
        <>
            <Box sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '@media (max-width: 600px)': {
                    display: 'none'
                }
            }}>
                <SliderStyled {...settings} >

                    <CardDevelopment
                        logo={
                            <FaFigma
                                fontSize='4rem'
                                color='#0ACF83'
                            />
                        }
                        titulo={'Figma'}
                        texto1={
                            'Design de Interfaces de Usuário'
                        }
                        texto2={
                            'Prototipagem e Testes de Usabilidade'
                        }
                        texto3={
                            'Colaboração em Design'
                        }
                        texto4={
                            'Compreensão de UX'
                        }
                        texto5={
                            'Design System e Consistência de Marca'
                        }
                        texto6={
                            'Ferramentas de Design Gráfico'
                        }
                        texto7={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <SiJest
                                fontSize='4rem'
                                color='#C21325'
                            />
                        }
                        titulo={'Testes com Jest'}
                        texto1={
                            'Testes Automatizados'
                        }
                        texto2={
                            'Desenvolvimento Orientado a Testes (TDD)'
                        }
                        texto3={
                            'Testes de Unidade e Integração'
                        }
                        texto4={
                            'Depuração de Código'
                        }
                        texto5={
                            'Integração Contínua (CI)'
                        }
                        texto6={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <FaNode
                                fontSize='4rem'
                                color='#339933'
                            />
                        }
                        titulo={'Node JS para Backend'}
                        texto1={
                            'JavaScript para Back-End'
                        }
                        texto2={
                            'Desenvolvimento de APIs'
                        }
                        texto3={
                            'Construção de Aplicações em Tempo Real'
                        }
                        texto4={
                            'Uso de Bancos de Dados'
                        }
                        texto5={
                            'Segurança de Aplicações Web'
                        }
                        texto6={
                            'Microserviços'
                        }
                        texto7={
                            'Sockets e Streaming de Dados'
                        }
                        texto8={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <SiExpress
                                fontSize='4rem'
                                color='#339933'
                            />
                        }
                        titulo={'Express'}
                        texto1={
                            'Criação de Servidores Web'
                        }
                        texto2={
                            'Desenvolvimento de APIs RESTful'
                        }
                        texto3={
                            'Roteamento e Middlewares'
                        }
                        texto4={
                            'Manuseio de Solicitações e Respostas HTTP'
                        }
                        texto5={
                            'Autenticação e Segurança'
                        }
                        texto6={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <SiMongodb
                                fontSize='4rem'
                                color='#47A248'
                            />
                        }
                        titulo={'Mongo DB'}
                        texto1={
                            'Gerenciamento de Bancos de Dados NoSQL'
                        }
                        texto2={
                            'Modelagem de Dados'
                        }
                        texto3={
                            'Escalabilidade e Desempenho'
                        }
                        texto4={
                            'Operações CRUD (Create, Read, Update, Delete)'
                        }
                        texto5={
                            'Segurança do Banco de Dados'
                        }
                        texto6={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <FaBootstrap
                                fontSize='4rem'
                                color='#7952B3'
                            />
                        }
                        titulo={'Bootstrap 5'}
                        texto1={
                            'Design Responsivo e Mobile-First'
                        }
                        texto2={
                            'JavaScript para Componentes Interativos'
                        }
                        texto3={
                            'Práticas de Desenvolvimento Web Acessíveis'
                        }
                        texto4={
                            'Customização através de SASS'
                        }
                        texto5={
                            '...'
                        }
                    />
                </SliderStyled>
            </Box>

            <Box sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '@media (min-width: 600px)': {
                    display: 'none'
                }
            }}>
                <SliderStyled {...settingsMobile} >

                    <CardDevelopment
                        logo={
                            <FaFigma
                                fontSize='4rem'
                                color='#0ACF83'
                            />
                        }
                        titulo={'Figma'}
                        texto1={
                            'Design de Interfaces de Usuário'
                        }
                        texto2={
                            'Prototipagem e Testes de Usabilidade'
                        }
                        texto3={
                            'Colaboração em Design'
                        }
                        texto4={
                            'Compreensão de UX'
                        }
                        texto5={
                            'Design System e Consistência de Marca'
                        }
                        texto6={
                            'Ferramentas de Design Gráfico'
                        }
                        texto7={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <SiJest
                                fontSize='4rem'
                                color='#C21325'
                            />
                        }
                        titulo={'Testes com Jest'}
                        texto1={
                            'Testes Automatizados'
                        }
                        texto2={
                            'Desenvolvimento Orientado a Testes (TDD)'
                        }
                        texto3={
                            'Testes de Unidade e Integração'
                        }
                        texto4={
                            'Depuração de Código'
                        }
                        texto5={
                            'Integração Contínua (CI)'
                        }
                        texto6={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <FaNode
                                fontSize='4rem'
                                color='#339933'
                            />
                        }
                        titulo={'Node JS para Backend'}
                        texto1={
                            'JavaScript para Back-End'
                        }
                        texto2={
                            'Desenvolvimento de APIs'
                        }
                        texto3={
                            'Construção de Aplicações em Tempo Real'
                        }
                        texto4={
                            'Uso de Bancos de Dados'
                        }
                        texto5={
                            'Segurança de Aplicações Web'
                        }
                        texto6={
                            'Microserviços'
                        }
                        texto7={
                            'Sockets e Streaming de Dados'
                        }
                        texto8={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <SiExpress
                                fontSize='4rem'
                                color='#339933'
                            />
                        }
                        titulo={'Express'}
                        texto1={
                            'Criação de Servidores Web'
                        }
                        texto2={
                            'Desenvolvimento de APIs RESTful'
                        }
                        texto3={
                            'Roteamento e Middlewares'
                        }
                        texto4={
                            'Manuseio de Solicitações e Respostas HTTP'
                        }
                        texto5={
                            'Autenticação e Segurança'
                        }
                        texto6={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <SiMongodb
                                fontSize='4rem'
                                color='#47A248'
                            />
                        }
                        titulo={'Mongo DB'}
                        texto1={
                            'Gerenciamento de Bancos de Dados NoSQL'
                        }
                        texto2={
                            'Modelagem de Dados'
                        }
                        texto3={
                            'Escalabilidade e Desempenho'
                        }
                        texto4={
                            'Operações CRUD (Create, Read, Update, Delete)'
                        }
                        texto5={
                            'Segurança do Banco de Dados'
                        }
                        texto6={
                            '...'
                        }
                    />

                    <CardDevelopment
                        logo={
                            <FaBootstrap
                                fontSize='4rem'
                                color='#7952B3'
                            />
                        }
                        titulo={'Bootstrap 5'}
                        texto1={
                            'Design Responsivo e Mobile-First'
                        }
                        texto2={
                            'JavaScript para Componentes Interativos'
                        }
                        texto3={
                            'Práticas de Desenvolvimento Web Acessíveis'
                        }
                        texto4={
                            'Customização através de SASS'
                        }
                        texto5={
                            '...'
                        }
                    />
                </SliderStyled>
            </Box>
        </>
    );
}
