import { InfoCard } from '../InfoCard';
import { HomeContainer, HomeWrapper } from './HomepageElements.js';
import img1 from '../../images/image1.png';

export function Homepage() {
  const header = 'Caick \nPassarella';
  const paragraph =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis posuere libero, at laoreet tortor cursus posuere. Fusce fermentum purus eu convallis feugiat. Suspendisse bibendum, erat in rhoncus sollicitudin, nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut. Nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut.';
  return (
    <HomeContainer>
      <HomeWrapper>
        <InfoCard header={header} image={img1} title={true} />
        <InfoCard header="Who am I" paragraph={paragraph} />
        <InfoCard header="Product" reverse={true} paragraph={paragraph} />
        <InfoCard header="Engineering" image={img1} paragraph={paragraph} />
        <InfoCard header="Design" reverse={true} paragraph={paragraph} />
      </HomeWrapper>
    </HomeContainer>
  );
}
