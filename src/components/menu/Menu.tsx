import {useCallback, useState} from 'react';

import SortIcon from '@mui/icons-material/Sort';
import {Button, List, ListSubheader } from '@mui/joy'

import MenuItems from './MenuItems';
import { Container } from './styles';

import { MenuProps, Route } from '@components/menu/types.ts';

const Menu = ({ items, children }: MenuProps) => {
  const [active, setActive] = useState(false);
  const toggleMenu = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);

  return (
    <Container>
      <div>
        <div className="menu-icon" onClick={toggleMenu}>
          <SortIcon />
        </div>
        <List className={`menu-list ${active ? 'active' : ''}`}>
          {items.map((route: Route, index: number) => (
            <div className="menu-block" key={index}>
              <ListSubheader>{route.category}</ListSubheader>
              <MenuItems content={route.content} onClick={toggleMenu} />
            </div>
          ))}
        </List>
      </div>
      <div className={active ? 'active' : ''}>
        <div className="button-wrapper">
          {children}
        </div>
      </div>
    </Container>
  );
};

export default Menu;
