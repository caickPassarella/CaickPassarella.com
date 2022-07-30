import PropTypes from 'prop-types';
import { Paragraph } from '../Paragraph';
import { InfoWrapper, InfoImage, TitleImage, ImageWrapper } from './InfoCardElements';

export function InfoCard(props) {
  function handleImage() {
    if (props.title) {
      return <TitleImage src={props.image} />;
    } else {
      return <InfoImage src={props.image} />;
    }
  }

  function handleReverse() {
    if (props.reverse === true) {
      return (
        <InfoWrapper>
          {props.image ? <ImageWrapper>{handleImage()}</ImageWrapper> : <></>}
          <Paragraph
            title={props.title}
            header={props.header}
            text={props.paragraph}
            reverse={props.reverse}
          />
        </InfoWrapper>
      );
    } else {
      return (
        <InfoWrapper>
          <Paragraph
            title={props.title}
            header={props.header}
            text={props.paragraph}
            reverse={props.reverse}
          />
          {props.image ? <ImageWrapper>{handleImage()}</ImageWrapper> : <></>}
        </InfoWrapper>
      );
    }
  }

  return handleReverse();
}

InfoCard.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.bool,
  image: PropTypes.string,
  header: PropTypes.string,
  paragraph: PropTypes.string,
};
