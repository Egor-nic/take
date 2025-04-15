import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router';
import Carousel from '~/FSD/shared/ui/Carusel/Carusel';
import Modal from '~/FSD/shared/ui/Modal/Modal';
import styles from './ProductInfo.module.scss';

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

interface ProductInfoProps {
  product: ProductsList | undefined;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [activeTab, setActiveTab] = useState({ description: true, characteristics: false });
  // const [openModalDate, setOpenModalDate] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div style={{ height: '88px', display: 'flex', alignItems: 'center' }}>
          <p> Будут хлебные крошки</p>
        </div>
        <h2>{product?.productName}</h2>
        <Carousel
          slidesPerView={1}
        >
          {product?.immages.other.map((img, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <img className={styles.productImg} key={index} src={img} alt="img" />

          ))}
        </Carousel>
        <div className={styles.tabWrapper}>
          <div className={styles.tabs}>
            <button
              className={classNames(styles.tab, {
                [styles.active]: activeTab.description,
              })}
              onClick={() => setActiveTab({ description: true, characteristics: false })}
              type="button"
            >
              Описание товара
            </button>

            <button
              className={classNames(styles.tab, {
                [styles.active]: activeTab.characteristics,
              })}
              onClick={() => setActiveTab({ description: false, characteristics: true })}
              type="button"
            >
              Характеристики
            </button>
          </div>
          <p>{activeTab.characteristics ? product?.characteristics : product?.description}</p>
        </div>
      </div>

      <div className={styles.rent}>
        <h3>{`${product?.price}₽ / 1 день аренды`}</h3>
        <div className={styles.dates}>
          <div className={styles.start}>
            <div className={styles.dateTitle}>начало</div>
            <div className={styles.dateDescription}>Укажите дату</div>
          </div>
          <div className={styles.end}>
            <div className={styles.dateTitle}>конец</div>
            <div className={styles.dateDescription}>Укажите дату</div>
          </div>
        </div>

        <Link to={`/pay/${product?.uuid}`} className={styles.getProduct}>
          Запросить аренду
        </Link>
        {/* <button className={styles.getProduct} type="button">Запросить аренду</button> */}

        <div className={styles.taxi}>
          <div className={styles.pledge}>
            <span>Сумма залога</span>
            <span>200 ₽</span>
          </div>

          <div className={styles.takeTaxi}>
            <span className={styles.underLine}>Сбор за услуги Take</span>
            <span>3%</span>
          </div>

        </div>
      </div>
      {/* <Modal
              open={openModalDate}
              setOpen={setOpenModalDate}
              modalContent={<Ca}
            /> */}
    </div>
  );
}
