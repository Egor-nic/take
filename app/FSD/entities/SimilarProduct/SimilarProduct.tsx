import ProductCard from '../Products/ui/ProductCard';
import styles from './SimilarProduct.module.scss';

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

export function SimilarProduct({ products }: SimilarProductProps) {
  return (
    <div className={styles.similarBlock}>
      <h3>Похожие варианты</h3>
      <div className={styles.similar}>
        {products.map(product => (
          <ProductCard
            redirectUrl={`/product/${product.uuid}`}
            key={product.uuid}
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
