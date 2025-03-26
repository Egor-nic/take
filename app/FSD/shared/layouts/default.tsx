import { useRef } from 'react';
import { Outlet } from 'react-router';
import Footer from '../ui/Footer/Footer';
import HeaderDefaultLayout from '../ui/Headers/HeaderDefaultLayout';
import Container from '../ui/wrappers/Container/Container';

export default function DefaultLayout() {
  const refAboutSection = useRef<HTMLDivElement>(null);
  const refProductsSection = useRef<HTMLDivElement>(null);
  const refHowItWorksSection = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderDefaultLayout htmlRefs={{
        refAboutSection,
        refHowItWorksSection,
        refProductsSection,
      }}
      />
      <Container>
        <Outlet context={{
          refAboutSection,
          refHowItWorksSection,
          refProductsSection,
        }}
        />
      </Container>
      <Footer />
    </>
  );
}
