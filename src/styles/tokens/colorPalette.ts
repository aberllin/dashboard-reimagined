export type ColorVariant = {
  base: string;
  text: string;
  light: string;
  dark: string;
  translucent: string;
};

export type ColorGroup<T> = {
  primary: T;
};

export type ColorPalette = ColorGroup<ColorVariant>;

export const lightColorPalette: ColorPalette = {
  primary: {
    light: '#213C80',
    base: '#FCF6EC',
    text: '#2E3A59',
    dark: '#010103',
    translucent: '#EAEFF5',
  },
};

export const darkColorPalette: ColorPalette = {
  primary: {
    light: '#4B6BA8',
    base: '#2E3A59',
    text: '#FCF6EC',
    dark: '#2A4374',
    translucent: '#3A599880',
  },
};
