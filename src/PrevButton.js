import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

function PrevButton({ onClick }) {
    return <button onClick={onClick}><FontAwesomeIcon icon={faStepBackward} /></button>;

}
export default PrevButton;