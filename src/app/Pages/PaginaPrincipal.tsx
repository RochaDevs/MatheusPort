import { SobreMim } from "../../components/SobreMim"
import styled from "styled-components"
import { AnimatedHeader } from "./AnimatedPaginaPrincipal"
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

const SectionTest = styled.section`
    margin-top: 4rem;
    height: 100vh;
    box-sizing: border-box;
`

export const PaginaPrincipal = () => {

    return (
        <DivContainer>

            <AnimatedHeader
                titulo1={'Sobre mim'}
                titulo2={'Projetos Pessoais'}
                titulo3={'Projetos Profissionais'}
                titulo4={'Soft Skills'}
                titulo5={'Hard Skills'}
                titulo6={'Skills em desenvolvimento'}
            />

            <SectionSobreMim id="sobremim">
                <SobreMim />
            </SectionSobreMim>

            <SectionTest id="projetospessoais">
                <h1>Projetos Pessoais</h1>
            </SectionTest>

            <SectionTest id="projetosfreelancer">
                <h1>Projetos Profissionais</h1>
            </SectionTest>

            <SectionSoftSkills id="softskilss">
                <SoftSkills />
            </SectionSoftSkills>

            <SectionHardSkills id="hardskilss">
                <HardSkills />
            </SectionHardSkills>

            <SectionDevelopmentSkills id="skillsemdesenvolvimento">
                <DevelopmentSkills/>
            </SectionDevelopmentSkills>

        </DivContainer>
    )
}