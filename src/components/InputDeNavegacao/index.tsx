import styles from './InputDeNavegacao.module.scss';

export const InputDeNavegacao = () => {
    return (
        <input 
            type="text" 
            placeholder="Projetos, habilidades, certificações ou artigos"
            className={`${styles.inputDeNavegacao}`}
        
        />
    )
}