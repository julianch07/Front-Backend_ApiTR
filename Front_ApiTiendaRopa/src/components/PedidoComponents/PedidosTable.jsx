import React from 'react';
import { Link } from 'react-router-dom';

const PedidosTable = ({ pedidos }) => {
  return (
    <div>
      <h2>Listado de Pedidos</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido._id}>
              <td>{pedido.fecha}</td>
              <td>{pedido.total}</td>
              <td>{pedido.estado}</td>
              <td>
                <Link to={`/api/pedidos/${pedido._id}`}>Ver Detalles</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PedidosTable;