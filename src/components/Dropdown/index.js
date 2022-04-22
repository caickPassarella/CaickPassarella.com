import React, { useState } from 'react';
import { DropdownContent, DropdownLi } from './DropdownElements';
import { NavMenu, NavLinks } from '../Navbar/NavbarElements';
import { MenuItems } from './MenuItems';

export function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <NavMenu onClick={handleClick}>
        <DropdownLi>
          <NavLinks to="english">English</NavLinks>
          <DropdownContent>
            {MenuItems.map((item, index) => {
              return (
                <NavLinks key={index} to={item.path} onClick={() => setClick(false)}>
                  {item.title}
                </NavLinks>
              );
            })}
          </DropdownContent>
        </DropdownLi>
      </NavMenu>
    </>
  );
}
