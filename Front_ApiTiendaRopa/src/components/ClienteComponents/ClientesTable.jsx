import React from 'react';
import ClientesRow from "./ClientesRow"; 



const ClientesTable = ({ clientes, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <ClientesRow
            key={cliente._id}
            cliente={cliente}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ClientesTable;