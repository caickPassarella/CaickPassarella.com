import PropTypes from 'prop-types';
import {
  ParagraphTitle,
  ParagraphHeader,
  ParagraphText,
  ParagraphSubTitle,
  ParagraphWrapper,
} from './ParagraphElements';

export function Paragraph(props) {
  function handleParagraph() {
    if (props.title) {
      return (
        <ParagraphWrapper>
          <ParagraphTitle>{props.header}</ParagraphTitle>
          <ParagraphSubTitle>{props.text}</ParagraphSubTitle>
        </ParagraphWrapper>
      );
    } else if (props.reverse) {
      return (
        <ParagraphWrapper style={{ textAlign: 'end' }}>
          <ParagraphHeader>{props.header}</ParagraphHeader>
          <ParagraphText>{props.text}</ParagraphText>
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
  reverse: PropTypes.bool,
};
