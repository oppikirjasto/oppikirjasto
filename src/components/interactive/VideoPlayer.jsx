import React, { useRef, useState } from 'react';
import styles from './VideoPlayer.module.css';

/**
 * Interactive video player component for Oppikirjasto
 * 
 * @param {Object} props
 * @param {string} props.src - Video source URL
 * @param {string} props.title - Video title
 * @param {string} props.description - Optional video description
 * @param {Array<Object>} props.timestamps - Optional array of timestamp objects with time and label properties
 */
export default function VideoPlayer({ src, title, description, timestamps = [] }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleTimestampClick = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.videoContainer}>
      <h3 className={styles.title}>{title}</h3>
      
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.video}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          controls={false}
        >
          <source src={src} type="video/mp4" />
          Selaimesi ei tue video-elementtiä.
        </video>
        
        <div className={styles.customControls}>
          <button 
            className={styles.playButton} 
            onClick={handlePlayPause}
            aria-label={isPlaying ? 'Pysäytä' : 'Toista'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          
          <div className={styles.progressContainer}>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className={styles.progressBar}
              aria-label="Videon aikajana"
            />
            <div className={styles.timeDisplay}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
      
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      
      {timestamps && timestamps.length > 0 && (
        <div className={styles.timestamps}>
          <h4>Aikamerkit:</h4>
          <ul>
            {timestamps.map((timestamp, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleTimestampClick(timestamp.time)}
                  className={styles.timestampButton}
                >
                  {formatTime(timestamp.time)}
                </button>
                {timestamp.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
