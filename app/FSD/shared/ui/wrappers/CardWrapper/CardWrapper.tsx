import type { ContainerProps } from '../types';
import styles from './CardWrapper.module.scss';

export default function CardWrapper({ children }: ContainerProps) {
  return <div className={styles.cardWrapper}>{children}</div>;
}
