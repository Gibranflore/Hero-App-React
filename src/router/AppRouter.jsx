import { Route, Routes } from "react-router"
import { HeroRouters } from '../heroes';
import { LoginPage } from "../auth";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="LoginPage" element={<LoginPage/> } />
                <Route path="/*" element={<HeroRouters/> } />
                //Definirse un componente que tenga nuestras rutas
            </Routes>
        </>
    )
}
