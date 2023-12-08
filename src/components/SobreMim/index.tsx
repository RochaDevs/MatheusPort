import styled from "styled-components"
import { AnimatedCardSobreMim } from "./CardSobreMim/AnimatedCardSobreMim"
import { AnimatedPaperSobreMim } from "./PaperSobreMim/AnimatedPaperSobreMim"

const DivContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2.5rem;
`

export const SobreMim = () => {

    return (

        <DivContainer>

            <AnimatedCardSobreMim />
            <AnimatedPaperSobreMim />

        </DivContainer>
    )
}