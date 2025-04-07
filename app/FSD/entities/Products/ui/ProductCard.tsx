import classNames from 'classnames';
import { Link } from 'react-router';
import styles from './ProductCard.module.scss';

interface ProductsCardProps {
  img: string;
  companyName: string;
  productName: string;
  price: number;
  cardSize?: string;
  redirectUrl: string;
}

const size: { [key: string]: string } = {
  xs: 'card_xs',
  base: 'card_base',
};
export default function ProductCard({ img, companyName, productName, price, cardSize = 'base', redirectUrl }: ProductsCardProps) {
  return (
    <Link className={styles.link} to={redirectUrl}>
      <div className={styles.cardWrapper}>

        <img className={styles.img} src={img} alt="" />
        <div className={classNames(styles.card, {
          [styles[size[cardSize]]]: true,
        })}
        >
          <span className={styles.company}>{companyName}</span>
          <span className={styles.product}>{productName}</span>
          <span className={styles.price}>{`${price}р/руб`}</span>
        </div>
      </div>
    </Link>
  );
}
