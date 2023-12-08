import styled from 'styled-components'
import { Soft } from '../SoftSkills'
import { Hard } from '../HardSkills'

const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const SoftAndHardSkills = () => {
    return (
        <DivContainer>

            {/* <Soft /> */}

            <Hard />

        </DivContainer>
    )
}