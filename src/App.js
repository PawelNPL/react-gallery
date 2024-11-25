import React, { useState } from "react";
import './App.css';

function App() {

  const zdjecia = [
      { src: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg", description: "tygrys" },
      { src: "https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D", description: "człowiek z kamerą" },
      { src: "https://www.guillenphoto.com/data/blog/2016/001-chronique-pourquoi-faire-de-la-photo-I/images/amar-guillen-photographiing-death-valley.jpg", description: "człowiek z kamerą 2" },
      { src: "https://static.vecteezy.com/system/resources/thumbnails/050/971/437/small_2x/miami-skyline-with-palms-tropical-urban-travelreal-estate-theme-photo.jpg", description: "palmy i budynki" },
      { src: "https://www.motortrend.com/uploads/2023/06/gunsai-attack-orange-rx7-fd.jpg?w=768&width=768&q=75&format=webp", description: "Gunstai Touge" },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? zdjecia.length -1 : prevIndex -1
  );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === zdjecia.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePhotoClick = () => {
    alert(zdjecia[currentIndex].description);
  };




  return (
     <div className="app">
      <div className="gallery">
        <img
          src={zdjecia[currentIndex].src}
          alt={zdjecia[currentIndex].description}
          className="photo"
          onClick={handlePhotoClick}
        />
        <div className="buttons">
          <button onClick={handlePrevious}>W lewo</button>
          <button onClick={handleNext}>W prawo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
