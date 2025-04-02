import React from 'react';
import styles from './InteractiveModule.module.css';

/**
 * Container component for interactive modules in Oppikirjasto
 * Provides consistent styling and structure for all interactive elements
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The interactive component(s) to render
 * @param {string} props.title - Optional module title
 * @param {string} props.description - Optional module description
 * @param {string} props.type - Type of interactive module (e.g., 'quiz', 'gallery', 'video', 'flashcard')
 */
export default function InteractiveModule({ children, title, description, type }) {
  return (
    <div className={`${styles.module} ${type ? styles[type] : ''}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
