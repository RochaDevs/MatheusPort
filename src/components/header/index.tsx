import { Link } from "react-scroll"
import styled from "styled-components"

interface IHeader {
    titulo1: React.ReactNode
    titulo2: React.ReactNode
    titulo3: React.ReactNode
    titulo4: React.ReactNode
    titulo5: React.ReactNode
    icone1: React.ReactNode
    icone2: React.ReactNode
    icone3: React.ReactNode
    icone4: React.ReactNode
    icone5: React.ReactNode
}

const HeaderStyled = styled.header`

    background-color: #161A30;
    height: 3rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #FF9209;
    font-size: 1.25rem;
    font-family: 'Exo 2', sans-serif;

    @media (max-width: 600px) {
        display: none;
    }

`

const LinkStyled = styled(Link)`
    &:hover {
        color: #FFF;
        cursor: pointer;
    }
`

const HeaderMobileStyled = styled.header`

    background-color: #161A30;
    height: 3rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #FF9209;
    font-size: 1.25rem;
    font-family: 'Exo 2', sans-serif;
    width: 100%;

    @media (min-width: 600px) {
        display: none;
    }

`

export const Header = ({ titulo1, titulo2, titulo3, titulo4, titulo5, icone1, icone2, icone3, icone4, icone5 }: IHeader) => {


    return (
        <>
            <HeaderStyled>

                <LinkStyled to="sobremim" smooth={true} duration={500} offset={-100}>
                    {titulo1}
                </LinkStyled>

                <LinkStyled to="projetospessoais" smooth={true} duration={500} offset={-100}>
                    {titulo2}
                </LinkStyled>

                <LinkStyled to="softskilss" smooth={true} duration={500} offset={-100}>
                    {titulo3}
                </LinkStyled>

                <LinkStyled to="hardskilss" smooth={true} duration={500} offset={-100}>
                    {titulo4}
                </LinkStyled>

                <LinkStyled to="skillsdevelopment" smooth={true} duration={500} offset={-100}>
                    {titulo5}
                </LinkStyled>

            </HeaderStyled>

            <HeaderMobileStyled>

                <LinkStyled to="sobremim" smooth={true} duration={500} offset={-100}>
                    {icone1}
                </LinkStyled>

                <LinkStyled to="projetospessoais" smooth={true} duration={500} offset={-100}>
                    {icone2}
                </LinkStyled>

                <LinkStyled to="softskilss" smooth={true} duration={500} offset={-100}>
                    {icone3}
                </LinkStyled>

                <LinkStyled to="hardskilss" smooth={true} duration={500} offset={-100}>
                    {icone4}
                </LinkStyled>

                <LinkStyled to="skillsdevelopment" smooth={true} duration={500} offset={-100}>
                    {icone5}
                </LinkStyled>

            </HeaderMobileStyled>

        </>

    )
}