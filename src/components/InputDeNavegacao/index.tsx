import styles from './InputDeNavegacao.module.scss';

export const InputDeNavegacao = () => {
    return (
        <input 
            type="text" 
            placeholder="Buscar projetos, habilidades, certificações ou artigos"
            className={`${styles.inputDeNavegacao}`}
        
        />
    )
}