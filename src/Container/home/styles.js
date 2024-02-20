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

export const Label = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-left:5px;
`

export const Input = styled.input`
    padding: 3px;
    width: 400px; 
    font-size: 20px;
    height: 60px; 
    background: #ec9a29;
    border: 3px solid #8b4513;
    box-shadow: 0 10px 5px #663300;
    border-radius: 15px;
    text-indent: 10px;
    align-self:center;
    position: relative;
    margin-bottom:30px;
    &::placeholder{
        color: #ffff;
    }
`

export const ButtonCreateBurguer = styled.button`
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
export const ButtonViewOrders = styled.button`
position: relative;
    align-self: center;
    width: 200px;
    height: 60px;
    background: rgba(41, 29, 17, 0.8);
    border: 3px solid rgba(14, 10, 6, 1);
    border-radius: 15px;
    box-shadow: 0 10px 5px #663300;
    color: #ffffff;
    font-size:20px;
    text-align: center;
    transition: 0.1s;

    &:hover{
        background: #d87922;
        box-shadow: 0 8px 4px #663300;
        border: 3px solid #8b4513;
        cursor: pointer;
    }
    &:active{
        box-shadow: 0 5px #663300;
        transform: translateY(4px);
    }

`



