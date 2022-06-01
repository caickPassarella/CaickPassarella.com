import { InfoCard } from '../InfoCard';
import { HomeContainer, HomeWrapper } from './HomepageElements.js';
import img1 from '../../images/image1.png';

export function Homepage() {
  const headerText = 'Caick \nPassarella';
  const paragraphtext =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis posuere libero, at laoreet tortor cursus posuere. Fusce fermentum purus eu convallis feugiat. Suspendisse bibendum, erat in rhoncus sollicitudin, nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut. Nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut.';
  return (
    <HomeContainer>
      <HomeWrapper>
        <InfoCard headerText={headerText} image={img1} title={true} />
        <InfoCard headerText="Who am I" paragraphtext={paragraphtext} />
        <InfoCard headerText="Product" image={img1} reverse={true} paragraphtext={paragraphtext} />
        <InfoCard headerText="Engineering" paragraphtext={paragraphtext} />
        <InfoCard headerText="Design" reverse={true} paragraphtext={paragraphtext} />
      </HomeWrapper>
    </HomeContainer>
  );
}
