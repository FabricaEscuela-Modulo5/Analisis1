import React, { useState } from "react"

const CrudFormHom = ({addSolicitud}) => {

    const [formData, setFormData] = useState({
        codigo: '',
        materia: '',
        programa: '',
        periodo: '',
        calificacion: '',
        comentario: '',
        id: null
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.codigo != "" && formData.materia != "" && formData.programa != "" && formData.periodo != "" && formData.calificacion != "") {
            formData.id = Date.now()
            addSolicitud(formData)
            setFormData({
                codigo: '',
                materia: '',
                programa: '',
                periodo: '',
                calificacion: '',
                comentario: '',
                id: null
            })
        }
        else {
            alert('Debe llenar todos los datos')
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const initialFormData = {
        codigo: '',
        materia: '',
        programa: '',
        periodo: '',
        calificacion: '',
        comentario: '',
        id: null
    };

    const handleReset = () => {
        setFormData(initialFormData);
      };

    return (
        <div className="solicitud-tabla">
            <form onSubmit={handleSubmit}>
                <div className="rellenar-form">
                    <div>
                        <label>CÓDIGO<span>*</span></label>
                        <input type="number" name="codigo" required placeholder="Código" onChange={handleChange} value={formData.codigo}/>
                    </div>
                    <div>
                        <label>MATERIA<span>*</span></label>
                        <input type="text" name="materia" required placeholder="Nombre Materia" onChange={handleChange} value={formData.materia}/>
                    </div>
                    <div>
                        <label>PROGRAMA<span>*</span></label>
                        <input type="text" name="programa" required placeholder="Nombre Programa" onChange={handleChange} value={formData.programa}/>
                    </div>
                </div>
                <div className="rellenar-form">
                    <div>
                        <label>PERIODO<span>*</span></label>
                        <input type="number" name="periodo" required placeholder="Periodo, ej. 20231" onChange={handleChange} value={formData.periodo}/>
                    </div>
                    <div>
                        <label>CALIFICAIÓN<span>*</span></label>
                        <input type="number" name="calificacion" required placeholder="Calificación, ej. 4.2" onChange={handleChange} value={formData.calificacion}/>
                    </div>
                    <div>
                        <label>COMENTARIO</label>
                        <input type="text" name="comentario" placeholder="Comentario" onChange={handleChange} value={formData.comentario}/>
                    </div>
                </div>
                <div className="btn-form">
                    <input type="submit" className="btn-agregar" name="agregar" value={"Agregar"}/>
                    <input type="reset" className="btn-borrar" name="borrar" value={"Borrar"} onClick={handleReset}/>
                </div>
            </form>
            <hr className="separador"/>
        </div>
    )
}

export default CrudFormHom