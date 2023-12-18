import { Box } from "@mui/material";
import Slider from "react-slick";
import styled from "styled-components";
import { RiSpeakFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { TiFlowMerge } from "react-icons/ti";
import { FaExplosion } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { CardSoft } from "./SoftCard";



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
    width: 70%;
  }
`
export const CarouselSoft = () => {

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

          <CardSoft
            logo={
              <RiSpeakFill
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Comunicação'}
            texto1={
              'Promove:'
            }
            texto2={
              'Melhoria na eficiência'
            }
            texto3={
              'Resolução de conflitos'
            }
            texto4={
              'Ambiente de trabalho positivo'
            }
            texto5={
              'Constrói relações de confiança'
            }
            texto6={
              'Tomada de Decisão Melhorada'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <RiTeamFill
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Trabalho em equipe'}
            texto1={
              'Promove:'
            }
            texto2={
              'Combinação de Habilidades e Forças Diversas'
            }
            texto3={
              'Aumento da produtividade'
            }
            texto4={
              'Apoio e motivação'
            }
            texto5={
              'Melhoria da comunicação'
            }
            texto6={
              'Responsabilidade compartilhada'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <TiFlowMerge
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Networking'}
            texto1={
              'Promove:'
            }
            texto2={
              'Acesso a Recursos e Informações'
            }
            texto3={
              'Suporte e Aconselhamento'
            }
            texto4={
              'Colaborações e Parcerias'
            }
            texto5={
              'Construção de Reputação'
            }
            texto6={
              'Aprendizado Contínuo'
            }
            texto7={
              'Apoio na Transição de Carreira'
            }
            texto8={
              '...'
            }
          />

          <CardSoft
            logo={
              <FaExplosion
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Resolução de problemas'}
            texto1={
              'Promove:'
            }
            texto2={
              'Eficiência Operacional'
            }
            texto3={
              'Fortalecimento de Equipes'
            }
            texto4={
              'Inovação e Melhoria Contínua'
            }
            texto5={
              'Desenvolvimento de Liderança'
            }
            texto6={
              'Gestão de Riscos'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <FaHandHoldingHeart
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Paciência e Tolerância'}
            texto1={
              'Promove:'
            }
            texto2={
              'Redução do Estresse'
            }
            texto3={
              'Tomada de Decisão Acalmada'
            }
            texto4={
              'Diversidade e Inclusão'
            }
            texto5={
              'Desenvolvimento de Empatia'
            }
            texto6={
              'Colaboração Eficaz'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <FaArrowUpRightDots
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Flexibilidade e Adaptabilidade'}
            texto1={
              'Promove:'
            }
            texto2={
              'Disposição para Mudar'
            }
            texto3={
              'Resiliência em Face a Desafios'
            }
            texto4={
              'Reação Positiva a Situações Inesperadas'
            }
            texto5={
              'Capacidade de Tomar Decisões Sob Incerteza'
            }
            texto6={
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

          <CardSoft
            logo={
              <RiSpeakFill
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Comunicação'}
            texto1={
              'Promove:'
            }
            texto2={
              'Melhoria na eficiência'
            }
            texto3={
              'Resolução de conflitos'
            }
            texto4={
              'Ambiente de trabalho positivo'
            }
            texto5={
              'Constrói relações de confiança'
            }
            texto6={
              'Tomada de Decisão Melhorada'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <RiTeamFill
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Trabalho em equipe'}
            texto1={
              'Promove:'
            }
            texto2={
              'Combinação de Habilidades e Forças Diversas'
            }
            texto3={
              'Aumento da produtividade'
            }
            texto4={
              'Apoio e motivação'
            }
            texto5={
              'Melhoria da comunicação'
            }
            texto6={
              'Responsabilidade compartilhada'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <TiFlowMerge
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Networking'}
            texto1={
              'Promove:'
            }
            texto2={
              'Acesso a Recursos e Informações'
            }
            texto3={
              'Suporte e Aconselhamento'
            }
            texto4={
              'Colaborações e Parcerias'
            }
            texto5={
              'Construção de Reputação'
            }
            texto6={
              'Aprendizado Contínuo'
            }
            texto7={
              'Apoio na Transição de Carreira'
            }
            texto8={
              '...'
            }
          />

          <CardSoft
            logo={
              <FaExplosion
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Resolução de problemas'}
            texto1={
              'Promove:'
            }
            texto2={
              'Eficiência Operacional'
            }
            texto3={
              'Fortalecimento de Equipes'
            }
            texto4={
              'Inovação e Melhoria Contínua'
            }
            texto5={
              'Desenvolvimento de Liderança'
            }
            texto6={
              'Gestão de Riscos'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <FaHandHoldingHeart
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Paciência e Tolerância'}
            texto1={
              'Promove:'
            }
            texto2={
              'Redução do Estresse'
            }
            texto3={
              'Tomada de Decisão Acalmada'
            }
            texto4={
              'Diversidade e Inclusão'
            }
            texto5={
              'Desenvolvimento de Empatia'
            }
            texto6={
              'Colaboração Eficaz'
            }
            texto7={
              '...'
            }
          />

          <CardSoft
            logo={
              <FaArrowUpRightDots
                fontSize='4rem'
                color='#F06529'
              />
            }
            titulo={'Flexibilidade e Adaptabilidade'}
            texto1={
              'Promove:'
            }
            texto2={
              'Disposição para Mudar'
            }
            texto3={
              'Resiliência em Face a Desafios'
            }
            texto4={
              'Reação Positiva a Situações Inesperadas'
            }
            texto5={
              'Capacidade de Tomar Decisões Sob Incerteza'
            }
            texto6={
              '...'
            }
          />

        </SliderStyled>
      </Box>

    </>
  )
}


