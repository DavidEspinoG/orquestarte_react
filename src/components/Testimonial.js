import React from "react";
import testimonial1 from "../assets/img/testimonial1.jpeg";
import testimonial2 from "../assets/img/testimonial2.jpeg";
import testimonial3 from "../assets/img/testimonial3.jpeg";

const testimonials = [
    {
        imgSrc: testimonial1,
        text: `Gracias a los profesores por despertar
         el amor por el arte y la música en nuestros hijos.`,
        author: "Ericka Avilés",
        version: 1 
    },
    {
        imgSrc: testimonial2,
        text: `Es impresionante cómo lograron tan buenos resultados a pesar 
        de la distancia, son un ejemplo de creatividad.`,
        author: "Maria Eugenia Flores",
        version: 2 
    },
    {
        imgSrc: testimonial3,
        text: `Mi más sincero agradecimiento a los profesores, mi admiración
        por su paciencia y dedicación`,
        author: "Samuel López",
        version: 1 
    },
]
function TestimonialV1(props){
    return (
        <div className="cuadro-testimonial">
            <div className="img-testimonial">
                <img src={props.src} className="imagen-testimonial" alt="imagen-testimonial"/>
            </div>
            <div className="cita">
                <blockquote>
                    <p className="texto-testimonial" >{props.text}</p>
                    <span className="autor-testimonial" >{props.author}</span>
                </blockquote>
            </div>
        </div>
    )
}
function TestimonialV2(props){
    return (
        <div className="cuadro-testimonial">
            <div className="cita">
                <blockquote>
                    <p className="texto-testimonial" >{props.text}</p>
                    <span className="autor-testimonial" >{props.author}</span>
                </blockquote>
            </div>
            <div className="img-testimonial">
                <img src={props.src} className="imagen-testimonial" alt="imagen-testimonial"/>
            </div>
        </div>
    )
}

function Testimonial(){
    return (
        <>
            <div className="contenedor titulo">
                <h1>TESTIMONIOS</h1>
            </div>
            <div className="contenedor-testimonial">
                {testimonials.map((element) => {
                    if(element.version === 1){
                       return <TestimonialV1
                            key={element.text}
                            text={element.text}
                            src={element.imgSrc}
                            author={element.author}
                        />
                    } else {
                        return <TestimonialV2
                            key={element.text}
                            text={element.text}
                            src={element.imgSrc}
                            author={element.author}
                        />
                    }
                })}
            </div>                    
        </>
    )
}

export { Testimonial }
