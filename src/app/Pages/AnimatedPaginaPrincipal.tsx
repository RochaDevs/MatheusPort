    import React from 'react';
    import { useSpring, animated } from 'react-spring';
    import { Header } from '../../components/header';
    import styled from "styled-components"

    interface IHeader {
        titulo1: React.ReactNode
        titulo2: React.ReactNode
        titulo3: React.ReactNode
        titulo4: React.ReactNode
        titulo5: React.ReactNode
    }

    const AnimatedStyled = styled(animated.div)`
        position: fixed;
        z-index: 1000;
        top: 0;
        width: 95%;
    `

    export const AnimatedHeader = ({ titulo1, titulo2, titulo3, titulo4, titulo5 }: IHeader) => {
        // Configurando a animação
        const fade = useSpring({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 3000 }, // Duração da animação em milissegundos
            delay: 1000
        });

        return (
            <AnimatedStyled style={fade}>
                <Header 
                    titulo1={titulo1}
                    titulo2={titulo2}
                    titulo3={titulo3}
                    titulo4={titulo4}
                    titulo5={titulo5}
                />
            </AnimatedStyled>
        );
    };
