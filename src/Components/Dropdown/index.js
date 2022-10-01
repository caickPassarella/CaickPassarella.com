import { useState } from 'react';
import {
  DropdownMenu,
  DropdownContent,
  DropdownLinks,
  NavDropDown,
  DropdownLi,
} from './DropdownElements';
import { MenuItems } from './MenuItems';

export function Dropdown() {
  const [click, setClick] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleClick = () => setClick(!click);

  return (
    <NavDropDown>
      <DropdownContent onClick={handleClick}>
        <DropdownLinks to={language}>{language}</DropdownLinks>
      </DropdownContent>
      <DropdownMenu click={click}>
        {MenuItems.map((item, index) => {
          return (
            <DropdownLi key={index} click={click} onClick={handleClick}>
              <DropdownLinks to={item.path}>{item.title}</DropdownLinks>
            </DropdownLi>
          );
        })}
      </DropdownMenu>
    </NavDropDown>
  );
}
