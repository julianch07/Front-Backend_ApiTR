import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PedidosDetails = () => {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/pedidos/${id}`);
        setPedido(response.data);
      } catch (error) {
        console.error('Error fetching pedido:', error);
      }
    };
    fetchPedido();
  }, [id]);

  if (!pedido) return <div>Loading...</div>;

  return (
    <div>
      <h1>Detalles del Pedido</h1>
      <p>ID: {pedido._id}</p>
      <p>Cliente: {pedido.cliente.nombre}</p>
      <p>Fecha: {pedido.fecha}</p>
      <p>Estado: {pedido.estado}</p>
      <p>Total: {pedido.total}</p>
      <h3>Productos</h3>
      <ul>
        {pedido.productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - Cantidad: {producto.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidosDetails;