
import { useEffect, useState } from "react"
import { getProducts } from "../../assets/api"
import { Banner } from "../../components/banner/Banner"
import { Cards } from "../../components/cards/Cards"
import { Filtro } from "../../components/filtro/Filtro"
import { Navbar } from "../../components/navbar/Navbar"



 const Home = ()=>{

    const [filtro, setFiltro] = useState()
    
    return(
        <>
            <Navbar/>
            <main>
                <Banner/>
                <Filtro setFiltro={setFiltro}/>
                <Cards ValueFilter={filtro}/>
            </main>
        </>
        
    )
}
export default Home