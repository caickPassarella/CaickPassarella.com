import PropTypes from 'prop-types';
import {
  ParagraphTitle,
  ParagraphHeader,
  ParagraphText,
  ParagraphSubTitle,
} from './ParagraphElements';

export function Paragraph(props) {
  function handleParagraph() {
    if (props.title) {
      return (
        <div>
          <ParagraphTitle>{props.header}</ParagraphTitle>
          <ParagraphSubTitle>{props.text}</ParagraphSubTitle>
        </div>
      );
    } else if (props.reverse) {
      return (
        <div style={{ textAlign: 'end' }}>
          <ParagraphHeader>{props.header}</ParagraphHeader>
          <ParagraphText>{props.text}</ParagraphText>
        </div>
      );
    } else {
      return (
        <div>
          <ParagraphHeader>{props.header}</ParagraphHeader>
          <ParagraphText>{props.text}</ParagraphText>
        </div>
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
