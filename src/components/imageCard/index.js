import PropTypes from 'prop-types';
import { InfoImage, SquareCard, SubText } from './ImageCardElements';

export function ImageCard(props) {
  return (
    <div>
      <SquareCard>
        <InfoImage src={props.image} />
      </SquareCard>
      <SubText>{props.subtext}</SubText>
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.string,
  subtext: PropTypes.string,
};
