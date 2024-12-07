import type React from 'react';
import type { SystemSize } from 'src/styles/tokens/sizes';
import arrayToCss from 'src/utils/arrayToCss';
import styled, { css } from 'styled-components';

type Props = {
  size: SystemSize;
  margin?: Array<SystemSize | null>;
  as?: string;
};

type StyledProps = {
  $size: Props['size'];
  $margin: Props['margin'];
};

export const Typography: React.FCC<Props> = ({
  children,
  as = 'span',
  size,
  margin,
}) => (
  <StyledTypography as={as} $size={size} $margin={margin}>
    {children}
  </StyledTypography>
);

const StyledTypography = styled.span<StyledProps>(
  ({ theme, $size, $margin }) => css`
    font-size: ${$size};
    margin: ${$margin ? arrayToCss($margin, theme) : '0 0 2px 0'};
  `,
);
