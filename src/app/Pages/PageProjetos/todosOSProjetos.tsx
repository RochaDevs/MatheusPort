import database from '../../../../api/database.json';

export const TodosOSProjetos = () => {
    return (
        <div>
            {database.projetos.map((projeto: any) => (
                <h1 key={projeto.titulo}>{projeto.titulo}</h1>
            ))}
        </div>
    )
}