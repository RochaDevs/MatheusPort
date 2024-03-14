import database from '../../../api/database.json';
import styles from './NavInternaProjetos.module.scss';

export const NavInternaProjetos = () => {
    return (
        <nav className={`${styles.navContainer} d-flex gap-2 p-2`}>
            {database.projetos.map((projeto: {titulo: string}) => (
                <button key={projeto.titulo}>{projeto.titulo}</button>
            ))}
        </nav>
    )
}