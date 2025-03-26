import { Outlet } from 'react-router';
import Container from '../ui/wrappers/Container/Container';
import HeaderSearchLayout from '../ui/Headers/HeaderSearchLayout/HeaderSearchLayout';

export default function SearchLayout() {
  return (
    <>
      <Container>
        <HeaderSearchLayout />
      </Container>
      <Outlet />
    </>
  );
}
