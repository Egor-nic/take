import './Card.scss';

interface CardProps {
  img: string;
  title: string;
  text: string;
  imgSize?: string;
}
export default function Card({ img, title, text, imgSize = 'base' }: CardProps) {
  return (
    <>
      <img className={`start-icon start-icon_${imgSize}`} src={img} alt="img" />
      <h3>{title}</h3>
      <p className="start-text">{text}</p>
    </>
  );
}
