import PayContent from '~/FSD/entities/Pay/PayContent';
import PayHeader from '~/FSD/entities/Pay/ui/Header/PayHeader';
import Line from '~/FSD/shared/ui/Line/Line';
import Container from '~/FSD/shared/ui/wrappers/Container/Container';

export default function Pay() {
  return (
    <>
      <Line />
      <Container>
        <PayContent />
      </Container>
    </>
  );
}
