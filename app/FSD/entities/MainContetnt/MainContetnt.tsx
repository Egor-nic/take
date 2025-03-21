import MainContetntImg from '@/FSD/shared/assets/images/main__illustration.svg';
import './MainContetnt.scss';

export default function MainContetnt() {
  return (
    <section className="main-section">
      <div className="main-wrapper">
        <img className="main-img" src={MainContetntImg} alt="" />

        <h1 className="main-title">
          Бери напрокат
          <span className="main-title-underLine">быстро</span>
        </h1>

        <p className="main-text">Найти и забронировать нужную вещь в Тольятти можно в одном месте, без огромных залогов и бумажной волокиты</p>

        {/* <button className="main-btn" type="button">Найти</button> */}
        <a href="#" className="main-btn">Найти</a>

      </div>
    </section>
  )
}