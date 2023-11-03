import { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
  State: boolean;
  setModal1: (value: boolean) => void;
  titulo: string;
  showHeader: boolean;
  showOverlay: boolean;
}
const Modal = ({
  children,
  State,
  setModal1,
  titulo = "Alerta",
  showHeader,
  showOverlay,
}: ModalProps) => {
  return (
    <>
      {State && (
        <Overlay showOverlay={showOverlay}>
          <ContenedorModal>
            {showHeader && (
              <EncabezadoModal>
                <h3>{titulo}</h3>
              </EncabezadoModal>
            )}
            <BotonCerrar onClick={() => setModal1(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                style={{ fill: "white" }}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div<{ showOverlay: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.showOverlay ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;
//justify-content: center;  -> centra de forma horizontal
//align-items: center;  -> centra de forma vertical
const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #392287;
  position: relative;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;

  @media (max-width: 800px) {
    width: clamp(11.25rem, 0.4808rem + 61.5385vw, 31.25rem);
  }
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3a1570;

  h3 {
    font-weight: 500px;
    font-size: 16px;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease all;

  svg {
    top: 10px;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: #5741a8;
  }
`;
