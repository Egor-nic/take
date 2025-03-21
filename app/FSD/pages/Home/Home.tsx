import ActiveRecreation from '~/FSD/entities/ActiveRecreation/ActiveRecreation';
import DescriptionSection from '~/FSD/entities/DescriptionSection/DescriptionSection';
import HowToStartSection from '~/FSD/entities/HowToStartSection/HowToStartSection';
import MainContetnt from '~/FSD/entities/MainContetnt/MainContetnt';
import Rental from '~/FSD/entities/Rental/Rental';
import ReservationSection from '~/FSD/entities/ReservationSection/ReservationSection';

export function meta() {
  return [
    { title: 'Тема / цвета' },
  ];
}

export default function Home() {
  return (
    <>
      <MainContetnt />
      <Rental />
      <DescriptionSection />
      <HowToStartSection />
      <ActiveRecreation />
      <ReservationSection />
    </>
  );
}
