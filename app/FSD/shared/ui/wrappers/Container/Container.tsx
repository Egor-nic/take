import type { ContainerProps } from '../types';
import './Container.scss';

export default function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
