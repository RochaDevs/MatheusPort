import styled from "styled-components"
import { PaperSobreMim } from "./PaperSobreMim/PaperSobreMim"
import { AnimatedCardSobreMim } from "./CardSobreMim/AnimatedCardSobreMim"

const DivContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const SobreMim = () => {

    return (

        <DivContainer>

            <AnimatedCardSobreMim />

            <PaperSobreMim/>

        </DivContainer>
    )
}