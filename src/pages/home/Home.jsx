import { useEffect, useState } from "react"
import { getProducts } from "../../assets/api"
import { Banner } from "../../components/banner/Banner"
import { Cards } from "../../components/cards/Cards"
import { Filtro } from "../../components/filtro/Filtro"
import { Navbar } from "../../components/navbar/Navbar"



 const Home = ()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts(setProducts);
    },[]);
    console.log(products)

    const Dados = ()=>{
         if(products.length > 1){
            return  <Cards state={products}/>
         }
         else return false
    }
    return(
        <>
            <Navbar/>
            <main>
                <Banner/>
                <Filtro/>
                <Dados/>
            
            </main>
        </>
        
    )
}
export default Home