import productImg2 from '@/FSD/shared/assets/images/productCard1.jpg';
import productImg1 from '@/FSD/shared/assets/images/productImg1.png';
import productImg3 from '@/FSD/shared/assets/images/productImg3.jpg';

import { useParams } from 'react-router';
import PopularProduct from '~/FSD/entities/PopularProduct/PopularProduct';
import ProductInfo from '~/FSD/entities/ProductInfo/ProductInfo';
import { SimilarProduct } from '~/FSD/entities/SimilarProduct/SimilarProduct';
import { products, similarProduct } from '~/FSD/shared/lib/constants';
import Line from '~/FSD/shared/ui/Line/Line';
import Container from '~/FSD/shared/ui/wrappers/Container/Container';

const description = `Велосипед подойдет как для взрослых, так и для подростков. 24 скорости, тормоза в отличном состоянии, мягкий. Велосипед подойдет как для взрослых, так и для подростков. 24 скорости, тормоза в отличном состоянии, мягкий. Велосипед подойдет как для взрослых, так и для подростков. 24 скорости, тормоза в отличном состоянии, мягкий.`;
const characteristics = `Две скорости и еще характиристики`;
export default function Product() {
  const { uuid } = useParams();

  const product = products.find(el => el.uuid === uuid);

  const productItem = product
    ? {
        uuid: product.uuid,
        title: product.productName,
        images: [productImg1, productImg2, productImg3],
        price: product.price,
        description,
        characteristics,
      }
    : undefined;

  return (

    <>
      <Line />
      <Container>
        {productItem && <ProductInfo product={productItem} />}
        <SimilarProduct products={similarProduct} />
        <PopularProduct products={similarProduct} />
      </Container>

    </>
  );
}
