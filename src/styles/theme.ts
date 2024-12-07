import { DefaultTheme } from 'styled-components';
import { darkColorPalette, lightColorPalette } from './tokens/colorPalette';
import type { SystemBreakpoint } from './tokens/breakpoints';
import breakpoints from './tokens/breakpoints';
import boxShadow from './tokens/boxShadow';
import sizes, { type SystemSize } from './tokens/sizes';

export type ThemeMode = 'dark' | 'light';

const getCurrentBreakpoint = (): SystemBreakpoint => {
  if (typeof window === 'undefined') return 'desktop';

  const breakpointEntries = Object.entries(breakpoints);
  for (const [breakpoint, width] of breakpointEntries) {
    if (window.matchMedia(`(max-width: ${width})`).matches) {
      return breakpoint as SystemBreakpoint;
    }
  }
  return 'desktop';
};

export const createTheme = (themeMode: ThemeMode): DefaultTheme => ({
  mode: themeMode,
  colors: themeMode === 'dark' ? darkColorPalette : lightColorPalette,
  boxShadow,
  breakpoints,
  space: (size: SystemSize): string => {
    const currentBreakpoint = getCurrentBreakpoint();
    return sizes[currentBreakpoint][size];
  },
});

export type Theme = typeof createTheme;
