import type { ContainerProps } from '../types';
import './CardWrapper.scss';

export default function CardWrapper({ children }: ContainerProps) {
  return <div className="card-wrapper">{children}</div>;
}
