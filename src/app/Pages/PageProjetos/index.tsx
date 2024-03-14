import { useState } from "react"
import { NavInternaProjetos } from "../../../components/NavInternaProjetos"


export const PaginaProjetos = () => {

    const [componenteAtual, setComponenteAtual] = useState('');

    return (
        <section>
            <NavInternaProjetos />
        </section>
    )
}