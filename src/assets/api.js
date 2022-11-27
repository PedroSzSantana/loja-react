import axios from "axios";

export const getProducts = (state)=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
        state(response.data)
    }).catch((error)=>{
        console.log(error)
    })
}
