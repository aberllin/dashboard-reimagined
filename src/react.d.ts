/* eslint-disable no-undef */
import * as React from '@types/react';

declare module 'react' {
  export type FCC<P = {}> = FunctionComponentWithChildren<P>;

  export function forwardRef<T, P = {}>(
    render: ForwardRefRenderFunction<T, P & { dataTestId?: string }>,
  ): ForwardRefExoticComponent<
    PropsWithoutRef<P & { dataTestId?: string }> & RefAttributes<T>
  >;

  export type FunctionComponentWithChildren<P = { dataTestId?: string }> =
    FunctionComponent<
      P extends { children: any; dataTestId?: string }
        ? P & { dataTestId?: string; children?: React.ReactNode | undefined }
        : P & { children?: React.ReactNode | undefined; dataTestId?: string }
    >;
}
