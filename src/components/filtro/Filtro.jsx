// men's clothing / jewelery / electronics / women's clothing


export const Filtro = ()=>{

    const Filtred = (e, products)=>{
        
        let Filter = e.target.value

        return products.filter(element => element.category === Filter)
    }

    return(
        <div>
            <h1>Categorias</h1>
            <div>
                <div>
                    <input type="checkbox" onClick={(e)=>{console.log(e.target.value)}} value="men's clothing" id="men's clothing"/>
                    <label for="men's clothing">men's clothing</label>
                </div>
                <div>
                    <input type="checkbox" value="jewelery" id="jewelery"/>
                    <label for="jewelery">jewelery</label>
                </div>
                <div>
                    <input type="checkbox" value="electronics" id="electronics"/>
                    <label for="electronics">electronics</label>
                </div>
                <div>
                    <input  type="checkbox" value="women's clothing" id="women's clothing"/>
                    <label for="women's clothing">women's clothing</label>
                </div>
            </div>

        </div>
    )
}