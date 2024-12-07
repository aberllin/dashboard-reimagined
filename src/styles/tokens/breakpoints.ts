export type SystemBreakpoint =
  | 'mobile'
  | 'tablet'
  | 'tabletLandscape'
  | 'desktop'
  | 'desktopBig';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  tabletLandscape: '1024px',
  desktop: '1280px',
  desktopBig: '1440px',
};

export default breakpoints;
