import { NavInternaProjetos } from "../../../components/NavInternaProjetos"
import { useProjetoSelecionado} from "../../../context/projetoContext";
import { ProjetoSelecionado } from "./projetoSelecionado";
import { TodosOSProjetos } from "./todosOSProjetos";


export const PaginaProjetos = () => {

    const {projetoSelecionado} = useProjetoSelecionado()

    const renderizarComponente = () => {
        
        switch (true) {
            case projetoSelecionado === null || projetoSelecionado?.titulo === "Todos" :
                return (
                    <TodosOSProjetos />
                );
            default:
                return (
                    <ProjetoSelecionado 
                        titulo={projetoSelecionado?.titulo}
                        key={projetoSelecionado?.titulo}
                        finalizadoEm={projetoSelecionado?.finalizadoEm}
                        por={projetoSelecionado?.por}
                        linguagemUsada={projetoSelecionado?.linguagemUsada}
                        frameworkUsado={projetoSelecionado?.frameworkUsado}
                        estilizacao={projetoSelecionado?.estilizacao}
                    />
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