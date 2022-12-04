import React, { useState } from "react";
import { Template } from "../components/Template";
function Contact(){
    const [name, setName ] = useState('');
    const [mail, setMail ] = useState('');
    const [message, setMessage ] = useState('');
    return(
        <>
            <Template>
                <div className="contenedor">
                    <div className="form-container">
                    <h2> ¿Interesad@? Dejanos tus datos y nos pondremos en contacto </h2>
                        <form className="form" 
                            onSubmit={(e) => {
                                e.preventDefault()
                                console.log(name, mail, message)
                            }}
                        >
                            <label htmlFor="name">Tu nombre</label>
                            <input type='text' id="name" value={name} 
                                onChange={(e)=> {
                                    setName(e.target.value)
                                }}
                            ></input>
                            <label htmlFor="email">Tu E-Mail</label>
                            <input type='email' id="email" value={mail}
                                onChange={(e)=> {
                                    setMail(e.target.value)
                                }}
                            ></input>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" value={message}
                                onChange={(e)=> {
                                    setMessage(e.target.value)
                                }}
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </Template>
        </>
    )
}

export { Contact }