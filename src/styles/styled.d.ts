import 'styled-components';
import type { ColorPalette } from './tokens/colorPalette';
import type { ThemeMode } from './theme';
import type { SystemBreakpoint } from './tokens/breakpoints';
import type { SystemSize } from './tokens/sizes';
import type { BoxShadow } from './tokens/boxShadow';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode;
    colors: ColorPalette;
    boxShadow: BoxShadow;
    breakpoints: Record<SystemBreakpoint, string>;
    space: (size: SystemSize) => string;
  }
}
