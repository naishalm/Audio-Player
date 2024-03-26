// Podcast.js
import React from 'react';
import './Playlist.css';
import './index.css';
const Podcast = ({ season, episode, episodeTitle }) => {
  return (
    <div style={{ border: '10px solid #ddd', borderRadius: '5px', padding: '10px', margin: '10px', backgroundColor: '#f0f0f0' }}>
      {season !== undefined ? (
        <h3>Season {season}, Episode {episode}</h3>
      ) : (
        <h3>Episode {episode}</h3>
      )}
      <p>Episode Title: {episodeTitle}</p>
    </div>
  );
};

export default Podcast;
