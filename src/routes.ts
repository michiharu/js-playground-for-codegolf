import CircleIcon from '@mui/icons-material/RadioButtonUnchecked';
import DigitalClockIcon from '@mui/icons-material/Looks3';
import * as CircleCode from './codes/circle-code';
import * as DigitalClock from './codes/digital-clock-code';
import React from 'react';

export type PageName = '/円を描こう' | '/デジタル時計を描こう';

export type Page = {
  page: PageName;
  label: string;
  icon: React.ComponentType;
  init: string;
};

export const pages: Page[] = [
  {
    page: '/円を描こう',
    label: '円を描こう',
    icon: CircleIcon,
    init: CircleCode.initial,
  },
  {
    page: '/デジタル時計を描こう',
    label: 'デジタル時計',
    icon: DigitalClockIcon,
    init: DigitalClock.initial,
  },
];
