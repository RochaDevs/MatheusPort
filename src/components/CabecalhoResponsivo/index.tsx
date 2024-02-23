import Navbar from 'react-bootstrap/Navbar';
import { BotaoParaLink } from '../BotaoParaLink';
import { FormularioParaNavegacao } from '../FormularioParaNavegacao';
import styles from './CabecalhoResponsivo.module.scss';

export const CabecalhoResponsivo = () => {
    return (
        <header className="px-5">
            <Navbar expand="xl" className='w-100 justify-content-between align-items-center d-flex'>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <div className={`${styles.navBarCollapse} d-flex gap-2`}>
                            <BotaoParaLink
                                link="/"
                                titulo="Início"
                            />
                            <BotaoParaLink
                                link="/projetos"
                                titulo="Projetos"
                            />
                            <BotaoParaLink
                                link="/habilidades"
                                titulo="Habilidades"
                            />
                            <BotaoParaLink
                                link="/certificacoes"
                                titulo="Certificações"
                            />
                            <BotaoParaLink
                                link="/artigos"
                                titulo="Artigos"
                            />
                        </div>

                    </Navbar.Collapse>
                </div>

                <FormularioParaNavegacao />

                <div>
                    <BotaoParaLink
                        link="/administracao"
                        titulo="Gerenciar"
                    />

                    <BotaoParaLink
                        link="/foto"
                        titulo="Foto"
                    />
                </div>


            </Navbar>
        </header>
    );
}