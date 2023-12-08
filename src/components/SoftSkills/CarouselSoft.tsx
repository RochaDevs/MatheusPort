import { Box } from "@mui/material";
import Slider from "react-slick";
import styled from "styled-components";
import { CardSoft } from "./SoftHard";
import { RiSpeakFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { TiFlowMerge } from "react-icons/ti";
import { FaExplosion } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";



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
export const CarouselSoft = () => {

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

        <CardSoft
          logo={
            <RiSpeakFill
              fontSize='4rem'
              color='#F06529'
            />
          }
          titulo={'Comunicação'}
          texto1={
            'Comunicação'
          }
          texto2={
            'Comunicação'
          }
          texto3={
            'Comunicação'
          }
          texto4={
            'Comunicação'
          }
          texto5={
            'Comunicação'
          }
          texto6={
            'Comunicação'
          }
          texto7={
            'Comunicação'
          }
          texto8={
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
            'Trabalho em Equipe'
          }
          texto2={
            'Trabalho em Equipe'
          }
          texto3={
            'Trabalho em Equipe'
          }
          texto4={
            'Trabalho em Equipe'
          }
          texto5={
            'Trabalho em Equipe'
          }
          texto6={
            'Trabalho em Equipe'
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
            'Networking'
          }
          texto2={
            'Networking'
          }
          texto3={
            'Networking'
          }
          texto4={
            'Networking'
          }
          texto5={
            'Networking'
          }
          texto6={
            'Networking'
          }
          texto7={
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
          titulo={'Resolução de conflitos'}
          texto1={
            'Resolução de conflitos'
          }
          texto2={
            'Resolução de conflitos'
          }
          texto3={
            'Resolução de conflitos'
          }
          texto4={
            'Resolução de conflitos'
          }
          texto5={
            'Resolução de conflitos'
          }
          texto6={
            'Resolução de conflitos'
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
            'Paciência e Tolerância'
          }
          texto2={
            'Paciência e Tolerância'
          }
          texto3={
            'Paciência e Tolerância'
          }
          texto4={
            'Paciência e Tolerância'
          }
          texto5={
            'Paciência e Tolerância'
          }
          texto6={
            'Paciência e Tolerância'
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
            'Flexibilidade e Adaptabilidade'
          }
          texto2={
            'Flexibilidade e Adaptabilidade'
          }
          texto3={
            'Flexibilidade e Adaptabilidade'
          }
          texto4={
            'Flexibilidade e Adaptabilidade'
          }
          texto5={
            'Flexibilidade e Adaptabilidade'
          }
          texto6={
            '...'
          }
        />

      </SliderStyled>
    </Box>
  );
}


