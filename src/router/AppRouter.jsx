import { Route, Routes } from "react-router"
import { HeroRouters } from '../heroes';
import { LoginPage } from "../auth";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="LoginPage" element={<LoginPage/> } />
                <Route path="/*" element={<HeroRouters/> } />
                //Definir una ruta que tenga nuestro componente
            </Routes>
        </>
    )
}
