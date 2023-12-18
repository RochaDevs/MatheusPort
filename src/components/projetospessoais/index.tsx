import styled from "styled-components"
import CardProjeto from "./cardprojeto"
import { CarouselInfoProjeto } from "./caroulselinfoprojeto"


const DivContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`

export const ProjetosPessoais = () => {
    return (
        <DivContainer>
            <CardProjeto />
            <CarouselInfoProjeto />
        </DivContainer>
    )
}