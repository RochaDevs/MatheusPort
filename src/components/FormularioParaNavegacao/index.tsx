import { BotaoParaSubmeter } from "../BotaoParaSubmeter"
import { InputDeNavegacao } from "../InputDeNavegacao"
import styles from './FormularioParaNavegacao.module.scss'
import { CiSearch } from "react-icons/ci";


export const FormularioParaNavegacao = () => {
    return (
        <form className={`${styles.formularioParaNavegacao} d-flex p-1 d-none d-lg-flex`}>
            <InputDeNavegacao />
            <BotaoParaSubmeter
                icone={
                    <CiSearch fontSize={'1.5rem'} />
                }
            />
        </form>
    )
}