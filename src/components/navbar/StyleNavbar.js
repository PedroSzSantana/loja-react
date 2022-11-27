import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: #ffff;
    color: black;
    svg{
        width: 12px;
    }
    img{
        width: 100px;
        height: 45px;
        border-radius: 10px;
    }
    div{
        
        input{
            width: 80vh;
            height: 30px;
            padding-left: 10px;
        }
        button{
            padding: 4px 9px;
        }
    }
`
export const Details = styled.details`
    font-size: 15px;
    cursor: pointer;

    summary{
        display: flex;
        gap: 10px;

        svg{
        width: 20px;
        }
        div{
            display: flex;
            flex-direction: column; 
        }
        
    }
`
export const InfoDetails = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: #ffff;
        margin-left: 15px;
        margin-top: 25px;
        width: 180px;
        height: 150px;
        background-color: #ffff;
        font-size: 15.5px;

        a{
        text-decoration: none;
        }
        a:hover{
            text-decoration:1.5px underline;
            text-underline-offset: 4px;
        }
`
export const InfoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    background-color: black;
    margin-bottom: 0%;
    height: 50%;
    width: 100%;
    margin-bottom: 74px;
    padding-top: 10px;
    a{
        color: #ffff;
    }
`
export const InfoDiv2 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    margin-top: 65px;
    margin-left: 6px;
    color: black;

    ul{
        list-style: none;

        a{
            color:black;
        }
    }
`
export const Triangle = styled.div`
    margin-left: 20px;
    margin-top: 12px;
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 15px 10px;
    border-color: transparent transparent #000000 transparent;
`