import { ElementType } from 'react';

export type RouteContent = { title: string; path: string; icon: ElementType };

export interface Route {
  category: string;
  content: RouteContent[];
}

export type MenuProps = Route[]

export interface MenuItemProps {
  content: RouteContent[];
  onClick: () => void;
}
