import PropTypes from 'prop-types';
import { Paragraph } from '../Paragraph';
import { InfoWrapper, InfoImage, ImageWrapper, ImageShadow } from './InfoCardElements';

export function InfoCard(props) {
  function handleImage() {
    if (props.image) {
      return (
        <ImageWrapper>
          {props.title ? (
            <InfoImage title="true" src={props.image} />
          ) : (
            <InfoImage src={props.image} />
          )}
          <ImageShadow />
        </ImageWrapper>
      );
    } else {
      return <></>;
    }
  }

  function handleReverse() {
    if (props.reverse === true) {
      return (
        <InfoWrapper>
          {handleImage()}
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
          {handleImage()}
        </InfoWrapper>
      );
    }
  }

  return <div id={props.id}>{handleReverse()}</div>;
}

InfoCard.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.bool,
  image: PropTypes.string,
  header: PropTypes.string,
  paragraph: PropTypes.string,
  id: PropTypes.id,
};
