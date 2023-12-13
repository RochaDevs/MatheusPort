import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

interface IHeader {
    titulo1: React.ReactNode
    titulo2: React.ReactNode
    titulo3: React.ReactNode
    titulo4: React.ReactNode
    titulo5: React.ReactNode
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

`

const LinkStyled = styled(Link)`
    &:hover {
        color: #FFF;
        cursor: pointer;
    }
    &:active {
        color: #FFF;
    }
`

export const Header = ({ titulo1, titulo2, titulo3, titulo4, titulo5 }: IHeader) => {


    return (
        <HeaderStyled>
            <LinkStyled activeClass="active" to="sobremim" smooth={true} duration={500} offset={-100}>
                {titulo1}
            </LinkStyled>

            <LinkStyled activeClass="active" to="projetospessoais" smooth={true} duration={500} offset={-100}>
                {titulo2}
            </LinkStyled>

            <LinkStyled activeClass="active" to="softskilss" smooth={true} duration={500} offset={-100}>
                {titulo3}
            </LinkStyled>

            <LinkStyled activeClass="active" to="hardskilss" smooth={true} duration={500} offset={-100}>
                {titulo4}
            </LinkStyled>

            <LinkStyled activeClass="active" to="skillsdevelopment" smooth={true} duration={500} offset={-100}>
                {titulo5}
            </LinkStyled>

        </HeaderStyled>
    )
}