import { NavLink } from "react-router-dom"
import styles from './BotaoParaLink.module.scss';

interface IBotaoParaLink {
    link: string
    titulo: string
    corPlanoDeFundo?: string
    corDaFonte?: string
    px?: string
    py?: string
}

export const BotaoParaLink = ({ link, titulo, corPlanoDeFundo, corDaFonte, px, py }: IBotaoParaLink) => {
    return (
        <NavLink
            to={link}
            className={({isActive}) =>
                isActive ? `${styles.ativo}` : `${styles.botaoParaLink} ${px} ${py}`
            }
            style={{ backgroundColor: corPlanoDeFundo, color: corDaFonte }}
        >
            <button>
                {titulo}
            </button>
        </NavLink>
    )
}