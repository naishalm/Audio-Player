import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


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
export default PlayPauseButton;