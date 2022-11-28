
import { Banner } from "../../components/banner/Banner"
import { Cards } from "../../components/cards/Cards"
import { Filtro } from "../../components/filtro/Filtro"
import { Navbar } from "../../components/navbar/Navbar"



 const Home = ()=>{


    return(
        <>
            <Navbar/>
            <main>
                <Banner/>
                <Filtro/>
                <Cards/>
            </main>
        </>
        
    )
}
export default Home