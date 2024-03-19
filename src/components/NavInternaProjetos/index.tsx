import database from '../../../api/database.json';
import { useProjetoSelecionado } from '../../context/projetoContext';
import styles from './NavInternaProjetos.module.scss';

export const NavInternaProjetos = () => {

    const {setProjetoSelecionado} = useProjetoSelecionado()

    return (
        <nav className={`${styles.navContainer} d-flex gap-2 p-2`}>
            {database.projetos.map((projeto) => (
                <button 
                    key={projeto.titulo}
                    onClick={() => setProjetoSelecionado(projeto)}
                >
                    {projeto.titulo}
                </button>
            ))}
        </nav>
    )
}