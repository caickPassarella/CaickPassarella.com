import PropTypes from 'prop-types';
import {
  ParagraphWrapper,
  ReverseParagraphWrapper,
  ParagraphTitle,
  ParagraphHeader,
  ParagraphText,
  ParagraphSubTitle,
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
        <ReverseParagraphWrapper>
          <ParagraphHeader>{props.header}</ParagraphHeader>
          <ParagraphText>{props.text}</ParagraphText>
        </ReverseParagraphWrapper>
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
