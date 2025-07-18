import { ConfirmModalProps } from "@/types/confirm-modal-props";
import { Modal } from "../modal/modal";

export const ConfirmModal = (props: ConfirmModalProps) => {
    return (
        <Modal
            handleClickClose={props.handleClickClose}
        >
            <b>
                {props.title}
            </b>
            <br>
            </br>
            <span>{props.description}</span>
            <section>
                <button onClick={props.handleClickConfirm}>Confirmar</button>
                <button style={{ background: "red" }} onClick={props.handleClickCancel}>Cancelar</button>
            </section>
        </Modal>
    )
}