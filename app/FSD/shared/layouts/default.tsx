import { Outlet } from 'react-router';
import Footer from '../ui/Footer/Footer';
import Header from '../ui/Header/Header';
import Container from '../ui/wrappers/Container/Container';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
