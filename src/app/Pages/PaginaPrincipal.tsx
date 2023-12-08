import { SobreMim } from "../../components/SobreMim"
import styled from "styled-components"
import { AnimatedHeader } from "./AnimatedPaginaPrincipal"
import { SoftSkills } from "../../components/SoftSkills"
import { HardSkills } from "../../components/HardSkills"

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

const SectionSoftSkills = styled.section`
    margin-top: 5rem;
    height: 100vh;
    width: 100%;
`

const SectionHardSkills = styled.section`
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

            <SectionTest id="skillsemdesenvolvimento">
                <h1>Skills em desenvolvimento</h1>
            </SectionTest>

        </DivContainer>
    )
}