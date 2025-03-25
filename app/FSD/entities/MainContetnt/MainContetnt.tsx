import MainContetntImg from '@/FSD/shared/assets/images/main__illustration.svg';
import { Link } from 'react-router';
import styles from './MainContetnt.module.scss';

export default function MainContetnt() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={MainContetntImg} alt="main-img" />
        <h1 className={styles.title}>
          Бери напрокат
          <br className={styles.breackUnderline}></br>
          <span className={styles.underLine}>быстро</span>
        </h1>
        <p className={styles.text}>Найти и забронировать нужную вещь в Тольятти можно в одном месте, без огромных залогов и бумажной волокиты</p>
        <Link to="/#" className={styles.findLink}>Найти</Link>
      </div>
    </section>
  );
}
