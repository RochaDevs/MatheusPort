
interface IBotaoParaSubmeter {
    titulo: string
}

export const BotaoParaSubmeter = ({titulo}: IBotaoParaSubmeter) => {
    return (
        <button 
            type="submit"
            className="border p-1"
        >
            {titulo}
        </button>
    )
}