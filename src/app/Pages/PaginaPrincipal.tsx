import { SobreMim } from "../../components/SobreMim"
import styled from "styled-components"
import { AnimatedHeader } from "./AnimatedPaginaPrincipal"

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const SectionSobreMim = styled.section`
    margin-top: 5rem;
    height: 100vh;
    width: 100%;
`

const SectionTest = styled.section`
    margin-top: 5rem;
    height: 100vh;
`

export const PaginaPrincipal = () => {

    return (
        <DivContainer>
            <AnimatedHeader
                titulo1={'Sobre mim'}
                titulo2={'Projetos Pessoais'}
                titulo3={'Projetos Freelancer'}
                titulo4={'Skills adquiridas'}
                titulo5={'Skills em desenvolvimento'}
            />
            <SectionSobreMim id="sobremim">
                <SobreMim />
            </SectionSobreMim>
            <SectionTest id="projetospessoais">
                <h1>Projetos Pessoais</h1>
            </SectionTest>
            <SectionTest id="projetosfreelancer">
                <h1>Projetos Freelancer</h1>
            </SectionTest>
            <SectionTest id="skillsadquiridas">
                <h1>Skills adquiridas</h1>
            </SectionTest>
            <SectionTest id="skillsemdesenvolvimento">
                <h1>Skills em desenvolvimento</h1>
            </SectionTest>
        </DivContainer>
    )
}