import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";


export const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='*' element={<div><h1>Pagina não encontrada</h1></div>}/>
            </Routes>
        </BrowserRouter>
    )
}