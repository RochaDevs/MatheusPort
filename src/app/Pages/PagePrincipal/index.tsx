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
                d-none d-md-flex
                `}
            >
                <div className={`${styles.divCardDeApresentacao}`}>
                    <CardDeApresentacao />
                </div>
                <div className={`${styles.divOutlet}`}>
                    <Outlet />
                </div>
            </div>

            <div className={`
                ${styles.divContainerCardEhOutlet_md} 
                d-none d-sm-flex d-md-none flex-column justify-content-center align-items-center
                `}
            >
                <div className={`${styles.divCardDeApresentacao_md}`}>
                    <CardDeApresentacao />
                </div>
                <div className={`${styles.divOutlet_md}`}>
                    <Outlet />
                </div>
            </div>
            <Rodape />
        </>
    )
}