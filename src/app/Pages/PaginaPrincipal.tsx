import styled from "styled-components"
import { AnimatedHeader } from "./AnimatedPaginaPrincipal"
import { SobreMim } from "../../components/SobreMim"
import { ProjetosPessoais } from "../../components/projetospessoais"
import { SoftSkills } from "../../components/SoftSkills"
import { HardSkills } from "../../components/HardSkills"
import { DevelopmentSkills } from "../../components/DevelopmentSkills"


const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    gap: 6rem;
`

const SectionSobreMim = styled.section`
    margin-top: 5rem;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
`

const SectionProjetosPessoais = styled.section`
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
`

const ContainerGeral = styled.section`
    margin-top: 4rem;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 600px) {
        margin-top: 0rem;
    }
`

export const PaginaPrincipal = () => {

    return (
        <DivContainer>

            <AnimatedHeader
                titulo1={'Sobre mim'}
                titulo2={'Projetos Pessoais'}
                titulo3={'Soft Skills'}
                titulo4={'Hard Skills'}
                titulo5={'Skills em desenvolvimento'}
            />

            <SectionSobreMim id="sobremim">
                <SobreMim />
            </SectionSobreMim>

            <SectionProjetosPessoais id="projetospessoais">
                <ProjetosPessoais />
            </SectionProjetosPessoais>

            <ContainerGeral id="softskilss">
                <SoftSkills />
            </ContainerGeral>

            <ContainerGeral id="hardskilss">
                <HardSkills />
            </ContainerGeral>

            <ContainerGeral id="skillsdevelopment">
                <DevelopmentSkills />
            </ContainerGeral>

        </DivContainer>
    )
}