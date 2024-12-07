import GitHubAccountSearch from 'src/components/apps/GitHubAccountSearch';
import todoIcon from '../images/Group 24.png';
import ghIcon from '../images/coolicon.png';
import type { JSX } from 'react';
import Timer from 'src/components/apps/Timer';
import ToDoApp from 'src/components/apps/TodoApp';

export type MapType = {
  title: string;
  image?: string;
  app?: (
    isCollapsed: boolean,
    onClose: (id: string) => void,
    collapseWindow: (id: string) => void,
    id: string,
    coordinates: { left: number; top: number },
  ) => JSX.Element;
};

export type AppOption = {
  title: string;
  component?: JSX.Element;
  callback?: () => void;
};

export const appDataMap: { [id: string]: MapType } = {
  '1': {
    title: 'MacOS-like Desktop',
  },
  '2': {
    title: 'Calculator',
  },
  '3': {
    title: 'Calculator',
  },

  '4': {
    title: 'Search GitHub Account',
    image: ghIcon,
    app: (isCollapsed, onClose, collapseWindow, id, coordinates) => (
      <GitHubAccountSearch
        isCollapsed={isCollapsed}
        onCollapse={collapseWindow}
        onClose={onClose}
        id={id}
        coordinates={coordinates}
      />
    ),
  },
  '5': {
    title: 'To Do List',
    image: todoIcon,
    app: (isCollapsed, onClose, collapseWindow, id, coordinates) => (
      <ToDoApp
        isCollapsed={isCollapsed}
        onCollapse={collapseWindow}
        onClose={onClose}
        id={id}
        coordinates={coordinates}
      />
    ),
  },
  '6': {
    title: 'Timer',
    app: (isCollapsed, onClose, collapseWindow, id, coordinates) => (
      <Timer
        isCollapsed={isCollapsed}
        onCollapse={collapseWindow}
        onClose={onClose}
        id={id}
        coordinates={coordinates}
      />
    ),
  },
  '7': {
    title: 'Telegram',
  },
};

export const appDataIds = ['1', '2', '3', '4', '5', '6', '7'];
