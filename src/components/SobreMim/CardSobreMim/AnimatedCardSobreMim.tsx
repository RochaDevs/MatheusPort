import { useSpring, animated } from 'react-spring';
import { CardSobreMim } from "./CardSobreMim";
import styled from "styled-components"


const AnimatedDiv = styled(animated.div)`

    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const AnimatedCardSobreMim = () => {
    // Configuração da animação
    const cardSpring = useSpring({
        from: { transform: 'translate3d(0, -100%, 0)' },
        to: { transform: 'translate3d(0, 0, 0)' },
        config: { tension: 100, friction: 7 }
    });

    return (

        <AnimatedDiv style={cardSpring}>
            <CardSobreMim
                imagem="/public/eu.PNG"
                nome="Olá, sou Matheus Rocha"
                cargo="Desenvolvedor Frontend"
            />
        </AnimatedDiv>

    );
};
