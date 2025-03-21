import questionsGroupDecriptionSection from '@/FSD/shared/assets/images/questionsGroupDecriptionSection.svg';
import './DescriptionSection.scss';

export default function DescriptionSection() {
  return (
    <section className="description-section">
      <h2 className="description-title">
        Теперь все
        <span className="description-title-underLine">прозрачно</span>
      </h2>

      <img className="description-questions-group-img" src={questionsGroupDecriptionSection} alt="" />
      <p className="description-text">
        Подтверждаете один раз свой профиль и пользуетесь всеми прокатами. Ехать и подписывать документы, отдавать огромный залог больше не нужно. На TAKE можно и забронировать и оплатить аренду.
      </p>
    </section>
  );
}
