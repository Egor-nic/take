import ActiveRecreation from '~/FSD/entities/ActiveRecreation/ActiveRecreation';
import Comment from '~/FSD/entities/Comment/Comment';
import DescriptionSection from '~/FSD/entities/DescriptionSection/DescriptionSection';
import HowToStartSection from '~/FSD/entities/HowToStartSection/HowToStartSection';
import MainContetnt from '~/FSD/entities/MainContetnt/MainContetnt';
import Rental from '~/FSD/entities/Rental/Rental';
import ReservationSection from '~/FSD/entities/ReservationSection/ReservationSection';

export function meta() {
  return [
    { title: 'TAKE' },
  ];
}

export default function Home() {
  return (
    <>
      <MainContetnt />
      <Rental />
      <DescriptionSection />
      <HowToStartSection />
      <Comment />
      <ActiveRecreation />
      <ReservationSection />
    </>
  );
}
