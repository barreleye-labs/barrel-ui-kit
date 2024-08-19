import { ElementType, ReactNode } from 'react';

export type RouteContent = { title: string; path: string; icon: ElementType };

export interface Route {
  category: string;
  content: RouteContent[];
}

export interface MenuProps {
  items: Route[];
  children?: ReactNode;
}

export interface MenuItemProps {
  content: RouteContent[];
  onClick: () => void;
}
