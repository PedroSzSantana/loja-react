import { Link, NavLink } from "react-router-dom"
import { Details, InfoDetails, InfoDiv, InfoDiv2, Nav, Triangle } from "./StyleNavbar"


export const Navbar = ()=>{
    return(
        <header>
            <Nav>
                <NavLink to="/"><span><img src="https://wedologos.bladecdn.net/wp-content/uploads/2014/07/wd-logos-loja-de-roupas1.jpg" alt="" /></span></NavLink>
                <div>
                    <input placeholder="Busque por produto, categoria ou marca" type='text'/>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
                        </svg>
                    </button>
                </div>
                <div>
                    <Details>
                        <summary>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>

                            <div>
                                Minha conta e
                                <b>Meus pedidos</b> 
                            </div>
                            
                        </summary>

                        <Triangle/>

                        <InfoDetails>

                            <InfoDiv>
                                <p>Olá</p>
                                <Link to='/login'>Já é cadastrado ?</Link>  
                            </InfoDiv>

                            <InfoDiv2>
                                <ul>
                                    <li><Link>Minha conta</Link></li>
                                    <li><Link>Meus Pedidos</Link></li>
                                    <li><Link>Central de Artendimento</Link></li>
                                </ul>
                            </InfoDiv2>
                            
                        </InfoDetails>
                    </Details> 
                </div>
            </Nav>
        </header>
    )
}