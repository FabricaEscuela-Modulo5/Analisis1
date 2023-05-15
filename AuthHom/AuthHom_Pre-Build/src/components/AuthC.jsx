import { useState } from "react";
import "../Auth.css"

export default function Authentication({onUpdateState}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Aquí iría la lógica para autenticar al usuario
  };

  return (
    <div className="authentication-container">
      <div className="authentication-header">
        <h1>Iniciar Sesión</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={() => onUpdateState(true)}>Ingresar</button>
      </form>
    </div>
  );
}
