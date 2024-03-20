import styles from './ProjetoSelecionado.module.scss';
import { IProjetoSelecionado } from '../../Interfaces/IProjetoSelecionado';

export const ProjetoSelecionado = ({ titulo, finalizadoEm, por, linguagemUsada, frameworkUsado, estilizacao }: IProjetoSelecionado) => {
    return (
        <section className={`${styles.card} d-flex flex-column p-2 gap-5`}>
            <div className={`d-flex justify-content-between`}>
                <div className={`${styles.arvoreDeHabilidades} card p-2`}>
                    <h4>Arvore de Habilidades</h4>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Linguagem usada: {linguagemUsada}
                        </p>
                        <p className="card-text">
                            Framework usado: {frameworkUsado}
                        </p>
                        <p className="card-text">
                            Estilização: {estilizacao}
                        </p>
                    </div>
                </div>
                <div className={`${styles.apresentacaoTextual} card`}>
                    <div className="card-img-top" style={{ backgroundColor: 'chocolate', height: '300px', width: '100%' }}></div>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">
                            Finalizado em: {finalizadoEm}
                        </p>
                        <p className="card-text">
                            Finalizado em: {por}
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className={`d-flex justify-content-center`}>
                <div className={`card w-75`}>
                    <div className="card-img-top" style={{ backgroundColor: 'chocolate', height: '300px', width: '100%' }}></div>
                    <h1>Vídeo de Apresentação</h1>
                </div>
            </div>
        </section>
    )
}