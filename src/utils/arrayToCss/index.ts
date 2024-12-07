import { isNil } from 'ramda';
import type { SystemSize } from 'src/styles/tokens/sizes';
import type { DefaultTheme } from 'styled-components/dist/types';

/**
 * Transforms given values into a string format that css expects
 * @param {Array<SystemSize | null>} array
 * keywords: css array, margin, padding
 */
const arrayToCss = (
  array: Array<SystemSize | null>,
  theme: DefaultTheme,
): string =>
  array.reduce(
    (acc, item) => acc + ` ${!isNil(item) ? theme.space(item) : '0'}`,
    '',
  );

export default arrayToCss;
