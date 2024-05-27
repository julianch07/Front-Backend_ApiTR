import React, { useState } from 'react';

const PedidosForm = ({ onSubmit }) => {
  const [fecha, setFecha] = useState('');
  const [total, setTotal] = useState(0);
  const [estado, setEstado] = useState('');

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleTotalChange = (event) => {
    setTotal(parseFloat(event.target.value));
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ fecha, total, estado });
    setFecha('');
    setTotal(0);
    setEstado('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Nuevo Pedido</h2>
      <label>
        Fecha:
        <input type="date" value={fecha} onChange={handleFechaChange} required />
      </label>
      <label>
        Total:
        <input type="number" value={total} onChange={handleTotalChange} required />
      </label>
      <label>
        Estado:
        <input type="text" value={estado} onChange={handleEstadoChange} required />
      </label>
      <button type="submit">Crear Pedido</button>
    </form>
  );
};

export default PedidosForm;