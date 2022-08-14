import { useState } from 'react';
import {
  Lightbulb,
  CoffeeHand,
  BrewingCoffee,
  Latte,
  Notes,
  Drawing,
  Laptop,
  Men,
} from '../../images';

import {
  Figma,
  Github,
  GoogleDocs,
  Jira,
  LinkedIn,
  Linux,
  Notion,
  Google,
  ReactLogo,
  Javascript,
} from '../../images';
import { HomeContainer, HomeWrapper, ImageWrapper, Subtitle } from './HomepageElements.js';
import { InfoCard } from '../InfoCard';
import { ImageCard } from '../ImageCard';
import { Modal } from '../Modal';

export function Homepage() {
  const header = 'Caick \nPassarella';
  const paragraph =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis posuere libero, at laoreet tortor cursus posuere. Fusce fermentum purus eu convallis feugiat. Suspendisse bibendum, erat in rhoncus sollicitudin, nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut. Nunc magna tincidunt nibh, vitae euismod felis est sit amet erat. Duis sed ex porta, blandit mi ut.';

  const modalNotesText =
    'Before starting a project, to make sure it will go in the right direction, we need to write, document, and prioritize. And that’s what I did for this website.';

  const modalDesignText =
    'Before starting a project, to make sure it will go in the right direction, we need to write, document, and prioritize. And that’s what I did for this website.';

  const modalTechText =
    'Before starting a project, to make sure it will go in the right direction, we need to write, document, and prioritize. And that’s what I did for this website.';

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalIcons, setModalIcons] = useState([]);

  function handleModal(type) {
    if (!type) return;

    switch (type) {
      case 'Notes':
        setModalType(type);
        setModalText(modalNotesText);
        setModalIcons([GoogleDocs, Notion]);
        break;
      case 'Design':
        setModalType(type);
        setModalText(modalDesignText);
        setModalIcons([Figma, Google]);
        break;
      case 'Technology':
        setModalType(type);
        setModalText(modalTechText);
        setModalIcons([Github, ReactLogo, Javascript]);
        break;
    }
    setOpenModal(!openModal);
  }

  return (
    <HomeContainer>
      <HomeWrapper>
        <InfoCard
          header={header}
          paragraph="Development, product, and design."
          image={Lightbulb}
          title={true}
        />
        <InfoCard header="Who am I" paragraph={paragraph} image={Men} />
        <InfoCard header="Product" image={CoffeeHand} reverse={true} paragraph={paragraph} />
        <InfoCard header="Engineering" image={BrewingCoffee} paragraph={paragraph} />
        <InfoCard header="Design" image={Latte} reverse={true} paragraph={paragraph} />
        <Subtitle className="subtitle">How this site was made</Subtitle>
        <ImageWrapper>
          <ImageCard
            image={Notes}
            subtext="Notes"
            onClick={() => {
              handleModal('Notes');
            }}
          />
          <ImageCard
            image={Drawing}
            subtext="Design"
            onClick={() => {
              handleModal('Design');
            }}
          />
          <ImageCard
            image={Laptop}
            subtext="Technology"
            onClick={() => {
              handleModal('Technology');
            }}
          />
          {openModal && (
            <Modal
              type={modalType}
              text={modalText}
              icons={modalIcons}
              setOpenModal={setOpenModal}
            />
          )}
        </ImageWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
}
