import styled from "styled-components"
import { SoftSkills } from "../../components/softskills"
import { HardSkills } from "../../components/hardskills"
import { DevelopmentSkills } from "../../components/developmentskills"
import { ProjetosPessoais } from "../../components/projetospessoais"
import { AnimatedHeader } from "./animatedpaginaprincipal"
import { SobreMim } from "../../components/sobremim"

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
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
`
const SectionProjetosPessoais = styled.section`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
`

const SectionSoftSkills = styled.section`
    margin-top: 4rem;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
`

const SectionHardSkills = styled.section`
    margin-top: 4rem;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
`

const SectionDevelopmentSkills = styled.section`
    margin-top: 4rem;
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

            <SectionSobreMim id="sobremim">
                <SobreMim />
            </SectionSobreMim>

            <SectionProjetosPessoais id="projetospessoais">
                <ProjetosPessoais />
            </SectionProjetosPessoais>

            <SectionSoftSkills id="softskilss">
                <SoftSkills />
            </SectionSoftSkills>

            <SectionHardSkills id="hardskilss">
                <HardSkills />
            </SectionHardSkills>

            <SectionDevelopmentSkills id="skillsdevelopment">
                <DevelopmentSkills/>
            </SectionDevelopmentSkills>

        </DivContainer>
    )
}