import ProductCard from '../Products/ui/ProductCard';
import styles from './PopularProduct.module.scss';

interface SimilarProductProps {
  products: {
    img: string;
    companyName: string;
    productName: string;
    price: number;
    uuid: string;
  }[];
}
export default function PopularProduct({ products }: SimilarProductProps) {
  return (
    <div className={styles.popularBlock}>
      <h3>Популярно сегодня</h3>
      <div className={styles.popular}>
        {products.map(product => (
          <ProductCard
            key={product.uuid}
            redirectUrl={`/product/${product.uuid}`}
            img={product.img}
            price={product.price}
            productName={product.productName}
            companyName={product.companyName}
          />
        ))}
      </div>
    </div>
  );
}
