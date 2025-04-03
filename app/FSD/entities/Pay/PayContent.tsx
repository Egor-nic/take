import productImg3 from '@/FSD/shared/assets/images/productImg3.jpg';
import styles from './PayContent.module.scss';
import PayHeader from './ui/Header/PayHeader';

export default function PayContent() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.breadCrumbs}>Будут хлебные крошки</div>
        <h1>Подтверждение и оплата</h1>
      </div>
      <div className={styles.content}>


        <div className={styles.wrapper}>
          <div className={styles.reservationInfo}>
            <h3>Ваша бронь</h3>

            <div className={styles.date}>
              <div>
                <div>Даты</div>
                <span>1 янв 2020г. - 8 янв 2022 г.</span>
              </div>

              <button type="button">Изменить даты</button>
            </div>

            <div>
              <h3>Количество товара</h3>
              <span>1 шт</span>
            </div>
          </div>

          <div className={styles.pruduct}>
            <div className={styles.info}>
              <img src={productImg3} alt="img" />
              <span>Велосипед походный: Stark</span>
            </div>


            <div className={styles.taxi}>
              <div className={styles.pledge}>
                <span>Сумма залога</span>
                <span>Нет</span>
              </div>

              <div className={styles.takeTaxi}>
                <span className={styles.underLine}>Сбор за услуги Take</span>
                <span>20р</span>
              </div>

            </div>

            <div className={styles.result}>
              <span>Итого</span>
              <span>750р</span>
            </div>
          </div>
        </div>

      </div >
    </>

  );
}
