import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

function NextButton({ onClick }) {
    return <button onClick={onClick}><FontAwesomeIcon icon={faStepForward} /></button>;
}

export default NextButton;