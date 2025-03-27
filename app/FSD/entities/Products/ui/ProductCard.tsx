/* eslint-disable no-alert */
import styles from './ProductCard.module.scss';

interface ProductsCardProps {
  img: string;
  companyName: string;
  productName: string;
  price: number;
  id: number;
}
export default function ProductCard({ img, companyName, productName, price, id }: ProductsCardProps) {
  return (
    <div className={styles.card} onClick={() => alert(id)}>
      <img className={styles.img} src={img} alt="" />
      <span className={styles.company}>{companyName}</span>
      <span className={styles.product}>{productName}</span>
      <span className={styles.price}>{`${price}р/руб`}</span>
    </div>
  );
}
