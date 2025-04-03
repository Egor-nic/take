import { Outlet } from 'react-router';
import Footer from '../ui/Footer/Footer';
import HeaderProductLayout from '../ui/Headers/HeaderProductLayout/HeaderProductLayout';
import Container from '../ui/wrappers/Container/Container';

export default function SearchLayout() {
  return (
    <>
      <Container>
        <HeaderProductLayout />
      </Container>
      <Outlet />
      <Footer />
    </>
  );
}
