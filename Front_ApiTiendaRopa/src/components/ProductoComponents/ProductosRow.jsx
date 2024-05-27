const ProductosRow = ({ producto, onEdit, onDelete }) => {
    const handleEdit = () => {
      onEdit(producto);
    };
  
    const handleDelete = () => {
      onDelete(producto._id);
    };
  
    return (
      <tr>
        <td>{producto.nombre}</td>
        <td>{producto.descripcion}</td>
        <td>${producto.precio}</td>
        <td>{producto.talla}</td>
        <td>{producto.categoria}</td>
        <td>
          <button onClick={handleEdit}>Editar ✏️</button>
          <button onClick={handleDelete}>Eliminar 🗑️</button>
        </td>
      </tr>
    );
  };
  
  export default ProductosRow;