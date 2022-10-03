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
  Figma,
  Github,
  GoogleDocs,
  Notion,
  Google,
  ReactLogo,
  Javascript,
} from '../../images';

import {
  HomeContainer,
  HomeWrapper,
  ImageWrapper,
  SectionWrapper,
  Subtitle,
  Paragraph,
} from './HomepageElements.js';

import { ImageCard } from '../ImageCard';
import { InfoCard } from '../InfoCard';
import { Modal } from '../Modal';
import { useTranslation } from 'react-i18next';

export function Homepage() {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalIcons, setModalIcons] = useState([]);

  const { t } = useTranslation();

  function handleModal(type) {
    if (!type) return;

    switch (type) {
      case 'Notes':
        setModalType(t('homepage.notesModal.title'));
        setModalText(t('homepage.notesModal.text'));
        setModalIcons([GoogleDocs, Notion]);
        break;
      case 'Design':
        setModalType(t('homepage.designModal.title'));
        setModalText(t('homepage.designModal.text'));
        setModalIcons([Figma, Google]);
        break;
      case 'Technology':
        setModalType(t('homepage.techModal.title'));
        setModalText(t('homepage.techModal.text'));
        setModalIcons([Github, ReactLogo, Javascript]);
        break;
    }
    setOpenModal(!openModal);
  }

  return (
    <HomeContainer>
      <HomeWrapper>
        <InfoCard
          id="home"
          header={t('homepage.me.title')}
          paragraph={t('homepage.me.subtitle')}
          image={Lightbulb}
          title={true}
        />
        <InfoCard
          id="whoAmI"
          header={t('homepage.me.header')}
          paragraph={t('homepage.me.paragraph')}
          image={Men}
        />
        <InfoCard
          header={t('homepage.product.header')}
          image={CoffeeHand}
          reverse={true}
          paragraph={t('homepage.product.paragraph')}
        />
        <InfoCard
          header={t('homepage.engineering.header')}
          image={BrewingCoffee}
          paragraph={t('homepage.engineering.paragraph')}
        />
        <InfoCard
          header={t('homepage.design.header')}
          image={Latte}
          reverse={true}
          paragraph={t('homepage.design.paragraph')}
        />
        <SectionWrapper id="made">
          <Subtitle className="subtitle">{t('homepage.made.title')}</Subtitle>
          <Paragraph>{t('homepage.made.subtitle')}</Paragraph>
          <ImageWrapper>
            <ImageCard
              image={Notes}
              subtext={t('homepage.notesModal.title')}
              onClick={() => {
                handleModal('Notes');
              }}
            />
            <ImageCard
              image={Drawing}
              subtext={t('homepage.designModal.title')}
              onClick={() => {
                handleModal('Design');
              }}
            />
            <ImageCard
              image={Laptop}
              subtext={t('homepage.techModal.title')}
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
        </SectionWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
}
