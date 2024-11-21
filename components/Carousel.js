import React, { useState } from "react";
import styles from "../styles/Carousel.module.css"; 

function ImageCarousel() {
  const images = [
    "/image1.png","/image2.jpg","/image3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion du défilement
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrev} className={styles.button}>
        ◀
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />
      <button onClick={handleNext} className={styles.button}>
        ▶
      </button>
    </div>
  );
}

export default ImageCarousel;
