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

const SectionPrincipal = styled.section`
    margin-top: 5rem;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
`
const SectionSecundaria = styled.section`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
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

            <SectionPrincipal id="sobremim">
                <SobreMim />
            </SectionPrincipal>

            <SectionSecundaria id="projetospessoais">
                <ProjetosPessoais />
            </SectionSecundaria>

            <SectionPrincipal id="softskilss">
                <SoftSkills />
            </SectionPrincipal>

            <SectionPrincipal id="hardskilss">
                <HardSkills />
            </SectionPrincipal>

            <SectionPrincipal id="skillsdevelopment">
                <DevelopmentSkills />
            </SectionPrincipal>

        </DivContainer>
    )
}