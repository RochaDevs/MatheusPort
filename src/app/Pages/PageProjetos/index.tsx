import { NavInternaProjetos } from "../../../components/NavInternaProjetos"
import { useTituloDosBotoes } from "../../../context/projetoContext";
import { TodosOSProjetos } from "./todosOSProjetos";


export const PaginaProjetos = () => {

    const {tituloDoBotao} = useTituloDosBotoes()

    const renderizarComponente = () => {
        
        switch (tituloDoBotao) {
            case 'Todos':
                return (
                    <TodosOSProjetos />
                );
            default:
                return (
                    <h1>Qualquer</h1>
                );
        }
    };

    return (
        <section>
            <NavInternaProjetos />
            {renderizarComponente()}
        </section>
    )
}