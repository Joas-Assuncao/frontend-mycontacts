import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Spinner } from '../Spinner';
import { Overlay } from './styles';

export function Loader({ isLoading }) {
    if (!isLoading) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <Spinner size={90} />
        </Overlay>,
        document.getElementById('loader-root'),
    );
}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
