import { routes } from 'shared/constants';

interface NavPanel {
  id: string;
  path: string;
  label: string;
}

const { age, fact } = routes;

export const panelsList: NavPanel[] = [
  { id: fact.name, label: 'Узнать факт', path: fact.path },
  { id: age.name, label: 'Определить возраст', path: age.path },
];
