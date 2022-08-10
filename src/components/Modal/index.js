import PropTypes from 'prop-types';

import { ModalContainer, ModalTitle, ModalText, ModalIcon, ModalWrapper } from './ModalElements';

export function Modal(props) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalTitle>Notes</ModalTitle>
        <ModalText>
          Before starting a project, to make sure it will go in the right direction, we need to
          write, document, and prioritize. And that’s what I did for this website.
        </ModalText>
        <ModalText>Here are some of the tools that helped me with that:</ModalText>
      </ModalWrapper>
    </ModalContainer>
  );
}

Modal.propTypes = {
  setOpenModal: PropTypes.func,
};
