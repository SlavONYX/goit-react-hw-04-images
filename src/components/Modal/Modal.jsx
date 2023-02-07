import { useEffect } from "react";
import { createPortal } from 'react-dom';
import styles from './Modal.module.css'
import PropTypes from "prop-types";

const modalRoot = document.getElementById('root');

export function Modal({ modalImage, onClose }) {

useEffect(() => {
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
        return onClose();
        }
    };
    
    const handleCloseClick = e => {

        if (e.target.alt === undefined ) {
        return onClose();
        }      
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('click', handleCloseClick)

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('click', handleCloseClick)
    } 
})

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
            <img src={modalImage} alt="modalPicture" />
            </div>
        </div>, modalRoot
        );
    }

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    modalImage: PropTypes.string.isRequired,
};