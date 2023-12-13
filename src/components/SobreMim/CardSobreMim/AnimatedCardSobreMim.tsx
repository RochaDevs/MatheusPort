import { useSpring, animated } from 'react-spring';
import styled from "styled-components"
import { CardSobreMim } from '.';


const AnimatedDiv = styled(animated.div)`

    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

`

export const AnimatedCardSobreMim = () => {

    const cardSpring = useSpring({
        from: { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        config: { tension: 90, friction: 12, mass: 2 },
        delay: 1000
    });

    return (

        <AnimatedDiv style={cardSpring}>
            <CardSobreMim
                imagem="/public/eu.PNG"
                nome="Matheus Rocha"
                cargo="Desenvolvedor Frontend"
            />
        </AnimatedDiv>

    );
};
