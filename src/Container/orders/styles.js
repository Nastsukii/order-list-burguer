import styled from 'styled-components'
import Background from '../../assets/BackGround.jpeg'

export const Box = styled.div`
    background:url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:50px;
    height: 100%;
    min-height: 100vh;
`
export const ImagemLogo = styled.img`
    margin-top: 45px;
    width: 250px;
`


export const ButtonBack = styled.button`
    position: relative;
    align-self: center;
    width: 300px;
    height: 60px;
    background: #ec9a29;
    border: 3px solid #8b4513;
    border-radius: 15px;
    box-shadow: 0 10px 5px #663300;
    color: #ffffff;
    font-size:20px;
    text-align: center;
    transition: 0.1s;
    margin: 50px 0;

    &:hover{
        background: #d87922;
        box-shadow: 0 8px 4px #663300;
        cursor: pointer;
    }
    &:active{
        transform: translateY(4px);
    }
`




export const Order = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%; 
    font-size: 20px;
    min-height: 100px; 
    background: #ec9a29;
    border: 3px solid #8b4513;
    box-shadow: 0 10px 5px #663300;
    border-radius: 15px;
    text-indent: 10px;
    align-self:center;
    margin-bottom:30px;
    list-style-type:none;

    button{
        position: relative;
        border:none;
        background: none;
        cursor:pointer;    
        align-self: center;
        transition: 0.3s;
        width: 0px;

        img{
            width: 80px;
        }

        &:active{
            filter:drop-shadow(0 5px 5px #111)
        }
    }

`
export const OrderClient = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
margin: 5px 0 5px 5px;
width: calc(100% - 80px);

`
export const Food = styled.p`
    color: rgba(50, 29, 17, 1);
    font-size: 20px;
    font-weight: bold;
    margin-left:10px
    `

export const Name = styled.p`
    color: rgba(14, 10, 6, 1);
    font-size: 25px;
    font-weight: bold;
    `









