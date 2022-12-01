import React from "react";

function Title(props) {
    return (
        <div className="contenedor titulo">
            <h1>{props.children}</h1>
        </div>
    )
}

export { Title }