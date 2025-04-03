import type { ContainerProps } from '../types';
import styles from './Container.module.scss';

export default function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
