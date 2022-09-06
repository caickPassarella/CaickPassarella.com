import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { Homepage } from '../Components/Homepage';
import { Footer } from '../Components/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{ border: '1px solid #424242', margin: '11px' }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}
