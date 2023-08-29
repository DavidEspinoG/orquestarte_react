import React from 'react';

function AboutElement(props) {
  return (
    <div className="about-us">
      <div className="about-us-img">
        <img src={props.image} alt="Imagen musical" />
      </div>
      <div className="about-us-text">
        <div>
          <h3>{props.title}</h3>
          <p>{props.content}</p>

        </div>
      </div>
    </div>
  );
}
export { AboutElement };
