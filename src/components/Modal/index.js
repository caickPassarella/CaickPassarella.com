import PropTypes from 'prop-types';

import {
  ModalBackground,
  ModalContainer,
  ModalWrapper,
  ModalTitle,
  ModalText,
  ModalIcon,
  ModalFooter,
} from './ModalElements';

export function Modal(props) {
  return (
    <ModalBackground onClick={() => props.setOpenModal(false)}>
      <ModalContainer>
        <ModalWrapper>
          <ModalTitle>{props.type}</ModalTitle>
          <ModalText>{props.text}</ModalText>
        </ModalWrapper>
        <ModalFooter>caickpassarella.com</ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
}

Modal.propTypes = {
  setOpenModal: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
};
