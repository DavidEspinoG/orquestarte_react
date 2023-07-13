import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Template } from "../components/Template";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../secrets";


function Contact(){
    const form = useRef();
    const [name, setName ] = useState('');
    const [mail, setMail ] = useState('');
    const [message, setMessage ] = useState('');
    const [number, setNumber ] = useState('');

    const sendMail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            },(error) => {
                console.log(error.text)
            })
    }
    return(
        <>
            <Template>
                <div className="contenedor">
                    <div className="form-container">
                    <h2> ¿Interesad@? Déjanos tus datos y nos pondremos en contacto </h2>
                        <form className="form" ref={form}onSubmit={sendMail}
                        >
                            <label htmlFor="name">Tu nombre</label>
                            <input type='text' id="name" name="client_name" value={name} 
                                onChange={(e)=> {
                                    setName(e.target.value)
                                }}
                            ></input>
                            <label htmlFor="email">Tu E-Mail</label>
                            <input required type='email' id="email" name="client_mail" value={mail}
                                onChange={(e)=> {
                                    setMail(e.target.value)
                                }}
                            ></input>
                            <label htmlFor="number">Teléfono (opcional)</label>
                            <input type='number' name="client_number" id="number" value={number}
                                onChange={(e)=> {
                                    setNumber(e.target.value)
                                }}
                            ></input>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" value={message}
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

export { Contact };
