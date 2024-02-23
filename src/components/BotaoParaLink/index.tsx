import { NavLink } from "react-router-dom"
import styles from './BotaoParaLink.module.scss';

interface IBotaoParaLink {
    link: string
    titulo: string
}

export const BotaoParaLink = ({link, titulo}: IBotaoParaLink) => {
    return (
        <NavLink to={link} className={`${styles.botaoParaLink} p-1`}>
            <button>
                {titulo}
            </button>
        </NavLink>
    )
}