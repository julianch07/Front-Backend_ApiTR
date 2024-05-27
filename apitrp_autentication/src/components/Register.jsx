import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fireBaseApp } from "../../fireBaseconfig";


function Register() {
    const [email, setEmail] = useState(""); // Empty string for initial email state
    const [password, setPassword] = useState(""); // Empty string for initial password state
    const [errorMessage, setErrorMessage] = useState(""); // Empty string for initial error message
  
    const handleRegister = async () => {
      try {
        const auth = getAuth(fireBaseApp);
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created!"); // Success message in console
        setErrorMessage("El usuario fue creado con éxito."); // Success message for user
      } catch (error) {
        console.error("Hubo un error al registrar el usuario:", error.message); // Log detailed error
        setErrorMessage(error.message); // Display error message for user
      }
    };
  
    return (
      <div className="register">
        <h2>Registro</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <button onClick={handleRegister}>Registrarse</button>
      </div>
    );
  }
  
  export default Register;
  