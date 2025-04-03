import ProductCard from '../Products/ui/ProductCard';
import styles from './SimilarProduct.module.scss';

interface SimilarProductProps {
  products: {
    img: string;
    companyName: string;
    productName: string;
    price: number;
    uuid: string;
  }[];
}

export function SimilarProduct({ products }: SimilarProductProps) {
  return (
    <div className={styles.similarBlock}>
      <h3>Похожие варианты</h3>
      <div className={styles.similar}>
        {products.map(product => (
          <ProductCard
            key={product.uuid}
            uuid={product.uuid}
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
