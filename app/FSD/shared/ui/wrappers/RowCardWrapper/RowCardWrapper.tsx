import type { RowCardWrapperProps } from '../types';
import './RowCardWrapper.scss';

export function RowCardWrapper({ children, repeatColumn }: RowCardWrapperProps) {
  return <div className="flex-card-wrapper" style={{ gridTemplateColumns: `repeat(${repeatColumn}, 1fr);` }}>{children}</div>;
}
