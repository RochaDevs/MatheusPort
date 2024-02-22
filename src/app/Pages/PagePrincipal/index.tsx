import { Outlet } from "react-router-dom"
import { Cabecalho } from "../../../components/Cabecalho"
import { CardDeApresentacao } from "../../../components/CardDeApresentacao"
import { Rodape } from "../../../components/Rodape"


export const PaginaPrincipal = () => {
    return (
        <>
            <Cabecalho />
            <CardDeApresentacao />
            <Outlet />
            <Rodape />
        </>
    )
}