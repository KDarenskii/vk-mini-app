import { ReactNode } from 'react';

import { routes } from 'shared/constants';

import {
  Icon28EducationOutline,
  Icon2818CircleOutline,
} from '@vkontakte/icons';

interface NavPanel {
  id: string;
  path: string;
  label: string;
  Icon: ReactNode;
}

const { age, fact } = routes;

export const navList: NavPanel[] = [
  {
    id: fact.name,
    label: 'Факты',
    path: fact.path,
    Icon: <Icon28EducationOutline />,
  },
  {
    id: age.name,
    label: 'Возраст',
    path: age.path,
    Icon: <Icon2818CircleOutline />,
  },
];
