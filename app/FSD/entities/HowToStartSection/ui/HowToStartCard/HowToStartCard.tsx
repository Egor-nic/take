import './HowToStartCard.scss';

interface HowToStartCardProps {
  img: string;
  title: string;
  text: string;
}
export default function HowToStartCard({ img, title, text }: HowToStartCardProps) {
  return (
    <>
      <img className="start-icon" src={img} alt="img" />
      <h3>{title}</h3>
      <p className="start-text">{text}</p>
    </>
  );
}
