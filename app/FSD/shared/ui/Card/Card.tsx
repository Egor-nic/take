import classNames from 'classnames';
import styles from './Card.module.scss';

interface CardProps {
  img: string;
  title: string;
  text: string;
  imgSize?: string;
}

const iconSize: { [key: string]: string } = {
  xs: 'icon_xs',
  base: 'icon_base',
};
export default function Card({ img, title, text, imgSize = 'base' }: CardProps) {
  return (
    <>
      <img
        src={img}
        className={classNames(styles.icon, {
          [styles[iconSize[imgSize]]]: true,

        })}
      />
      <h3>{title}</h3>
      <p className={styles.text}>{text}</p>
    </>
  );
}
