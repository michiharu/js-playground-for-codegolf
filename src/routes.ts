import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleIcon from '@mui/icons-material/RadioButtonUnchecked';
import DigitalClockIcon from '@mui/icons-material/Looks3';
import * as Hello from './codes/hellow-world';
import * as Circle from './codes/circle';
import * as DigitalClock from './codes/digital-clock';
import React from 'react';

export type PageName = '/Hello-World' | '/円を描こう' | '/デジタル時計を描こう';

export type Page = {
  page: PageName;
  label: string;
  icon: React.ComponentType;
  init: string;
};

export const pages: Page[] = [
  {
    page: '/Hello-World',
    label: 'Hello World',
    icon: CheckCircleOutlineIcon,
    init: Hello.initial,
  },
  {
    page: '/円を描こう',
    label: '円を描こう',
    icon: CircleIcon,
    init: Circle.initial,
  },
  {
    page: '/デジタル時計を描こう',
    label: 'デジタル時計(途中)',
    icon: DigitalClockIcon,
    init: DigitalClock.initial,
  },
];
