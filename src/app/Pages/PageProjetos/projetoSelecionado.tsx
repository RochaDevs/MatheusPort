import { NavLink } from 'react-router-dom';
import styles from './ProjetoSelecionado.module.scss';
import { IProjetoSelecionado } from '../../Interfaces/IProjetoSelecionado';

export const ProjetoSelecionado = ({ titulo, finalizadoEm, por, linguagemUsada, frameworkUsado, estilizacao }: IProjetoSelecionado) => {
    return (
        <div className={styles.Card}>
            <NavLink to={''}>
                <div>
                    <img src="" alt="" />
                    <h1>{titulo}</h1>
                    <p>Finalizado em: {finalizadoEm}</p>
                    <p>Por: {por}</p>
                    <p>Linguagem usada: {linguagemUsada}</p>
                    <p>Framework usado: {frameworkUsado}</p>
                    <p>Estilização: {estilizacao}</p>
                </div>
            </NavLink>
        </div>
    )
}