import CardWrapper from '~/FSD/shared/ui/wrappers/CardWrapper/CardWrapper';
import './ActiveRecreationCard.scss';

interface ActiveRecreationCardProps {
  text: string;
  img: string;
}
export default function ActiveRecreationCard({ text, img }: ActiveRecreationCardProps) {
  return (
    <CardWrapper>
      <img className="active-recreation-card" src={img} alt="card img" />
      <h4>{text}</h4>
    </CardWrapper>
  );
}
