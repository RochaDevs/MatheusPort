import { useSpring, animated } from 'react-spring';
import styled from "styled-components";
import { Header } from '../../components/header';

import { MdEmojiPeople } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";

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
        display: flex;
        justify-content: center;
        opacity: 0; /* Começa invisível */
    `

export const AnimatedHeader = ({ titulo1, titulo2, titulo3, titulo4, titulo5 }: IHeader) => {

    const fade = useSpring({
        from: { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        config: { tension: 60, friction: 12, mass: 2 },
        delay: 3000
    });

    return (
        <AnimatedStyled style={fade}>
            <Header
                titulo1={titulo1}
                titulo2={titulo2}
                titulo3={titulo3}
                titulo4={titulo4}
                titulo5={titulo5}
                icone1={<MdEmojiPeople />}
                icone2={<AiOutlineFundProjectionScreen />}
                icone3={<GiSkills />}
                icone4={<FaCode />}
                icone5={<MdOutlineEngineering />}
            />
        </AnimatedStyled>
    );
};
