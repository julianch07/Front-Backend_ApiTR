import { useState } from "react"

const ClientesForm = ({ onSubmit, initialCliente }) => {
    const [nombre, setNombre] = useState(initialCliente?.nombre || '');
    const [email, setEmail] = useState(initialCliente?.email || '');
    const [direccion, setDireccion] = useState(initialCliente?.direccion || '');
  
    const handleNombreChange = (event) => {
      setNombre(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleDireccionChange = (event) => {
      setDireccion(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ nombre, email, direccion });
      setNombre('');
      setEmail('');
      setDireccion('');
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={handleDireccionChange}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    );
  };
  
  export default ClientesForm;