import type { JSX } from 'react';

export interface ContainerProps {
  children: JSX.Element | JSX.Element[] | undefined;
};

export interface RowCardWrapperProps extends ContainerProps {
  repeatColumn: number;
}
