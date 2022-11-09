import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <DialogBox
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      >
        {children}
      </DialogBox>
      <ClickArea
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
      <Backdrop></Backdrop>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 10000;
`;

const DialogBox = styled.dialog`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: transparent;
  z-index: 10000;
`;

const ClickArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: transparent;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default Modal;
