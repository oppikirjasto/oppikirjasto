import React from 'react';
import InteractiveModule from '@site/src/components/interactive/InteractiveModule';
import Quiz from '@site/src/components/interactive/Quiz';
import ImageGallery from '@site/src/components/interactive/ImageGallery';
import VideoPlayer from '@site/src/components/interactive/VideoPlayer';
import FlashCard from '@site/src/components/interactive/FlashCard';

/**
 * Main export for all interactive components
 * This allows easy importing of all components in MDX files
 */
export {
  InteractiveModule,
  Quiz,
  ImageGallery,
  VideoPlayer,
  FlashCard
};

/**
 * Example usage component to demonstrate how to use interactive components
 */
export function InteractiveExamples() {
  const galleryImages = [
    {
      src: '/img/undraw_docusaurus_mountain.svg',
      alt: 'Docusaurus mountain',
      caption: 'Docusaurus mountain illustration'
    },
    {
      src: '/img/undraw_docusaurus_tree.svg',
      alt: 'Docusaurus tree',
      caption: 'Docusaurus tree illustration'
    },
    {
      src: '/img/undraw_docusaurus_react.svg',
      alt: 'Docusaurus react',
      caption: 'Docusaurus react illustration'
    }
  ];

  const videoTimestamps = [
    { time: 10, label: 'Introduction to the topic' },
    { time: 30, label: 'Key concepts explained' },
    { time: 60, label: 'Summary and conclusion' }
  ];

  return (
    <div>
      <h2>Interactive Component Examples</h2>
      
      <InteractiveModule title="Quiz Example" type="quiz" description="Test your knowledge with this interactive quiz.">
        <Quiz
          question="Mikä on Suomen pääkaupunki?"
          options={["Tukholma", "Helsinki", "Oslo", "Kööpenhamina"]}
          correctAnswer={1}
          explanation="Helsinki on Suomen pääkaupunki. Se sijaitsee Suomenlahden rannalla Etelä-Suomessa."
        />
      </InteractiveModule>
      
      <InteractiveModule title="Image Gallery Example" type="gallery" description="Explore these images with the interactive gallery.">
        <ImageGallery
          images={galleryImages}
          title="Docusaurus Illustrations"
        />
      </InteractiveModule>
      
      <InteractiveModule title="Video Player Example" type="video" description="Watch this video with our custom player.">
        <VideoPlayer
          src="https://example.com/sample-video.mp4"
          title="Introduction to Finnish Language"
          description="This video introduces basic concepts of Finnish language."
          timestamps={videoTimestamps}
        />
      </InteractiveModule>
      
      <InteractiveModule title="Flash Card Example" type="flashcard" description="Practice with these interactive flash cards.">
        <FlashCard
          front="Mitä tarkoittaa sana 'kirja' suomeksi?"
          back="'Kirja' tarkoittaa 'book' englanniksi."
          category="Sanasto"
        />
      </InteractiveModule>
    </div>
  );
}
