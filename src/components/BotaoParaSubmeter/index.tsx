import React from "react"


interface IBotaoParaSubmeter {
    titulo?: string
    icone?: React.ReactNode
}

export const BotaoParaSubmeter = ({titulo, icone}: IBotaoParaSubmeter) => {
    return (
        <button 
            type="submit"
            className="border px-2 py-1 d-flex align-items-center"
        >
            {titulo}
            {icone}
        </button>
    )
}