import React, { useState } from 'react';
import { DropdownMenu, DropdownContent, DropdownLi, DropdownLinks } from './DropdownElements';
import { MenuItems } from './MenuItems';

export function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <DropdownMenu onClick={handleClick}>
        <DropdownLi>
          <DropdownLinks to="english">English</DropdownLinks>
          <DropdownContent>
            {MenuItems.map((item, index) => {
              return (
                <DropdownLinks key={index} to={item.path} onClick={handleClick}>
                  {item.title}
                </DropdownLinks>
              );
            })}
          </DropdownContent>
        </DropdownLi>
      </DropdownMenu>
    </>
  );
}
