import { Outlet } from "react-router-dom"
import { CabecalhoResponsivo } from "../../../components/CabecalhoResponsivo"
import { CardDeApresentacao } from "../../../components/CardDeApresentacao"
import { Rodape } from "../../../components/Rodape"
import { BannerApresentacao } from "../../../components/BannerApresentacao"
import styles from './PagePrincipal.module.scss';


export const PaginaPrincipal = () => {
    return (
        <>
            <CabecalhoResponsivo />
            <BannerApresentacao />
            <div className={`
                ${styles.divContainerCardEhOutlet} 
                d-none d-md-flex gap-3
                `}
            >
                <div className={`${styles.divCardDeApresentacao}`}>
                    <CardDeApresentacao />
                </div>
                <div className={`${styles.divOutlet} pe-2`}>
                    <Outlet />
                </div>
            </div>

            <div className={`
                ${styles.divContainerCardEhOutlet_sm} 
                d-flex d-md-none flex-column justify-content-center align-items-center
                `}
            >
                <div className={`${styles.divCardDeApresentacao_sm} d-flex justify-content-center align-items-center`}>
                    <CardDeApresentacao />
                </div>
                <div className={`${styles.divOutlet_sm}`}>
                    <Outlet />
                </div>
            </div>
            <Rodape />
        </>
    )
}