
import { Dropdown } from 'react-bootstrap';
import { BotaoParaLink } from '../BotaoParaLink';
import { FormularioParaNavegacao } from '../FormularioParaNavegacao';
import styles from './CabecalhoResponsivo.module.scss';

export const CabecalhoResponsivo = () => {
    return (
        <header className="px-4 py-3 w-100 d-flex justify-content-between align-items-center">

            <Dropdown className='d-sm-none d-xs-flex'>
                <Dropdown.Toggle 
                    variant="success" 
                    id="dropdown-basic" 
                    className="me-2"
                    style={{
                        backgroundColor: '#000000',
                        border: 'none',
                        borderRadius: '0',
                        height: '100%'
                    }}    
                    >
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu style={{
                    zIndex: '1000'
                }}>
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


            <div className={`${styles.navBarCollapse} d-flex gap-2 d-none d-sm-flex`}>
                <BotaoParaLink link="/" titulo="Início" />
                <BotaoParaLink link="/projetos" titulo="Projetos" />
                <BotaoParaLink link="/habilidades" titulo="Habilidades" />
                <BotaoParaLink link="/certificacoes" titulo="Certificações" />
                <BotaoParaLink link="/artigos" titulo="Artigos" />
            </div>


            <FormularioParaNavegacao />

            <div className='d-flex align-items-center gap-2'>
                <BotaoParaLink 
                    link="/administracao" 
                    titulo="Gerenciar" 
                    corPlanoDeFundo='#000000'
                    corDaFonte='#FFFFFF'    
                    px='px-3'
                    py='py-2'
                />
                <img src="/public/eu_resized.PNG" alt="Foto pequena de Matheus Rocha " />
            </div>

        </header>
    );
}
