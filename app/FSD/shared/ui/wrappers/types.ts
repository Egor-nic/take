import type { JSX } from 'react';

export interface ContainerProps {
  children: JSX.Element | JSX.Element[];
};

export interface RowCardWrapperProps extends ContainerProps {
  repeatColumn: number;
}
