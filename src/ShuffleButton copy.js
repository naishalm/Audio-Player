import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

const ShuffleButton = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.shuffle ? (
                <FontAwesomeIcon icon={faShuffle} />
            ) : (
                <FontAwesomeIcon icon={faShuffle} flip="horizontal" />
            )}
        </button>
    );
};

export default ShuffleButton;