import styles from './Products.module.scss';
import ProductCard from './ui/ProductCard';
import productCard1 from '@/FSD/shared/assets/images/productCard1.jpg';

export default function Products() {
  return (
    <div className={styles.wrapper}>
      <ProductCard
        price={200}
        companyName='Sharing Company'
        productName='ВЕЛОСИПЕД SCOTT METRIX 30 EQ'
        img={productCard1}
      />

      <ProductCard
        price={200}
        companyName='Sharing Company'
        productName='ВЕЛОСИПЕД SCOTT METRIX 30 EQ'
        img={productCard1}
      />

      <ProductCard
        price={200}
        companyName='Sharing Company'
        productName='ВЕЛОСИПЕД SCOTT METRIX 30 EQ'
        img={productCard1}
      />

      <ProductCard
        price={200}
        companyName='Sharing Company'
        productName='ВЕЛОСИПЕД SCOTT METRIX 30 EQ'
        img={productCard1}
      />

      <ProductCard
        price={200}
        companyName='Sharing Company'
        productName='ВЕЛОСИПЕД SCOTT METRIX 30 EQ'
        img={productCard1}
      />

      <ProductCard
        price={200}
        companyName='Sharing Company'
        productName='ВЕЛОСИПЕД SCOTT METRIX 30 EQ'
        img={productCard1}
      />
    </div>
  )
}