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

export function Homepage() {
  const header = 'Caick \nPassarella';

  const whoAmIParagraph =
    "23 years old currently living in Brazil (but open to relocation!). I've had interest in the technology industry since I've known myself. I am a very peaceful person, always willing to help others. Besides that, I love drinking coffee, play video-games, and enjoy my routine with my wife and 2 cats.\n\nI've built this site so that you can understand what my mind and life looks like by the eyes of design and technology.";

  const productParagraph =
    "The product is a huge part of a company, so we need to treat it as so. I've built with my team a SaaS web product from scratch, including brainstorming the idea, creating the whole project and assigned tasks on Jira, and designing and developing the product itself. For that, we used technologies such as Node.js, React.js, MongoDB, MySQL, Redis, and more.\n\nI know how to evaluate a product, and I know what a good and a bad product looks like.";

  const engineeringParagraph =
    'I am an Engineer with 5+ years of experience in the technology industry (B2B, B2C, SaaS, Cloud, telecom), as well as interest for as long as I can remember. Specialist at solving complex problems and making the team grow stronger. We are here to learn, teach, and build.\nI have real work experience with Python/Shell scripting, Node.js, React.js, MySQL, VOIP/SIP (SIP headers, INVITES, network packets, RTP, TLS, Wireshark, etc), Git (as well as GitHub and GitLab), and more.';

  const designParagraph =
    'UI and UX are everywhere now, and for good reason, they make our busy lives easier. I truly believe that we cannot create a great product without a good design, a good product we can though. I have experience with Figma, Adobe XD, Photoshop, Illustrator, and general UI/UX knowledge.\n\nIf you need someone to evalueate a design, create a feature that matches the most with your user, overhaul your product, or just have a creative mind, I might be the one.';

  const siteText =
    "What I wanted for this project is to show a combination of art, design, development, and me. This combination creates something that I call an envision of myself, where by just visualizing and operating the site, you would understand at least a little of who I am, how I think, and what I like.\nFor this to be possible, I've used multiple notes, brainstorming sessions, design pages, color changing, and coding nights.\n\nIt is a simple but important project.";

  const modalNotes =
    ' Notion was my best friend throughout this project. Honorable mentions would be Google Docs and a coffee drink.';

  const modalDesign =
    "I have a passion for design, and I specially like minimalist styles.\n\nFor this project I've used Figma for prototyping, styled Components, and inspirations from all over the internet.";

  const modalTech =
    "As this is a simple webpage, I've used React.js for front-end, Git with GitHub for version control, and Vercel (Next.js creator) for web hosting";

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalIcons, setModalIcons] = useState([]);

  function handleModal(type) {
    if (!type) return;

    switch (type) {
      case 'Notes':
        setModalType(type);
        setModalText(modalNotes);
        setModalIcons([GoogleDocs, Notion]);
        break;
      case 'Design':
        setModalType(type);
        setModalText(modalDesign);
        setModalIcons([Figma, Google]);
        break;
      case 'Technology':
        setModalType(type);
        setModalText(modalTech);
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
          header={header}
          paragraph="Product, engineering, and design."
          image={Lightbulb}
          title={true}
        />
        <InfoCard id="whoAmI" header="Who am I" paragraph={whoAmIParagraph} image={Men} />
        <InfoCard header="Product" image={CoffeeHand} reverse={true} paragraph={productParagraph} />
        <InfoCard header="Engineering" image={BrewingCoffee} paragraph={engineeringParagraph} />
        <InfoCard header="Design" image={Latte} reverse={true} paragraph={designParagraph} />
        <SectionWrapper id="made">
          <Subtitle className="subtitle">How this site was made</Subtitle>
          <Paragraph>{siteText}</Paragraph>
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
        </SectionWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
}
