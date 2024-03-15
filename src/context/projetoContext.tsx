import { createContext, useContext, useState } from "react"

interface ITituloDosBotoesContext {
    tituloDoBotao: string
    setTituloDoBotao: (tituloBotao: string) => void;
}

interface Ichildren {
    children: React.ReactNode;
}

const TituloDosBotoesContext = createContext<ITituloDosBotoesContext | undefined>(undefined);

export const TituloDosBotoesProvider = ({children}: Ichildren) => {

    const [tituloDoBotao, setTituloDoBotao] = useState<string>('');

    const value = {
        tituloDoBotao,
        setTituloDoBotao
    }

    return <TituloDosBotoesContext.Provider value={value}>{children}</TituloDosBotoesContext.Provider>

}

export const useTituloDosBotoes = () => {
    const context = useContext(TituloDosBotoesContext);
    if (context === undefined) {
        throw new Error("useTituloDosBotoes must be used within a TituloDosBotoesProvider");
    }
    return context;
};