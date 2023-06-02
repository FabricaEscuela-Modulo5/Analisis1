import { useEffect, useState } from "react";
import "../Hom.css";
import CrudFormHom from "./crud/CrudFormHom";
import CrudTableHom from "./crud/CrudTableHom";
import { Link } from "react-router-dom";

function SolicitudHom({onUpdateState}) {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [facultad, setFacultad] = useState("");
  const [programa, setPrograma] = useState("");

  const [solicitudes, setSolicitudes] = useState(() => {
    const saveSolicitudes = window.sessionStorage.getItem("solicitudesData")
    if (saveSolicitudes) {
      return JSON.parse(saveSolicitudes)
    } else {
      return []
    }
  })

  useEffect(() => {
    window.sessionStorage.setItem("solicitudesData", JSON.stringify(solicitudes))
  }, [solicitudes])

  const guardarFormularios = () => {
    const formulariosData = window.sessionStorage.getItem("solicitudesData");
    if (formulariosData) {
      const parsedData = JSON.parse(formulariosData);
  
      const existingData = localStorage.getItem("solicitudesData");
      let mergedData = [];
  
      if (existingData) {
        const parsedExistingData = JSON.parse(existingData);
        mergedData = [...parsedExistingData, ...parsedData];
      } else {
        mergedData = parsedData;
      }
  
      localStorage.setItem("solicitudesData", JSON.stringify(mergedData));
      window.sessionStorage.clear();
      alert("Solicitudes eviadas exitosamente")
    }
  };

  // Añadir solicitud
  const addSolicitud = (solicitud) => {
    setSolicitudes([
      ...solicitudes,
      solicitud
    ])
  }

  // Eliminar solicitud
  const deleteSolicitud = id => {
    const isDelete = window.confirm('¿Desea eliminar el registro con id: '+id)
    if (isDelete) {
      const newSolicitudes = solicitudes.filter(el => el.id !== id)
      setSolicitudes(newSolicitudes)
    }
  }

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
                    id="nombre"
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
                    id="cedula"
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
                    id="facultad"
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
                    id="programa"
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
      <CrudFormHom addSolicitud = {addSolicitud}/>
      <CrudTableHom solicitudes = {solicitudes} deleteSolicitud={deleteSolicitud}/>
      <div className="solicitud-buttons">
        <button onClick={guardarFormularios}>ENVIAR</button>
        <button>LIMPIAR FORMULARIO</button>
        <Link to={'/verSolicitud'}><button>VER SOLICITUDES</button></Link>
        <Link to={'/'}><button onClick={() => onUpdateState(false)}>REGRESAR</button></Link>
      </div>
    </div>
  );
}

export default SolicitudHom;
