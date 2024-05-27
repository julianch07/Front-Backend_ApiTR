import React from 'react';

const ClientesRow = ({ cliente, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(cliente);
  };

  const handleDelete = () => {
    onDelete(cliente._id);
  };

  return (
    <tr>
      <td>{cliente.nombre}</td>
      <td>{cliente.email}</td>
      <td>{cliente.direccion}</td>
      <td>
                <button onClick={handleEdit}>Editar ✏️</button>
                <button onClick={handleDelete}>Eliminar 🗑️</button>
            </td>
        </tr>
    )
}
export default ClientesRow