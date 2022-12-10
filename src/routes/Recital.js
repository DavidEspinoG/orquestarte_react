import React from "react";
import { Template } from "../components/Template";
import { recitalData } from "../data/recitalData";

function Recital(){
    return (
        <Template>
            <div className="contenedor centrar-texto">
                <h1 className="titulo-recital">10 de diciembre de 2022</h1>
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
                            </>
                        )
                    })}
                </div>
            </div>
        </Template>
    )
}   

export { Recital }