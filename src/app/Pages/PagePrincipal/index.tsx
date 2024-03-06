import { Outlet } from "react-router-dom"
import { CabecalhoResponsivo } from "../../../components/CabecalhoResponsivo"
import { CardDeApresentacao } from "../../../components/CardDeApresentacao"
import { Rodape } from "../../../components/Rodape"
import { BannerApresentacao } from "../../../components/BannerApresentacao"


export const PaginaPrincipal = () => {
    return (
        <>
            <CabecalhoResponsivo />
            <BannerApresentacao />
            <CardDeApresentacao />
            <Outlet />
            <Rodape />
        </>
    )
}