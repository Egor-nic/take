import wakeboardingImg1 from '@/FSD/shared/assets/images/wakeboardingImg1.svg';
import wakeboardingImg2 from '@/FSD/shared/assets/images/wakeboardingImg2.svg';
import wakeboardingImg3 from '@/FSD/shared/assets/images/wakeboardingImg3.svg';
import wakeboardingImg4 from '@/FSD/shared/assets/images/wakeboardingImg4.svg';
import wakeboardingImg5 from '@/FSD/shared/assets/images/wakeboardingImg5.svg';
import ActiveRecreationCard from './ui/ActiveRecreationCard/ActiveRecreationCard';
import './ActiveRecreation.scss';

export default function ActiveRecreation() {
  return (
    <section className="active-recreation-section">
      <h2 className="active-recreation-title">Все для активного отдыха и выходных</h2>
      <div className="active-recreation-cards">
        <ActiveRecreationCard text="Вейкборды" img={wakeboardingImg1} />
        <ActiveRecreationCard text="Велосипеды и самокаты" img={wakeboardingImg2} />
        <ActiveRecreationCard text="Современные гаджеты" img={wakeboardingImg3} />
        <ActiveRecreationCard text="Дроны" img={wakeboardingImg4} />
        <ActiveRecreationCard text="Садовая техника" img={wakeboardingImg5} />
      </div>
    </section>
  );
}
