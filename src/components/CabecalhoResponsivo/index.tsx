
import { Dropdown } from 'react-bootstrap';
import { BotaoParaLink } from '../BotaoParaLink';
import { FormularioParaNavegacao } from '../FormularioParaNavegacao';
import styles from './CabecalhoResponsivo.module.scss';

export const CabecalhoResponsivo = () => {
    return (
        <header className="px-5 w-100 d-flex">

            <Dropdown className='d-xl-none'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="me-2">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as="div">
                        <BotaoParaLink link="/" titulo="Início" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <BotaoParaLink link="/projetos" titulo="Projetos" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <BotaoParaLink link="/habilidades" titulo="Habilidades" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <BotaoParaLink link="/certificacoes" titulo="Certificações" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <BotaoParaLink link="/artigos" titulo="Artigos" />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


            <div className={`${styles.navBarCollapse} d-flex gap-2 d-none d-xl-flex`}>
                <BotaoParaLink link="/" titulo="Início" />
                <BotaoParaLink link="/projetos" titulo="Projetos" />
                <BotaoParaLink link="/habilidades" titulo="Habilidades" />
                <BotaoParaLink link="/certificacoes" titulo="Certificações" />
                <BotaoParaLink link="/artigos" titulo="Artigos" />
            </div>


            <FormularioParaNavegacao />

            <div>
                <BotaoParaLink link="/administracao" titulo="Gerenciar" />
                <BotaoParaLink link="/foto" titulo="Foto" />
            </div>

        </header>
    );
}
