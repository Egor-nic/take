import reservationImg from '@/FSD/shared/assets/images/reservation-img.svg';

import { Link } from 'react-router';
import styles from './ReservationSection.module.scss';

export default function ReservationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={reservationImg} alt="" />

        <div className={styles.info}>
          <h2 className={styles.title}>
            Это все можно напрокат взять?
            <br></br>
            {' '}
            А я и не знал!
          </h2>

          <p className={styles.description}>
            Компаний, у которых можно арендовать необходимые нам вещи огромное количество, но мы о них даже не знаем. Почувствуйте, как можно просто решать свои проблемы или разнообразить отдых с помощью проката рядом с вами.
          </p>
          <Link to="/#" className={styles.link}>Забронировать</Link>
        </div>
      </div>
    </section>
  );
}
