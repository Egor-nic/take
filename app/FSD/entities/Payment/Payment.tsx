import { Link } from 'react-router';
import styles from './Payment.module.scss';

export default function Payment() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Оплатить с помощью</p>

      <div className={styles.paymentWay}>
        <p className={styles.chooseWay}>Выберите реквизит</p>

        <div className={styles.select}>VISA****9839</div>
      </div>

      <div className={styles.policyTerms}>
        <input id="policy" type="checkbox" />
        <label htmlFor="policy">
          Я принимаю условия следующих политик:
          <Link to="#" className={styles.link}>
            Раскрытие информации о безопасности, Правила отмены, Социальное дистанцирование и другие рекомендации Take во время пандемии и Правила компенсации арендатору.
          </Link>
          Я также соглашаюсь оплатить полную сумму включая сборы за услуги.
        </label>
      </div>

      <button type="button" className={styles.btn}>Забронировать</button>
    </div>
  );
}
