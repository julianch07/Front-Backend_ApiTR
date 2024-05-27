import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { fireBaseApp } from "../../fireBaseconfig";

function Login() {
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const handleLogin = async () => {
    try {
      const auth = getAuth(fireBaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In!"); // Mensaje de éxito en la consola
      setErrorMessage("El usuario ha ingresado."); // Mensaje de éxito para el usuario
    } catch (error) {
      console.error("Hubo un error al iniciar sesión:", error.message); // Registrar el error detallado
      setErrorMessage(error.message); // Mostrar el mensaje de error al usuario
    }
  };

  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Email"
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
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;