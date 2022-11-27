import { Banner } from "../../components/banner/Banner"
import { Cards } from "../../components/cards/Cards"
import { Navbar } from "../../components/navbar/Navbar"



 const Home = ()=>{
    return(
        <>
            <Navbar/>
            <main>
                <Banner/>
                <Cards/>
            </main>
        </>
        
    )
}
export default Home