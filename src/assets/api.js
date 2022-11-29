import axios from "axios";

export const getProducts = async(state)=>{
    await axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
        state(response.data)
    }).catch((error)=>{
        console.log(error)
    })
}
