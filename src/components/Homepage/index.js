import { Lightbulb, CoffeeHand, BrewingCoffee, Latte, Notes, Drawing, Laptop } from '../../images';
import { HomeContainer, HomeWrapper, ImageWrapper, Subtitle } from './HomepageElements.js';
import { InfoCard } from '../InfoCard';
import { ImageCard } from '../ImageCard';
import { Footer } from '../Footer';

export function Homepage() {
  const header = 'Caick \nPassarella';
  const paragraph =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis posuere libero, at laoreet tortor cursus posuere. Fusce fermentum purus eu convallis feugiat. Suspendisse bibendum, erat in rhoncus sollicitudin, nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut. Nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut.';
  return (
    <HomeContainer>
      <HomeWrapper>
        <InfoCard
          header={header}
          paragraph="Development, product, and design."
          image={Lightbulb}
          title={true}
        />
        <InfoCard header="Who am I" paragraph={paragraph} />
        <InfoCard header="Product" image={CoffeeHand} reverse={true} paragraph={paragraph} />
        <InfoCard header="Engineering" image={BrewingCoffee} paragraph={paragraph} />
        <InfoCard header="Design" image={Latte} reverse={true} paragraph={paragraph} />
        <Subtitle className="subtitle">How this site was made</Subtitle>
        <ImageWrapper>
          <ImageCard image={Notes} subtext="Notes" />
          <ImageCard image={Drawing} subtext="Drawing" />
          <ImageCard image={Laptop} subtext="Laptop" />
        </ImageWrapper>
        <Footer />
      </HomeWrapper>
    </HomeContainer>
  );
}
