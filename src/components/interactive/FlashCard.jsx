import React from 'react';
import styles from './FlashCard.module.css';

/**
 * Interactive flashcard component for Oppikirjasto
 * 
 * @param {Object} props
 * @param {string} props.front - Content for the front of the card
 * @param {string} props.back - Content for the back of the card
 * @param {string} props.category - Optional category label
 */
export default function FlashCard({ front, back, category }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.flashcardContainer}>
      {category && <div className={styles.category}>{category}</div>}
      
      <div 
        className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`} 
        onClick={handleFlip}
      >
        <div className={styles.front}>
          <div className={styles.content}>
            {front}
          </div>
          <div className={styles.hint}>Klikkaa nähdäksesi vastauksen</div>
        </div>
        
        <div className={styles.back}>
          <div className={styles.content}>
            {back}
          </div>
          <div className={styles.hint}>Klikkaa palataksesi kysymykseen</div>
        </div>
      </div>
    </div>
  );
}
