import { useEffect, useState } from "react";
import "../VerSolicitudTable.css"
import VerSolicitudaTable from "./VerSolicitudTable";
import { Link } from "react-router-dom";

const VerSolicitud = ({onUpdateState}) => {
    const [solicitudes, setSolicitudes] = useState(() => {
        const saveSolicitudes = window.localStorage.getItem("solicitudesData")
        if (saveSolicitudes) {
            return JSON.parse(saveSolicitudes)
        } else {
            return []
        }
    })
    
    useEffect(() => {
        window.localStorage.setItem("solicitudesData", JSON.stringify(solicitudes))
    }, [solicitudes])

    // Eliminar solicitud
    const deleteSolicitud = id => {
        const isDelete = window.confirm('¿Desea eliminar el registro con id: '+id)
        if (isDelete) {
            const newSolicitudes = solicitudes.filter(el => el.id !== id)
            setSolicitudes(newSolicitudes)
        }
    }

    return (
        <div className="ver-solicitud-container">
            <VerSolicitudaTable solicitudes = {solicitudes} deleteSolicitud={deleteSolicitud}/>
            <Link to={'/solicitud'}><button onClick={() => onUpdateState(false)} className="btn-regresar">REGRESAR</button></Link>
        </div>
    )
}

export default VerSolicitud