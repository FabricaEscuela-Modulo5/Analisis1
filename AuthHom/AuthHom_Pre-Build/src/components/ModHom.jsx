import { useState } from "react";
import "../Hom.css";

function SolicitudHom({onUpdateState}) {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [facultad, setFacultad] = useState("");
  const [programa, setPrograma] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCedulaChange = (event) => {
    setCedula(event.target.value);
  };

  const handleFacultadChange = (event) => {
    setFacultad(event.target.value);
  };

  const handleProgramaChange = (event) => {
    setPrograma(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit the form goes here
  };

  return (
    <div className="solicitud-container">
      <div className="solicitud-title">
        <h1>SOLICITUD DE RECONOCIMIENTO Y HOMOLOGACIÓN DE MATERIAS</h1>
      </div>
      <div className="solicitud-form">
        <h2>DATOS DEL ESTUDIANTE</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>NOMBRE:</td>
                <td>
                  <input
                    required
                    placeholder="Nombre"
                    type="text"
                    value={nombre}
                    onChange={handleNombreChange}
                  />
                </td>
                <td>CÉDULA:</td>
                <td>
                  <input
                    required
                    placeholder="Cédula"
                    type="number"
                    value={cedula}
                    onChange={handleCedulaChange}
                  />
                </td>
              </tr>
              <tr>
                <td>FACULTAD:</td>
                <td>
                  <input
                    required
                    placeholder="Facultad"
                    type="text"
                    value={facultad}
                    onChange={handleFacultadChange}
                  />
                </td>
                <td>PROGRAMA:</td>
                <td>
                  <input
                    required
                    placeholder="Programa"
                    type="text"
                    value={programa}
                    onChange={handleProgramaChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="solicitud-fecha">
            <span>Fecha:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </form>
      </div>
      <div className="solicitud-tabla">
        <form action="" method="POST">
          <div className="rellenar-form">
            <div>
              <label>CÓDIGO<span>*</span></label>
              <input type="number" name="txtCodigo" required placeholder="Código"/>
            </div>
            <div>
              <label>MATERIA<span>*</span></label>
              <input type="text" name="txtMateria" required placeholder="Nombre Materia"/>
            </div>
            <div>
              <label>PROGRAMA<span>*</span></label>
              <input type="text" name="txtPrograma" required placeholder="Nombre Programa"/>
            </div>
          </div>
          <div className="rellenar-form">
            <div>
              <label>PERIODO<span>*</span></label>
                <input type="number" name="txtPeriodo" required placeholder="Periodo, ej. 20231"/>
            </div>
            <div>
              <label>CALIFICAIÓN<span>*</span></label>
                <input type="number" name="txtCalificacion" required placeholder="Calificación, ej. 4.2"/>
            </div>
            <div>
              <label>COMENTARIO</label>
              <input type="text" name="txtComentario" required placeholder="Comentario"/>
            </div>
          </div>
          <div>
            <input type="submit" className="btn-agregar" name="agregar" value={"Agregar"}/>
          </div>
        </form>
        <hr className="separador"/>
      </div>
      <div className="solicitud-buttons">
        <button type="submit">ENVIAR SOLICITUD</button>
        <button>LIMPIAR FORMULARIO</button>
        <button>VER SOLICITUDES</button>
        <button onClick={() => onUpdateState(false)}>REGRESAR</button>
      </div>
    </div>
  );
}

export default SolicitudHom;
