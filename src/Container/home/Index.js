import { useRef, useState } from 'react'
import axios from 'axios'
import React from "react";
import ImageLogoBurguer from '../../assets/LogoBurguer.png'
import { useHistory } from "react-router-dom";

import Title from "../../components/MainTitle";
import BackGroundMain from "../../components/BackGroundMain";



import {
  Box,
  ImagemLogo,
  Label,
  Input,
  ButtonCreateBurguer,
  ButtonViewOrders

} from './styles'

const App = () => {
  const  [orders, setOrders] = useState([])
  const history = useHistory()
  const inputOrder = useRef()
  const inputName = useRef()

  async function createOrder() {
    if (inputName.current.value === "" || inputOrder.current.value === "") {
      alert("Preencha os campos abaixo")
    }
    else {
      const { data: newOrder } = await axios.post("http://localhost:3001/order", {
        order: inputOrder.current.value,
        clientName: inputName.current.value
      })
      console.log(newOrder)
      setOrders([...orders, newOrder])
      history.push("/orders")
    }
  }

  const nextPage = () => {
    history.push("/orders")
  }

  return (
    <Box>
      <ImagemLogo alt="logo-burguer" src={ImageLogoBurguer} />

      <BackGroundMain >

        <Title>Faça seu pedido!!</Title>
        <Label>Order</Label>
        <Input ref={inputOrder} placeholder="Enter your order..." />

        <Label>Client Name</Label>
        <Input ref={inputName} placeholder="Enter your name..." />

        <ButtonCreateBurguer onClick={createOrder}>Create Order</ButtonCreateBurguer>

        <ButtonViewOrders onClick={nextPage}>View Orders</ButtonViewOrders>
      </BackGroundMain>
    </Box>
  )
}

export default App