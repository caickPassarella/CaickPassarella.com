import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Homepage } from '../components/Homepage';
import { Footer } from '../components/Footer';

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
