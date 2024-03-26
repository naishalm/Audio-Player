import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faStepForward, faShuffle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


function ShuffleButton({ shuffle, onClick }) {
  return (
    <button onClick={onClick}>
      {shuffle ? (
        <FontAwesomeIcon icon={faShuffle} />
      ) : (
        <FontAwesomeIcon icon={faShuffle} flip="horizontal" />
      )}
    </button>
  );
}

function PrevButton({ onClick }) {
  return <button onClick={onClick}><FontAwesomeIcon icon={faStepBackward} /></button>;
}

function NextButton({ onClick }) {
  return <button onClick={onClick}><FontAwesomeIcon icon={faStepForward} /></button>;
}

function App() {
  const handleDoubleClick = (title) => {
    setStatus(`Playing: ${title}`);
  };
  const [status, setStatus] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [audioControl, setAudioControl] = useState({
    isPlaying: false,
    currentTrackIndex: 0,
    shuffle: false,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/playlist")
      .then(response => {
        setPlaylist(response.data.playlist);
      })
      .catch(error => {
        console.log("Error fetching playlist data:", error);
      });
  }, []);

  useEffect(() => {
    const savedAudioControl = localStorage.getItem("audioControl");
    if (savedAudioControl) {
      setAudioControl(JSON.parse(savedAudioControl));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("audioControl", JSON.stringify(audioControl));
  }, [audioControl]);

  const handlePlayPause = () => {
    setAudioControl({ ...audioControl, isPlaying: !audioControl.isPlaying });
  };

  const handlePrevTrack = () => {
    // Implement the functionality for the Prev button
  };

  const handleNextTrack = () => {
    // Implement the functionality for the Next button
  };

  return (

    <div className="App">
      <div className="audio-controls">
        <ShuffleButton
          shuffle={audioControl.shuffle}
          onClick={() =>
            setAudioControl({ ...audioControl, shuffle: !audioControl.shuffle })
          }
        />
        <Song
          title={song.title}
          artist={song.artist}
          year={song.year}
          onDoubleClick={() => handleDoubleClick(song.title)}
        />

        <Podcast
          title={podcast.episodeTitle}
          season={podcast.season}
          episode={podcast.episode}
          onDoubleClick={() => handleDoubleClick(podcast.episodeTitle)}
        />
        <PrevButton onClick={handlePrevTrack} />
        <PlayPauseButton
          isPlaying={audioControl.isPlaying}
          onClick={handlePlayPause}
        />
        <NextButton onClick={handleNextTrack} />
        <div className="status">{status}</div>
      </div>
      <div className="playlist">
        {playlist.map((track, index) => (
          <div key={index} className={`track ${index === audioControl.currentTrackIndex ? "current" : ""}`}>
            <div className="track-info">
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayPauseButton({ isPlaying, onClick }) {
  return (
    <button onClick={onClick}>
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} />
      ) : (
        <FontAwesomeIcon icon={faPlay} />
      )}
    </button>
  );
}

export default App;