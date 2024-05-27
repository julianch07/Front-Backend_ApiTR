import React, { useState } from 'react';

const ProductosForm = ({ onSubmit, initialProducto }) => {
  const [nombre, setNombre] = useState(initialProducto?.nombre || '');
  const [descripcion, setDescripcion] = useState(initialProducto?.descripcion || '');
  const [precio, setPrecio] = useState(initialProducto?.precio || '');
  const [talla, setTalla] = useState(initialProducto?.talla || '');
  const [categoria, setCategoria] = useState(initialProducto?.categoria || '');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleTallaChange = (event) => {
    setTalla(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nombre, descripcion, precio, talla, categoria });
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setTalla('');
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={handleNombreChange}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={handleDescripcionChange}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={handlePrecioChange}
        required
      />
      <input
        type="text"
        placeholder="Talla"
        value={talla}
        onChange={handleTallaChange}
        required
      />
      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={handleCategoriaChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ProductosForm;