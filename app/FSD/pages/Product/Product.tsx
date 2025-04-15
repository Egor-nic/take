import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PopularProduct from '~/FSD/entities/PopularProduct/PopularProduct';
import ProductInfo from '~/FSD/entities/ProductInfo/ProductInfo';
import { SimilarProduct } from '~/FSD/entities/SimilarProduct/SimilarProduct';
import { popularProduct, products, similarProduct } from '~/FSD/shared/lib/constants';
import Line from '~/FSD/shared/ui/Line/Line';
import Container from '~/FSD/shared/ui/wrappers/Container/Container';

export default function Product() {
  const { uuid } = useParams();

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

  const [data, setData] = useState<ProductsList | undefined>(undefined);

  useEffect(() => {
    const product = products.find(el => el.uuid === uuid);
    setData(product);
  }, [uuid]);

  return (
    <>
      <Line />
      <Container>
        <ProductInfo product={data} />
        <SimilarProduct products={similarProduct} />
        <PopularProduct products={popularProduct} />
      </Container>

    </>
  );
}
