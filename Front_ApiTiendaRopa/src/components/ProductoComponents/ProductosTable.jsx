import React from 'react';
import ProductosRow from './ProductosRow';



const ProductosTable = ({ productos, onEdit, onDelete }) => {
  console.log("Productos para renderizar:", productos);

  if (!Array.isArray(productos) || productos.length === 0) {
    return <div>No se encontraron productos</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Talla</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <ProductosRow
            key={producto._id}
            producto={producto}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductosTable;