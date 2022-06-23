import PropTypes from 'prop-types';
import {
  ParagraphWrapper,
  ParagraphTitle,
  ParagraphHeader,
  ParagraphText,
} from './ParagraphElements';

export function Paragraph(props) {
  function handleParagraph() {
    if (props.title) {
      return (
        <ParagraphWrapper>
          <ParagraphTitle>{props.header}</ParagraphTitle>
        </ParagraphWrapper>
      );
    } else {
      return (
        <ParagraphWrapper>
          <ParagraphHeader>{props.header}</ParagraphHeader>
          <ParagraphText>{props.text}</ParagraphText>
        </ParagraphWrapper>
      );
    }
  }

  return handleParagraph();
}

Paragraph.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.bool,
};
