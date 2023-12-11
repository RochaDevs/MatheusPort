import styled from 'styled-components'
import { CarouselDevelopment } from './CarouselDevelopment'

const DivContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const DevelopmentSkills = () => {
    return (

        <DivContainer>
            <CarouselDevelopment />
        </DivContainer>

    )
}