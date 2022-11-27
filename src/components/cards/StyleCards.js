import styled from "styled-components";


export const StyleCards = styled.section`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
    text-align: center;

        .cards{
            width: 330px;
            background-color: rgb(234, 228, 228);
            cursor: pointer;
            padding: 10px 5px;
            div{
                div{
                    display: flex;
                    justify-content: center;
                    svg{
                        width: 15px;
                    }
                }
            }
            img{
                width: 300px;
                height: 350px;
            }
        }
        .cards:hover{
            border: 0.5px solid rgb(156, 156, 156);
        }
`