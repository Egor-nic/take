import wakeboardingImg1 from '@/FSD/shared/assets/images/wakeboardingImg1.svg';
import wakeboardingImg2 from '@/FSD/shared/assets/images/wakeboardingImg2.svg';
import wakeboardingImg3 from '@/FSD/shared/assets/images/wakeboardingImg3.svg';
import wakeboardingImg4 from '@/FSD/shared/assets/images/wakeboardingImg4.svg';
import wakeboardingImg5 from '@/FSD/shared/assets/images/wakeboardingImg5.svg';
import { useOutletContext } from 'react-router';
import styles from './ActiveRecreation.module.scss';
import ActiveRecreationCard from './ui/ActiveRecreationCard/ActiveRecreationCard';

export default function ActiveRecreation() {
  const { refProductsSection } = useOutletContext();

  return (
    <section className={styles.section} id="products" ref={refProductsSection}>
      <h2 className={styles.title}>Все для активного отдыха и выходных</h2>
      <div className={styles.items}>
        <ActiveRecreationCard text="Вейкборды" img={wakeboardingImg1} />
        <ActiveRecreationCard text="Велосипеды и самокаты" img={wakeboardingImg2} />
        <ActiveRecreationCard text="Современные гаджеты" img={wakeboardingImg3} />
        <ActiveRecreationCard text="Дроны" img={wakeboardingImg4} />
        <ActiveRecreationCard text="Садовая техника" img={wakeboardingImg5} />
      </div>
    </section>
  );
}
