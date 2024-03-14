import { RiLoopRightFill } from "react-icons/ri";
import { FaPersonWalking } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import styles from './PageInicial.module.scss';

export const PaginaInicial = () => {
    return (

        <>
            <section className="flex-column gap-1 p-2 pe-5 pt-3 d-none d-md-flex gap-3">
                <div>
                    <h3 className="d-flex align-items-center gap-2" style={{ color: '#9195F6' }}>
                        <RiLoopRightFill color="#9195F6" />
                        Sobre mim
                    </h3>
                    <p>
                        Olá! Meu nome é Matheus e tenho <strong>23 anos</strong> de idade. Atualmente, resido em <strong>São Paulo-SP</strong>, mas já vivenciei a diversidade de várias cidades como Indaiatuba, Praia Grande e Salto de Pirapora. Sou apaixonado por explorar novos lugares e absorver as diferentes culturas e experiências que cada um oferece. Estou noivo da incrível Sara, com quem compartilho muitos momentos especiais. Nos meus tempos livres, você pode me encontrar mergulhado no universo dos mangás, sendo <strong>'Jujutsu Kaisen'</strong> o meu favorito. Além disso, adoro caminhar ao lado de pessoas queridas, preparar um bom café e <strong>colocar minha criatividade em prática desenvolvendo aplicações web.</strong>
                    </p>
                </div>
                <div>
                    <h3 className="d-flex align-items-center gap-2" style={{ color: '#9195F6' }}>
                        <FaPersonWalking color="#9195F6" />
                        Trajetória
                    </h3>
                    <p>
                        Sou formado como <strong>Técnico em Química</strong> e iniciei minha carreira trabalhando como operador de pesagem na <strong>L'oréal</strong>, onde permaneci por quase 2 anos. Apesar da experiência valiosa, percebi que essa área não era a minha verdadeira vocação. Em busca de novos horizontes, migrei para a área de Logística, atuando como Representante de Envios no <strong>Mercado Livre</strong> por aproximadamente um ano. Essa experiência, embora enriquecedora, também não ressoou com meus interesses profundos. Retornei, então, a uma paixão antiga: a área de Cenografia. Foi um período de mais de um ano de aprendizado e crescimento. Contudo, foi o meu envolvimento com <strong>softwares e hardwares específicos</strong> que acendeu uma nova chama em mim: <strong>o amor pela área de TI.</strong> Esse interesse me levou a começar os estudos para me tornar um desenvolvedor frontend.
                    </p>
                </div>
                <div>
                    <h3 className="d-flex align-items-center gap-2" style={{ color: '#9195F6' }}>
                        <MdSchool color="#9195F6" />
                        Formação
                    </h3>
                    <p>
                        Estou no segundo semestre do curso de <strong>Análise e Desenvolvimento de Sistemas na Faculdade Descomplica,</strong> uma instituição de ensino verdadeiramente incrível. Há quase um ano, venho aprimorando minhas habilidades na <strong>escola Front-End da Alura</strong>, que considero a melhor instituição de ensino de tecnologia que já conheci. No meu arsenal de habilidades tecnológicas, tenho me dedicado a tecnologias como <strong>JavaScript, TypeScript, e React Js, Next,js</strong> entre outras. Essas habilidades estão em constante desenvolvimento e prática no meu percurso profissional.
                    </p>
                </div>
            </section>

            <section className="flex-column gap-1 px-4 d-md-none d-flex justify-content-center align-items-center gap-3">
                <div className={styles.divContainer}>
                    <h3 className="d-flex align-items-center gap-2" style={{ color: '#9195F6' }}>
                        <RiLoopRightFill color="#9195F6" />
                        Sobre mim
                    </h3>
                    <p>
                        Olá! Meu nome é Matheus e tenho <strong>23 anos</strong> de idade. Atualmente, resido em <strong>São Paulo-SP</strong>, mas já vivenciei a diversidade de várias cidades como Indaiatuba, Praia Grande e Salto de Pirapora. Sou apaixonado por explorar novos lugares e absorver as diferentes culturas e experiências que cada um oferece. Estou noivo da incrível Sara, com quem compartilho muitos momentos especiais. Nos meus tempos livres, você pode me encontrar mergulhado no universo dos mangás, sendo <strong>'Jujutsu Kaisen'</strong> o meu favorito. Além disso, adoro caminhar ao lado de pessoas queridas, preparar um bom café e <strong>colocar minha criatividade em prática desenvolvendo aplicações web.</strong>
                    </p>
                </div>
                <div className={styles.divContainer}>
                    <h3 className="d-flex align-items-center gap-2" style={{ color: '#9195F6' }}>
                        <FaPersonWalking color="#9195F6" />
                        Trajetória
                    </h3>
                    <p>
                        Sou formado como <strong>Técnico em Química</strong> e iniciei minha carreira trabalhando como operador de pesagem na <strong>L'oréal</strong>, onde permaneci por quase 2 anos. Apesar da experiência valiosa, percebi que essa área não era a minha verdadeira vocação. Em busca de novos horizontes, migrei para a área de Logística, atuando como Representante de Envios no <strong>Mercado Livre</strong> por aproximadamente um ano. Essa experiência, embora enriquecedora, também não ressoou com meus interesses profundos. Retornei, então, a uma paixão antiga: a área de Cenografia. Foi um período de mais de um ano de aprendizado e crescimento. Contudo, foi o meu envolvimento com <strong>softwares e hardwares específicos</strong> que acendeu uma nova chama em mim: <strong>o amor pela área de TI.</strong> Esse interesse me levou a começar os estudos para me tornar um desenvolvedor frontend.
                    </p>
                </div>
                <div className={styles.divContainer}>
                    <h3 className="d-flex align-items-center gap-2" style={{ color: '#9195F6' }}>
                        <MdSchool color="#9195F6" />
                        Formação
                    </h3>
                    <p>
                        Estou no segundo semestre do curso de <strong>Análise e Desenvolvimento de Sistemas na Faculdade Descomplica,</strong> uma instituição de ensino verdadeiramente incrível. Há quase um ano, venho aprimorando minhas habilidades na <strong>escola Front-End da Alura</strong>, que considero a melhor instituição de ensino de tecnologia que já conheci. No meu arsenal de habilidades tecnológicas, tenho me dedicado a tecnologias como <strong>JavaScript, TypeScript, e React Js, Next,js</strong> entre outras. Essas habilidades estão em constante desenvolvimento e prática no meu percurso profissional.
                    </p>
                </div>
            </section>
        </>

    )
}