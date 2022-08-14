import PropTypes from 'prop-types';

import {
  ModalBackground,
  ModalContainer,
  ModalWrapper,
  ModalTitle,
  ModalText,
  ModalIcon,
  ModalFooter,
  IconsWrapper,
} from './ModalElements';

function handleIcons(icons) {
  const iconList = icons.map((icon, i) => {
    return <ModalIcon key={i} src={icon} />;
  });
  return iconList;
}

export function Modal(props) {
  return (
    <ModalBackground onClick={() => props.setOpenModal(false)}>
      <ModalContainer>
        <ModalWrapper>
          <ModalTitle>{props.type}</ModalTitle>
          <ModalText>{props.text}</ModalText>
        </ModalWrapper>
        <ModalWrapper>
          <b>
            <ModalText>Tools used:</ModalText>
          </b>
          <IconsWrapper>{handleIcons(props.icons)}</IconsWrapper>
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
  icons: PropTypes.array,
};
