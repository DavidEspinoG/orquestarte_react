import React from "react";
import { Template } from "../components/Template";
import { AboutElement } from "../components/AboutElement";
import img1 from "../assets/img/aboutus.png";
import img2 from "../assets/img/about2.png";
import img3 from "../assets/img/about3.png";

function AboutUs(){
    return(
        <>
            <Template>
                <div className="contenedor">
                    <AboutElement
                        image={img1}
                        title="¿Quiénes somos?"
                        content="Orquestarte es una empresa dedicada a brindar educación musical especializada de alta calidad a colegios públicos y privados de educación básica."
                    />
                    <AboutElement
                        image={img2}
                        title="¿Qué ofrece orquestarte a los colegios?"
                        content="Nosotros llevamos a tu colegio todo lo necesario
                        para una clase de música de alta calidad: maestros especializados, 
                        instrumentos musicales, partituras, etc."
                    />
                    <AboutElement
                        image={img3}
                        title="¿Cómo se paga por nuestros servicios?"
                        content="Ofrecemos dos modalidades de pago: el colegio puede contratar
                        nuestros servicios por una cantidad mensual fija u orquestarte puede trabajar sin
                        costo para el colegio cobrando directamente a los alumnos. En la segunda modalidad, 
                        orquestarte le paga a tu colegio una mensualidad fija."
                    />
                </div>
            </Template>
        </>
    )
}

export { AboutUs }