import React, { useState } from 'react';
import styles from './ImageGallery.module.css';

/**
 * Interactive image gallery component for Oppikirjasto
 * 
 * @param {Object} props
 * @param {Array<Object>} props.images - Array of image objects with src, alt, and caption properties
 * @param {string} props.title - Optional gallery title
 */
export default function ImageGallery({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      {title && <h3 className={styles.title}>{title}</h3>}
      
      <div className={styles.mainImageContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`} 
          onClick={handlePrevious}
          aria-label="Edellinen kuva"
        >
          &#10094;
        </button>
        
        <div className={styles.mainImage}>
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt || 'Galleriakuva'} 
          />
          {images[currentIndex].caption && (
            <div className={styles.caption}>
              {images[currentIndex].caption}
            </div>
          )}
        </div>
        
        <button 
          className={`${styles.navButton} ${styles.nextButton}`} 
          onClick={handleNext}
          aria-label="Seuraava kuva"
        >
          &#10095;
        </button>
      </div>
      
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.src} alt={`Pikkukuva ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <div className={styles.counter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
