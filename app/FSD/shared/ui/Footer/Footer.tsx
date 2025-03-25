import { Link } from 'react-router';
import Container from '../wrappers/Container/Container';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <span>take-sharing ©. 2021</span>
          <Link className={styles.link} to="#" target="black">Пользовательское соглашение</Link>
        </div>
      </Container>
    </footer>
  );
}
