import { Navigate, Route, Routes } from "react-router"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPages, SearchPage } from "../pages"


export const HeroRouters = () => {
    return (
        <>
            <Navbar/>
                <div className="container">
                    <Routes>
                        <Route path="Marvel" element={<MarvelPages/> } />
                        <Route path="Dc" element={<DcPage/> }  />
                        <Route path="search" element={<SearchPage/> }  />
                        <Route path="hero" element={<HeroPage/> }  />
                        <Route path='/' element={<Navigate to='/Marvel'/>  } />
                    </Routes>
                </div>
                
        </>
    )
}
