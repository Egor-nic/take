import styles from './Products.module.scss';
import ProductCard from './ui/ProductCard';

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
          img={product.immages.avatar}
          redirectUrl={product.uuid}
        />
      ))}
    </div>
  );
}
