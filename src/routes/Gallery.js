import React from "react";
import { Template } from "../components/Template";
import ImageGallery from 'react-image-gallery';
import original1 from "../assets/gallery/original/galeria1.jpg";
import original2 from "../assets/gallery/original/galeria2.jpg";
import original3 from "../assets/gallery/original/galeria3.jpg";
import original4 from "../assets/gallery/original/galeria4.jpeg";
import original5 from "../assets/gallery/original/galeria5.jpeg";
import original6 from "../assets/gallery/original/galeria6.jpg";
import original7 from "../assets/gallery/original/galeria7.jpg";
import thumb1 from "../assets/gallery/thumb/galeria1.jpg";
import thumb2 from "../assets/gallery/thumb/galeria2.jpg";
import thumb3 from "../assets/gallery/thumb/galeria3.jpg";
import thumb4 from "../assets/gallery/thumb/galeria4.jpeg";
import thumb5 from "../assets/gallery/thumb/galeria5.jpeg";
import thumb6 from "../assets/gallery/thumb/galeria6.jpg";
import thumb7 from "../assets/gallery/thumb/galeria7.jpg";

class Gallery extends React.Component {
  render() {
    return (
        <Template>
            <div className="contenedor">
            <ImageGallery 
                items={images} 
                infinite={true}
                lazyLoad={true}
                showNav={true}
                showBullets={true}
                autoPlay={true}
            />  
            </div>
        </Template>
            
    )
            
  }
}

export { Gallery }


const images = [
    {
      original: original1,
      thumbnail: thumb1,
    },
    {
      original: original2,
      thumbnail: thumb2,
    },
    {
      original: original3,
      thumbnail: thumb3,
    },
    {
      original: original4,
      thumbnail: thumb4,
    },
    {
      original: original5,
      thumbnail: thumb5,
    },
    {
      original: original6,
      thumbnail: thumb6,
    },
    {
      original: original7,
      thumbnail: thumb7,
    },
    
  ];