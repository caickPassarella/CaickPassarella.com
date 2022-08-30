import {
  FooterContainer,
  FooterTitle,
  FooterContent,
  FooterSubContent,
  FooterDivider,
  FooterIconWrapper,
} from './FooterElements';

import { SocialIcon } from 'react-social-icons';

export function Footer() {
  return (
    <div id="contact">
      <FooterContainer>
        <FooterTitle>Caick Passarella</FooterTitle>
        <FooterContent>Product, engineering, and design.</FooterContent>
        <FooterSubContent>caickpassarella@gmail.com</FooterSubContent>
        <FooterSubContent>+55 11 97627-0471</FooterSubContent>
        <FooterDivider />
        <FooterIconWrapper>
          <SocialIcon
            url="https://www.linkedin.com/in/caick"
            bgColor="#BABABA"
            style={{ margin: 8 }}
          />
          <SocialIcon
            url="https://github.com/caickPassarella"
            bgColor="#BABABA"
            style={{ margin: 8 }}
          />
        </FooterIconWrapper>
      </FooterContainer>
    </div>
  );
}
