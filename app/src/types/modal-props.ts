import { ReactNode } from "react";

export type ModalProps = {
    handleClickClose: () => void;
    children: ReactNode;
}