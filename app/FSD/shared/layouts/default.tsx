import { Outlet } from 'react-router';
import Footer from '../ui/Footer/Footer';
import Container from '../ui/wrappers/Container/Container';

export default function DefaultLayout() {
  return (
    <Container>
      <Outlet />
      {/* <Footer /> */}
    </Container>
  );
}
