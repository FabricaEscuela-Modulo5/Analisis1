import React, { Component } from "react"

const CrudTableHom = ({ solicitudes, deleteSolicitud }) => {
    return (
        <table className="tabla-form">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Materia</th>
                    <th>Programa</th>
                    <th>Periodo</th>
                    <th>Calificación</th>
                    <th>Comentario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    solicitudes.length == 0 ? <td>No hay datos</td>
                    : solicitudes.map((solicitud, index) =>{
                        return (
                            <tr key={index}>
                                <td>{solicitud.codigo}</td>
                                <td>{solicitud.materia}</td>
                                <td>{solicitud.programa}</td>
                                <td>{solicitud.periodo}</td>
                                <td>{solicitud.calificacion}</td>
                                <td>{solicitud.comentario}</td>
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

export default CrudTableHom