import type { SystemBreakpoint } from './breakpoints';

export type SizeMap = {
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  base: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
};

export type SystemSize = keyof SizeMap;
export type SystemSizeMap = {
  [key in SystemBreakpoint]: SizeMap;
};

const sizes: SystemSizeMap = {
  mobile: {
    xxxs: '2px',
    xxs: '6px',
    xs: '8px',
    s: '10px',
    base: '12px',
    m: '14px',
    l: '16px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px',
    xxxxl: '56px',
  },
  tablet: {
    xxxs: '2px',
    xxs: '8px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px',
    xxxxl: '56px',
  },
  tabletLandscape: {
    xxxs: '2px',
    xxs: '8px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px',
    xxxxl: '56px',
  },
  desktop: {
    xxxs: '2px',
    xxs: '8px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px',
    xxxxl: '56px',
  },
  desktopBig: {
    xxxs: '2px',
    xxs: '8px',
    xs: '10px',
    s: '12px',
    base: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px',
    xxxxl: '56px',
  },
};

export default sizes;
