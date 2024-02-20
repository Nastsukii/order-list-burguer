import React, { useState, useEffect } from "react";
import ImageLogoBurguer from '../../assets/LogoBurguer.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Title from "../../components/MainTitle";
import BackGroundMain from "../../components/BackGroundMain";
import BurguerDelete from "../../assets/80a96ad1-55b9-4094-a030-f08332cde7a9.png"


import {
  Box,
  ImagemLogo,
  ButtonBack,
  Order,
  OrderClient,
  Food,
  Name

} from './styles'

const Orders = () => {
  const History = useHistory()
  const [orders, setOrders ] = useState([])

  const BackPage = () => {
    History.push('/')
  }

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/order")
      setOrders(newOrders)
    }
    fetchOrders()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const newOrder = orders.filter(order => order.id !== orderId)
    setOrders(newOrder)
  }

  return (
    <Box>
      <ImagemLogo alt="logo-burguer" src={ImageLogoBurguer} />
      <BackGroundMain>

        <Title>Pedidos!!</Title>

        <ul>
          {orders.map(order => (
            <Order key={order.id}>
              <OrderClient>
                <Food>{order.order}</Food>
                <Name>{order.clientName}</Name>
              </OrderClient>
              <button onClick={() => deleteOrder(order.id)}>
                <img alt="botao-deletar" src={BurguerDelete} />
              </button>
            </Order>
          ))
          }
        </ul>

        <ButtonBack onClick={BackPage}>Back!!</ButtonBack>

      </BackGroundMain>
    </Box>
  )
}

export default Orders