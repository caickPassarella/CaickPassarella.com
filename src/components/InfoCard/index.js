import PropTypes from 'prop-types';
import { Paragraph } from '../Paragraph';
import { InfoWrapper, InfoImage } from './InfoCardElements';

export function InfoCard(props) {
  function handleReverse() {
    if (props.reverse === true) {
      return (
        <InfoWrapper>
          {props.image ? <InfoImage src={props.image} /> : <></>}
          <Paragraph title={props.title} header={props.headerText} text={props.paragraphtext} />
        </InfoWrapper>
      );
    } else {
      return (
        <InfoWrapper>
          <Paragraph title={props.title} header={props.headerText} text={props.paragraphtext} />
          {props.image ? <InfoImage src={props.image} /> : <></>}
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
  headerText: PropTypes.string,
  paragraphtext: PropTypes.string,
};
