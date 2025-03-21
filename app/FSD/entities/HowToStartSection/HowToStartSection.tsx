import img from '@/FSD/shared/assets/images/image.png';
import img2 from '@/FSD/shared/assets/images/startimg2.png';
import img3 from '@/FSD/shared/assets/images/startimg3.png';
import CardWrapper from '~/FSD/shared/ui/wrappers/CardWrapper/CardWrapper';
import Card from '../../shared/ui/Card/Card';
import './HowToStartSection.scss';

export default function HowToStartSection() {
  return (
    <section className="start-section">
      <h2 className="start-title">Как начать пользоваться?</h2>
      <div className="start-items">
        <CardWrapper>
          <Card
            img={img}
            imgSize="xs"
            title="1: Найти"
            text="Тут все просто. Найдите нужную вещь в поиске и забронируйте ее"
          />
        </CardWrapper>

        <CardWrapper>
          <Card
            img={img3}
            imgSize="xs"
            title="2. Пройти регистрацию"
            text="Вам понадобится паспорт РФ и фото. И несколько минут. Регистрация быстрая, ехать никуда не надо"
          />
        </CardWrapper>

        <CardWrapper>
          <Card
            img={img2}
            imgSize="xs"
            title="3. Почувствовать удобный шеринг"
            text="Находите в TAKE нужную вещь, бронируете её, оплачивайте и пользуйтесь без залога"
          />
        </CardWrapper>
      </div>
    </section>
  );
}
