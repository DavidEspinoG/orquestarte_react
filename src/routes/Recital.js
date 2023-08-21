import React from "react";
import { Template } from "../components/Template";
import { recitalData } from "../data/recitalData";

function Recital(){
    return (
        <Template home={true}>
            <div className="contenedor centrar-texto">
                <h1 className="titulo-recital">15 de julio de 2023</h1>
                <div className="contenedor programa">
                    {recitalData.map((alumno) => {
                        return (
                            <>
                                <p className="alumno">{alumno.name}</p>
                                <div className="repertorio">
                                    {alumno.repertoire.map((pieza)=> (
                                        <div className="pieza-flex">
                                            <p className="pieza">{pieza.title}</p>
                                            <p className="compositor">{pieza.composer}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="maestro">Maestro(a): {alumno.teacher}</p>
                                {alumno.accomp && <p className="compositor">Acompañada por: {alumno.teacher}</p>}
                            </>
                        )
                    })}
                </div>
            </div>
        </Template>
    )
}   

export { Recital };
