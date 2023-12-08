import { useSpring, animated } from 'react-spring';
import styled from "styled-components"
import { PaperSobreMim } from '.';


const AnimatedDiv = styled(animated.div)`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 

`

export const AnimatedPaperSobreMim = () => {

    const cardSpring = useSpring({
        from: { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        config: { tension: 90, friction: 12, mass: 2 },
        delay: 2000
    });

    return (

        <AnimatedDiv style={cardSpring}>
            <PaperSobreMim />
        </AnimatedDiv>

    );
};
