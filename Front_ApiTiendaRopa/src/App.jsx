import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ClientesTable from './components/ClienteComponents/ClientesTable';
import ClientesForm from './components/ClienteComponents/ClientesForm';
import ProductosTable from './components/ProductoComponents/ProductosTable';
import ProductoForm from './components/ProductoComponents/ProductosForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PedidosTable from './components/PedidoComponents/PedidosTable';
import PedidosForm from './components/PedidoComponents/PedidosForm';
import PedidosDetails from './components/PedidoComponents/PedidosDetails';

function App() {
  const [clientes, setClientes] = useState([]);
  const [clienteEditado, setClienteEditado] = useState(null);

  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null);

  const [pedidos, setPedidos] = useState([]);

  const [darkMode, setDarkMode] = useState(false); // Modo claro por defecto

  // Funciones clientes
  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clientes');
      setClientes(response.data);
    } catch (error) {
      console.log('Error al cargar los clientes: ', error);
    }
  };

  const handleCrearOrEditarCliente = async (clienteData) => {
    if (clienteEditado) {
      await axios.put(`http://localhost:8080/api/clientes/${clienteEditado._id}`, clienteData);
    } else {
      await axios.post('http://localhost:8080/api/clientes', clienteData);
    }
    fetchClientes(); // <-- Actualizar la lista de clientes después de crear o editar
  };

  const handleEditarCliente = (cliente) => {
    setClienteEditado(cliente);
  };

  const handleEliminarCliente = async (clienteId) => {
    await axios.delete(`http://localhost:8080/api/clientes/${clienteId}`);
    fetchClientes(); // <-- Actualizar la lista de clientes después de eliminar
  };

  // Funciones productos
  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/productos');
      setProductos(response.data);
    } catch (error) {
      console.log('Error al cargar los productos: ', error);
    }
  };

  const handleCrearOrEditarProducto = async (productoData) => {
    if (productoEditado) {
      await axios.put(`http://localhost:8080/api/productos/${productoEditado._id}`, productoData);
    } else {
      await axios.post('http://localhost:8080/api/productos', productoData);
    }
    fetchProductos(); // <-- Actualizar la lista de productos después de crear o editar
  };

  const handleEditarProducto = (producto) => {
    setProductoEditado(producto);
  };

  const handleEliminarProducto = async (productoId) => {
    await axios.delete(`http://localhost:8080/api/productos/${productoId}`);
    fetchProductos(); // <-- Actualizar la lista de productos después de eliminar
  };

  // Funciones pedidos
  useEffect(() => {
    fetchPedidos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/pedidos');
      setPedidos(response.data);
    } catch (error) {
      console.log('Error al cargar los pedidos: ', error);
    }
  };

  const handleCrearPedido = async (pedidoData) => {
    await axios.post('http://localhost:8080/api/pedidos', pedidoData);
    fetchPedidos(); // <-- Actualizar la lista de pedidos después de crear
  };

  // Función para alternar el modo
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Tienda de Ropa</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      <br />
      <h2>Lista de Clientes</h2>
      <ClientesTable clientes={clientes} onEdit={handleEditarCliente} onDelete={handleEliminarCliente} />
      <h2>{clienteEditado ? 'Editar Cliente' : 'Crear Cliente'}</h2>
      <ClientesForm onSubmit={handleCrearOrEditarCliente} initialCliente={clienteEditado} />
      <br />
      <h2>Lista de Productos</h2>
      <ProductosTable productos={productos} onEdit={handleEditarProducto} onDelete={handleEliminarProducto} />
      <h2>{productoEditado ? 'Editar Producto' : 'Crear Producto'}</h2>
      <ProductoForm onSubmit={handleCrearOrEditarProducto} initialProducto={productoEditado} />
      <br />
      <Router>
        <Routes>
          <Route exact path="/api/pedidos" element={<PedidosTable pedidos={pedidos} />} />
          <Route path="/" element={<PedidosForm onSubmit={handleCrearPedido} />} />
          <Route path="/api/pedidos/:id" element={<PedidosDetails pedidos={pedidos} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;