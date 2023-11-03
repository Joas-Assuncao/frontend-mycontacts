import PropTypes from 'prop-types';

import { ReactPortal } from '../ReactPortal';
import { Button } from '../Button';
import { Container, Footer, Overlay } from './styles';

export function Modal({
    danger,
    title,
    visible,
    children,
    onCancel,
    onConfirm,
    isLoading,
    cancelLabel,
    confirmLabel,
}) {
    if (!visible) return null;

    return (
        <ReactPortal containerId="modal-root">
            <Overlay>
                <Container danger={danger}>
                    <h1>{title}</h1>

                    <div className="modal-body">
                        {children}
                    </div>

                    <Footer>
                        <button
                            onClick={onCancel}
                            type="button"
                            className="cancel-button"
                            disabled={isLoading}
                        >
                            {cancelLabel}
                        </button>

                        <Button
                            onClick={onConfirm}
                            type="button"
                            danger={danger}
                            isLoading={isLoading}
                        >
                            {confirmLabel}
                        </Button>
                    </Footer>
                </Container>
            </Overlay>
        </ReactPortal>
    );
}

Modal.propTypes = {
    danger: PropTypes.bool,
    isLoading: PropTypes.bool,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    danger: false,
    isLoading: false,
    cancelLabel: 'Cancelar',
    confirmLabel: 'Confirmar',
};
