import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PaginaPrincipal } from "../app/Pages/PagePrincipal"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PaginaPrincipal />
                }>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}