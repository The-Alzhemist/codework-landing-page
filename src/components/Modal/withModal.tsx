import React from "react";
import { ModalAcceptProps, ModalProps } from "./interface";

const withModal = (Component: React.FC<ModalProps>) => {
  const Hoc = ({
    children,
    isOpen,
    onCloseHandler,
    disabledClose = false,
  }: ModalAcceptProps) => {
    const onCloseModal = (event: React.MouseEvent<HTMLElement>) => {
      if (
        !disabledClose &&
        ((event.target as HTMLElement).id === "modalBackdrop" ||
          (event.target as HTMLElement).id === "hideModalBtn")
      ) {
        onCloseHandler();
      }
    };

    const newProps: ModalProps = {
      onCloseModal,
      isOpen,
      children,
      disabledClose,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withModal;
