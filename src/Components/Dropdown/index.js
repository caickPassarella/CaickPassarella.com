import { useState } from 'react';
import {
  DropdownMenu,
  DropdownContent,
  DropdownLinks,
  NavDropDown,
  DropdownLi,
} from './DropdownElements';
import { MenuItems } from './MenuItems';
import i18n from '../../i18n';

export function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <NavDropDown>
      <DropdownContent onClick={handleClick}>
        <DropdownLinks to={i18n.language}>{i18n.language}</DropdownLinks>
      </DropdownContent>
      <DropdownMenu click={click}>
        {MenuItems.map((item, index) => {
          if (item.title !== i18n.language) {
            return (
              <DropdownLi
                key={index}
                onClick={() => {
                  handleClick();
                  i18n.changeLanguage(item.title);
                }}
              >
                <DropdownLinks to={item.path}>{item.title}</DropdownLinks>
              </DropdownLi>
            );
          }
        })}
      </DropdownMenu>
    </NavDropDown>
  );
}
