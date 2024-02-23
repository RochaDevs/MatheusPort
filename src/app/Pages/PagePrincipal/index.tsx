import { Outlet } from "react-router-dom"
import { CabecalhoResponsivo } from "../../../components/CabecalhoResponsivo"
import { CardDeApresentacao } from "../../../components/CardDeApresentacao"
import { Rodape } from "../../../components/Rodape"


export const PaginaPrincipal = () => {
    return (
        <>
            <CabecalhoResponsivo />
            <CardDeApresentacao />
            <Outlet />
            <Rodape />
        </>
    )
}