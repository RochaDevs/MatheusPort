import styled from 'styled-components'
import { CarouselHard } from "./CarouselHard"

const DivContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const HardSkills = () => {
    return (

        <DivContainer>
            <CarouselHard />
        </DivContainer>

    )
}