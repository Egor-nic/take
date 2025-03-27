import styles from './Products.module.scss';
import ProductCard from './ui/ProductCard';

interface ProductsList {
  id: number;
  price: number;
  companyName: string;
  productName: string;
  img: string;
}

interface ProductsProps {
  products: ProductsList[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className={styles.wrapper}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          price={product.price}
          companyName={product.companyName}
          productName={product.productName}
          img={product.img}
          id={product.id}
        />
      ))}
    </div>
  );
}
