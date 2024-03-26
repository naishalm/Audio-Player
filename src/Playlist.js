// Playlist.js
import React, { useState, useEffect } from 'react';
import Song from './Song';
import Podcast from './Podcast';
import ShuffleButton from './ShuffleButton';
import PlayPauseButton from './PlayPauseButton';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import './Playlist.css'; // Import the external stylesheet

const Playlist = () => {
  const [shuffledList, setShuffledList] = useState([]);


  const handlePlayPause = () => {
    // Implement play/pause functionality
  };

  const handlePrev = () => {
    // Implement previous track functionality
  };

  const handleNext = () => {
    // Implement next track functionality
  };



  // Sample data for songs
  const songsData = [
    { title: 'Song 1', artist: 'Artist 10000', year: 2020 },
    { title: 'Song 2', artist: 'Artist 2', year: 2019 },
    { title: 'Song 3', artist: 'Artist 3', year: 2021 },
  ];

  // Sample data for podcasts
  const podcastsData = [
    { season: 1, episode: 1, episodeTitle: 'Podcast Episode 1' },
    { season: 2, episode: 3, episodeTitle: 'Podcast Episode 3' },
    { season: 1, episode: 2, episodeTitle: 'Podcast Episode 2' },
  ];
  
  useEffect(() => {
    const songsData = [
      { title: 'Song 1', artist: 'Artist 10000', year: 2020 },
      { title: 'Song 2', artist: 'Artist 2', year: 2019 },
      { title: 'Song 3', artist: 'Artist 3', year: 2021 },
    ];

    const podcastsData = [
      { season: 1, episode: 1, episodeTitle: 'Podcast Episode 1' },
      { season: 2, episode: 3, episodeTitle: 'Podcast Episode 3' },
      { season: 1, episode: 2, episodeTitle: 'Podcast Episode 2' },
    ];

    // Function to shuffle an array
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    // Combine songs and podcasts into a single array
    const combinedList = [...songsData, ...podcastsData];

    // Shuffle the combined list and set it as the initial state
    setShuffledList(shuffleArray(combinedList));
  }, []);

  useEffect(() => {
    // Function to shuffle an array
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    // Combine songs and podcasts into a single array
    const combinedList = [...songsData, ...podcastsData];

    // Shuffle the combined list and set it as the initial state
    setShuffledList(shuffleArray(combinedList));
  }, [podcastsData, songsData]); // Add podcastsData and songsData to the dependency array





  return (
    <div className="playlist-container">
      <h2 className="playlist-header">Shuffled Playlist</h2>

      <ShuffleButton onClick={() => setShuffledList([...shuffledList.sort(() => Math.random() - 0.5)])} />
      <PrevButton onClick={handlePrev} />
      <PlayPauseButton onClick={handlePlayPause} isPlaying={true} />
      <NextButton onClick={handleNext} />


      {shuffledList.map((item, index) => (
        <div key={index} className="entry">
          {item.artist ? (
            <Song {...item} />
          ) : (
            <Podcast {...item} />
          )}
        </div>
      ))}
    </div>






  );

}

export default Playlist;
