import type React from 'react';
import type { SystemSize } from 'src/styles/tokens/sizes';
import arrayToCss from 'src/utils/arrayToCss';
import styled, { css } from 'styled-components';

type Props = {
  className?: string;
  justification?: 'flex-start' | 'flex-end' | 'space-between' | 'center';
  gap?: SystemSize;
  align?: 'flex-start' | 'flex-end' | 'center';
  direction?: 'column' | 'row';
  margin?: Array<SystemSize | null>;
  padding?: Array<SystemSize | null>;
};

const JustificationContainer: React.FCC<Props> = ({
  justification = 'flex-start',
  gap,
  align = 'flex-start',
  direction = 'row',
  className,
  margin = [null],
  padding = [null],
  children,
}) => (
  <Container
    className={className}
    $justification={justification}
    $gap={gap}
    $align={align}
    $direction={direction}
    $margin={margin}
    $padding={padding}
  >
    {children}
  </Container>
);

type StyledProps = {
  $justification: Props['justification'];
  $direction: Props['direction'];
  $align: Props['align'];
  $gap: Props['gap'];
  $margin: Props['margin'];
  $padding: Props['padding'];
};

const Container = styled.div<StyledProps>(
  ({
    theme,
    $align = 'flex-start',
    $direction = 'row',
    $gap,
    $justification = 'flex-start',
    $margin = [null],
    $padding = [null],
  }) => css`
    display: flex;
    flex-direction: ${$direction};
    justify-content: ${$justification};
    align-items: ${$align};

    ${$gap &&
    css`
      gap: ${theme.space($gap)};
    `}
    margin: ${arrayToCss($margin, theme)};
    padding: ${arrayToCss($padding, theme)};
  `,
);

export default JustificationContainer;
