import Container from '../wrappers/Container/Container';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <div className="footer-copyright">
            <span>take-sharing ©. 2021</span>
          </div>
          <a className="nav-link--footer" href="#" target="black">Пользовательское соглашение</a>
        </div>
      </Container>
    </footer>
  );
}
