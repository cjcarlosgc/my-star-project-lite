import { ModalProps } from "@/types/modal-props";
import { useEffect, useState } from "react"
import { createPortal } from "react-dom";
import styles from './modal.module.css';

export const Modal = (props: ModalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    if(!mounted) {
        return null;
    }

    return createPortal(
        <>
            <div className={styles.modalContainer} onClick={props.handleClickClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>
        </>,
        document.body
    )
}