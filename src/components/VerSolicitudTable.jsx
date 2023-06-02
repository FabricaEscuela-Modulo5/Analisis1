import React, { Component } from "react"

const VerSolicitud = ({ solicitudes, deleteSolicitud }) => {
    return (
        <table className="tabla-form">
            <thead>
                <tr>
                    <th>Estado</th>
                    <th>Materia por reconocer</th>
                    <th>Materia reconocida</th>
                    <th>Periodo reconocido</th>
                    <th>Nota reconocida</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    solicitudes.length == 0 ? <td>No hay datos</td>
                    : solicitudes.map((solicitud, index) =>{
                        return (
                            <tr key={index}>
                                <td>En proceso</td>
                                <td>{solicitud.materia}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>
                                    <button title="Eliminar" onClick={() => deleteSolicitud(solicitud.id)}>
                                        <img src='src/assets/delete.png' alt="Elimiar" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default VerSolicitud