import React, { useState, useEffect } from "react";

function AutoImageCarousel() {
  const images = [
    "/image1.png","/image1.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changer toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyage
  }, [images.length]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "500px", borderRadius: "10px" }}
      />
    </div>
  );
}

export default AutoImageCarousel;
