// men's clothing / jewelery / electronics / women's clothing

import { useEffect, useState } from "react"
import { Div } from "./StyledFiltro"


export const Filtro = (setFiltro)=>{
    const setValordoFiltro = setFiltro
   const HandleClick = (e)=>{
    setValordoFiltro(e.target.value)
   }
    return(
        <div>
            <h1>Categorias</h1>
            <Div>
                <div>
                    <input type="checkbox" onClick={(e)=>{ setValordoFiltro(e.target.value)}} value="men's clothing" id="men's clothing"/>
                    <label for="men's clothing">men's clothing</label>
                </div>
                <div>
                    <input type="checkbox" onClick={(e)=>{ setValordoFiltro(e.target.value)}}  value="jewelery" id="jewelery"/>
                    <label for="jewelery">jewelery</label>
                </div>
                <div>
                    <input type="checkbox" onClick={(e)=>{ setValordoFiltro(e.target.value)}}  value="electronics" id="electronics"/>
                    <label for="electronics">electronics</label>
                </div>
                <div>
                    <input  type="checkbox" onClick={(e)=>{ setValordoFiltro(e.target.value)}}  value="women's clothing" id="women's clothing"/>
                    <label for="women's clothing">women's clothing</label>
                </div>
            </Div>

        </div>
    )
}