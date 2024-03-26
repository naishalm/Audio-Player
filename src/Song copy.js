// Song.js
import React from 'react';

const Song = ({ title, artist, year }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', margin: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>Title: {title}</h3>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Song;
