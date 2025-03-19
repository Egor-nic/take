import img from '@/FSD/shared/assets/images/image.png';
import img2 from '@/FSD/shared/assets/images/startimg2.png';
import img3 from '@/FSD/shared/assets/images/startimg3.png';

import CardWrapper from '~/FSD/shared/ui/wrappers/CardWrapper/CardWrapper';
import { RowCardWrapper } from '~/FSD/shared/ui/wrappers/RowCardWrapper/RowCardWrapper';
import HowToStartCard from './ui/HowToStartCard/HowToStartCard';
import './HowToStartSection.scss';

export default function HowToStartSection() {
  return (
    <section className="start-section">
      <h2 className="start-title">Как начать пользоваться?</h2>
      <div className="start-items">
        <CardWrapper>
          {/* <img className="start-icon" src={img} alt="img" />
          <h3>1: Найти</h3>
          <span className="start-text">Тут все просто. Найдите нужную вещь в поиске и забронируйте ее</span> */}
          <HowToStartCard img={img} title="1: Найти" text="Тут все просто. Найдите нужную вещь в поиске и забронируйте ее" />
        </CardWrapper>

        <CardWrapper>
          <HowToStartCard img={img3} title="2. Пройти регистрацию" text="Вам понадобится паспорт РФ и фото. И несколько минут. Регистрация быстрая, ехать никуда не надо" />

          {/* <img className="start-icon" src={img3} alt="img" />
          <h3>2. Пройти регистрацию</h3>
          <p className="start-text">Вам понадобится паспорт РФ и фото. И несколько минут. Регистрация быстрая, ехать никуда не надо</p> */}
        </CardWrapper>

        <CardWrapper>
          <HowToStartCard img={img2} title="3. Почувствовать удобный шеринг" text="Находите в TAKE нужную вещь, бронируете её, оплачивайте и пользуйтесь без залога" />

          {/* <img className="start-icon" src={img2} alt="img" />
          <h3>3. Почувствовать удобный шеринг</h3>
          <span className="start-text">Находите в TAKE нужную вещь, бронируете её, оплачивайте и пользуйтесь без залога</span> */}
        </CardWrapper>

      </div>
    </section>
  );
}
