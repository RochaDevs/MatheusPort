import { BotaoParaSubmeter } from "../BotaoParaSubmeter"
import { InputDeNavegacao } from "../InputDeNavegacao"
import styles from './FormularioParaNavegacao.module.scss'


export const FormularioParaNavegacao = () => {
    return (
        <form className={`${styles.formularioParaNavegacao} d-flex p-1`}>
            <InputDeNavegacao />
            <BotaoParaSubmeter 
                titulo="Buscar"
            />
        </form>
    )
}