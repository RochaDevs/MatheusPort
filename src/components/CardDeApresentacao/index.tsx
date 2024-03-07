import styles from './CardDeApresentacao.module.scss';
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

export const CardDeApresentacao = () => {
    return (
        <>
            <aside className={`
            ${styles.container_xlParaCima} 
            position-relative bg-white p-3 flex-column gap-2 rounded
            d-none d-xl-flex
            `}

            >

                <div className={`${styles.apresentacao} d-flex justify-content-center flex-column align-items-center gap-1`}>
                    <img
                        className='rounded-circle'
                        src="/public/eu150px.PNG"
                        alt="Foto do Matheus"
                    />
                    <h1 className='fs-3'>
                        Matheus Rocha
                    </h1>
                    <p>Desenvolvedor Front-End</p>
                </div>

                <div>
                    <h1 className='fs-5'>
                        Objetivo
                    </h1>
                    <p>
                        Estou em busca de uma oportunidade como estagiário ou profissional júnior. Valorizo muito os pequenos começos e não os subestimo.
                    </p>
                </div>

                <div className='d-flex flex-column align-items-start'>
                    <button
                        onClick={() => window.open('https://www.linkedin.com/in/matheus-rocha-devs/', '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaLinkedin fontSize={'2rem'} />
                        LinkedIn
                    </button>

                    <button
                        onClick={() => window.open(`https://wa.me/+5511956042056?text=Olá, gostaria de conversar sobre...`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaWhatsappSquare fontSize={'2rem'} />
                        WhatsApp
                    </button>

                    <button
                        onClick={() => window.open(`https://drive.google.com/file/d/1L7nzwGRq4mZgC9xBzYJZxYi7Bf7y-pTY/view?usp=drive_link`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <IoMdDownload fontSize={'2rem'} />
                        Currículo
                    </button>
                </div>
            </aside>

            <aside className={`
            ${styles.container_lgParaCima} 
            position-relative bg-white p-3 flex-column gap-2 rounded
            d-none d-lg-flex d-xl-none
            `}

            >

                <div className={`${styles.apresentacao} d-flex justify-content-center flex-column align-items-center gap-1`}>
                    <img
                        className='rounded-circle'
                        src="/public/eu150px.PNG"
                        alt="Foto do Matheus"
                    />
                    <h1 className='fs-3'>
                        Matheus Rocha
                    </h1>
                    <p>Desenvolvedor Front-End</p>
                </div>

                <div>
                    <h1 className='fs-5'>
                        Objetivo
                    </h1>
                    <p>
                        Estou em busca de uma oportunidade como estagiário ou profissional júnior. Valorizo muito os pequenos começos e não os subestimo.
                    </p>
                </div>

                <div className='d-flex flex-column align-items-start'>
                    <button
                        onClick={() => window.open('https://www.linkedin.com/in/matheus-rocha-devs/', '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaLinkedin fontSize={'2rem'} />
                        LinkedIn
                    </button>

                    <button
                        onClick={() => window.open(`https://wa.me/+5511956042056?text=Olá, gostaria de conversar sobre...`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaWhatsappSquare fontSize={'2rem'} />
                        WhatsApp
                    </button>

                    <button
                        onClick={() => window.open(`https://drive.google.com/file/d/1L7nzwGRq4mZgC9xBzYJZxYi7Bf7y-pTY/view?usp=drive_link`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <IoMdDownload fontSize={'2rem'} />
                        Currículo
                    </button>
                </div>
            </aside>

            <aside className={`
            ${styles.container_lgParaCima} 
            position-relative bg-white p-3 flex-column gap-2 rounded
            d-none d-md-flex d-lg-none
            `}

            >

                <div className={`${styles.apresentacao} d-flex justify-content-center flex-column align-items-center gap-1`}>
                    <img
                        className='rounded-circle'
                        src="/public/eu150px.PNG"
                        alt="Foto do Matheus"
                    />
                    <h1 className='fs-3'>
                        Matheus Rocha
                    </h1>
                    <p>Desenvolvedor Front-End</p>
                </div>

                <div>
                    <h1 className='fs-5'>
                        Objetivo
                    </h1>
                    <p>
                        Estou em busca de uma oportunidade como estagiário ou profissional júnior. Valorizo muito os pequenos começos e não os subestimo.
                    </p>
                </div>

                <div className='d-flex flex-column align-items-start'>
                    <button
                        onClick={() => window.open('https://www.linkedin.com/in/matheus-rocha-devs/', '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaLinkedin fontSize={'2rem'} />
                        LinkedIn
                    </button>

                    <button
                        onClick={() => window.open(`https://wa.me/+5511956042056?text=Olá, gostaria de conversar sobre...`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaWhatsappSquare fontSize={'2rem'} />
                        WhatsApp
                    </button>

                    <button
                        onClick={() => window.open(`https://drive.google.com/file/d/1L7nzwGRq4mZgC9xBzYJZxYi7Bf7y-pTY/view?usp=drive_link`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <IoMdDownload fontSize={'2rem'} />
                        Currículo
                    </button>
                </div>
            </aside>

            <aside className={`
            ${styles.container_lgParaCima} 
            position-relative bg-white p-3 flex-column gap-2 rounded
            d-none d-sm-flex d-md-none
            `}

            >

                <div className={`${styles.apresentacao} d-flex justify-content-center flex-column align-items-center gap-1`}>
                    <img
                        className='rounded-circle'
                        src="/public/eu150px.PNG"
                        alt="Foto do Matheus"
                    />
                    <h1 className='fs-3'>
                        Matheus Rocha
                    </h1>
                    <p>Desenvolvedor Front-End</p>
                </div>

                <div>
                    <h1 className='fs-5'>
                        Objetivo
                    </h1>
                    <p>
                        Estou em busca de uma oportunidade como estagiário ou profissional júnior. Valorizo muito os pequenos começos e não os subestimo.
                    </p>
                </div>

                <div className='d-flex flex-column align-items-start'>
                    <button
                        onClick={() => window.open('https://www.linkedin.com/in/matheus-rocha-devs/', '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaLinkedin fontSize={'2rem'} />
                        LinkedIn
                    </button>

                    <button
                        onClick={() => window.open(`https://wa.me/+5511956042056?text=Olá, gostaria de conversar sobre...`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <FaWhatsappSquare fontSize={'2rem'} />
                        WhatsApp
                    </button>

                    <button
                        onClick={() => window.open(`https://drive.google.com/file/d/1L7nzwGRq4mZgC9xBzYJZxYi7Bf7y-pTY/view?usp=drive_link`, '_blank')}
                        className={`${styles.botao} d-flex align-items-center gap-1`}
                    >
                        <IoMdDownload fontSize={'2rem'} />
                        Currículo
                    </button>
                </div>
            </aside>
        </>
    )
}