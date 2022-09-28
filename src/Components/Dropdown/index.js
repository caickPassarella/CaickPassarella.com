import { useState } from 'react';
import { DropdownMenu, DropdownContent, DropdownLi, DropdownLinks } from './DropdownElements';
import { MenuItems } from './MenuItems';

export function Dropdown() {
  const [click, setClick] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleClick = () => setClick(!click);

  return (
    <>
      <DropdownMenu onClick={handleClick}>
        <DropdownLi>
          <DropdownLinks to="english">{language}</DropdownLinks>
        </DropdownLi>
        {MenuItems.map((item, index) => {
          return (
            <DropdownContent key={index} click={click}>
              <DropdownLinks to={item.path} onClick={handleClick}>
                {item.title}
              </DropdownLinks>
            </DropdownContent>
          );
        })}
      </DropdownMenu>
    </>
  );
}
