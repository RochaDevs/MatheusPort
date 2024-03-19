import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PaginaPrincipal } from "../app/Pages/PagePrincipal"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginaProjetos } from "../app/Pages/PageProjetos";
import { PaginaHabilidades } from "../app/Pages/PageHabilidades";
import { PaginaCertificacoes } from "../app/Pages/PageCertificacoes";
import { PaginaArtigos } from "../app/Pages/PageArtigo";
import { PaginaInicial } from "../app/Pages/PageInicial";
import { ProjetoSelecionadoProvider } from "../context/projetoContext";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PaginaPrincipal />
                }>
                    <Route index element={<PaginaInicial />} />
                    <Route path="/projetos" element={
                        <ProjetoSelecionadoProvider>
                            <PaginaProjetos />
                        </ProjetoSelecionadoProvider>
                    }
                    />
                    <Route path="/habilidades" element={<PaginaHabilidades/>} />
                    <Route path="/certificacoes" element={<PaginaCertificacoes/>} />
                    <Route path="/artigos" element={<PaginaArtigos/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}