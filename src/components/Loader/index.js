import ReactDOM from 'react-dom';
import { Overlay } from './styles';

export function Loader() {
    return ReactDOM.createPortal(
        <Overlay>
            <div className="loader" />
        </Overlay>,
        document.getElementById('loader-root'),
    );
}
