import rentalFirstCardImg from '@/FSD/shared/assets/images/rentalFirstCardImg.svg';
import rentalFourthCardImg from '@/FSD/shared/assets/images/rentalFourthCardImg.svg';
import rentalSecondCardImg from '@/FSD/shared/assets/images/rentalSecondCardImg.svg';
import rentalThirdCardImg from '@/FSD/shared/assets/images/rentalThirdCardImg.svg';
import Card from '~/FSD/shared/ui/Card/Card';
import CardWrapper from '~/FSD/shared/ui/wrappers/CardWrapper/CardWrapper';
import styles from './Rental.module.scss';

export default function Rental() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.wrapper}>

        <h2 className={styles.title}>Прокат для жизни</h2>
        <p className={styles.text}>Вы даже не представляете, сколько проблем можно решить с помощью компаний-проката</p>
        <div className={styles.items}>
          <CardWrapper>
            <Card
              img={rentalFirstCardImg}
              title="Активным"
              text="Самокаты, велосипеды, сапсерфы, лонгборды. Берите там, где удобно"
            />
          </CardWrapper>

          <CardWrapper>
            <Card
              img={rentalSecondCardImg}
              title="Дачникам"
              text="Нужно подстричь газон? Помочь папе с ремонтом забора? \n Для всего этого есть газонокосилка, культиватор и другая специальная техника, которую можно арендовать"
            />
          </CardWrapper>

          <CardWrapper>
            <Card
              img={rentalThirdCardImg}
              title="Путешественникам"
              text="Узнайте, как разнообразить свой отдых – утро на сап серфе или попробовать вейксерф на сансете? - легко!"
            />
          </CardWrapper>

          <CardWrapper>
            <Card
              img={rentalFourthCardImg}
              title="Игроманам и прогрессивным"
              text="Протестуйте новую приставку или VR-очки прежде, чем покупать."
            />
          </CardWrapper>
        </div>
      </div>
    </section>
  );
}
