import ProductCard from '../Products/ui/ProductCard';
import styles from './PopularProduct.module.scss';

interface Images {
  avatar: string;
  other: string[];
}

// Интерфейс для объекта location
interface Location {
  uuid: string;
  title: string;
  name: string;
}

// Интерфейс для объекта dates
interface Dates {
  BookedDates: Date[];
}

// Интерфейс для элемента массива
interface ProductsList {
  uuid: string;
  price: number;
  companyName: string;
  productName: string;
  immages: Images;
  location: Location;
  dates: Dates;
  description: string;
  characteristics: string;
}
interface SimilarProductProps {
  products: ProductsList[];
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
            img={product.immages.avatar}
            price={product.price}
            productName={product.productName}
            companyName={product.companyName}
          />
        ))}
      </div>
    </div>
  );
}
