import reservationImg from '@/FSD/shared/assets/images/reservation-img.svg';

import './ReservationSection.scss';

export default function ReservationSection() {
  return (
    <section className="reservation-section">
      <div className="reservation-wrapper">
        <img className="reservation-img" src={reservationImg} alt="" />

        <div className="reservation-info">
          <h2 className="reservation-title">
            Это все можно напрокат взять?
            <br></br>
            {' '}
            А я и не знал!
          </h2>

          <p className="reservation-description">
            Компаний, у которых можно арендовать необходимые нам вещи огромное количество, но мы о них даже не знаем. Почувствуйте, как можно просто решать свои проблемы или разнообразить отдых с помощью проката рядом с вами.
          </p>
          <button className="reservation-btn" type="button">Забронировать</button>
        </div>
      </div>
    </section>
  );
}
