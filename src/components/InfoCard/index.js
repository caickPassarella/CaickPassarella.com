import PropTypes from 'prop-types';
import { Paragraph } from '../Paragraph';
import { InfoWrapper, InfoImage } from './InfoCardElements';

export function InfoCard(props) {
  function handleReverse() {
    if (props.reverse === true) {
      return (
        <InfoWrapper>
          {props.image ? (
            <div>
              <InfoImage src={props.image} />
            </div>
          ) : (
            <></>
          )}
          <Paragraph title={props.title} header={props.header} text={props.paragraph} />
        </InfoWrapper>
      );
    } else {
      return (
        <InfoWrapper>
          <Paragraph title={props.title} header={props.header} text={props.paragraph} />
          {props.image ? (
            <div>
              <InfoImage src={props.image} />
            </div>
          ) : (
            <></>
          )}
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
