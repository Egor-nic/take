import questionsGroupDecriptionSectionMobale from '@/FSD/shared/assets/images/questions-group--mobile.svg';
import questionsGroupDecriptionSection from '@/FSD/shared/assets/images/questionsGroupDecriptionSection.svg';
import { useOutletContext } from 'react-router';
import styles from './DescriptionSection.module.scss';

export default function DescriptionSection() {
  const { refHowItWorksSection } = useOutletContext();

  return (

    <section className={styles.section} id="how-it-works" ref={refHowItWorksSection}>
      <h2 className={styles.title}>
        Теперь все
        <br className={styles.breackUnderLine}></br>
        <span className={styles.underLine}>прозрачно</span>
      </h2>
      <img className={styles.questionsGroupImgMobale} src={questionsGroupDecriptionSectionMobale} alt="" />
      <img className={styles.questionsGroupImg} src={questionsGroupDecriptionSection} alt="" />
      <p className={styles.text}>
        Подтверждаете один раз свой профиль и пользуетесь всеми прокатами. Ехать и подписывать документы, отдавать огромный залог больше не нужно. На TAKE можно и забронировать и оплатить аренду.
      </p>
    </section>
  );
}
