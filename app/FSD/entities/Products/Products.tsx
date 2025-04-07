import styles from './Products.module.scss';
import ProductCard from './ui/ProductCard';

interface ProductsList {
  uuid: string;
  price: number;
  companyName: string;
  productName: string;
  img: string;
}

interface ProductsProps {
  products: ProductsList[];
  cardSize?: string;

}

export default function Products({ products, cardSize }: ProductsProps) {
  return (
    <div className={styles.wrapper}>
      {products.map(product => (
        <ProductCard
          cardSize={cardSize}
          key={product.uuid}
          price={product.price}
          companyName={product.companyName}
          productName={product.productName}
          img={product.img}
          redirectUrl={product.uuid}
        />
      ))}
    </div>
  );
}
