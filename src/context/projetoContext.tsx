import { createContext, useContext, useState } from "react"
import { IProjetoSelecionado } from "../app/Interfaces/IProjetoSelecionado";

interface IProjetoSelecionadoContext {
    projetoSelecionado: IProjetoSelecionado | null;
    setProjetoSelecionado: (projeto: IProjetoSelecionado | null) => void;
}

interface Ichildren {
    children: React.ReactNode;
}

const ProjetoSelecionadoContext = createContext<IProjetoSelecionadoContext | undefined>(undefined);

export const ProjetoSelecionadoProvider = ({children}: Ichildren) => {

    const [projetoSelecionado, setProjetoSelecionado] = useState<IProjetoSelecionado | null>(null);

    const value = {
        projetoSelecionado,
        setProjetoSelecionado
    }

    return <ProjetoSelecionadoContext.Provider value={value}>{children}</ProjetoSelecionadoContext.Provider>

}

export const useProjetoSelecionado = () => {
    const context = useContext(ProjetoSelecionadoContext);
    if (context === undefined) {
        throw new Error("useTituloDosBotoes must be used within a TituloDosBotoesProvider");
    }
    return context;
};