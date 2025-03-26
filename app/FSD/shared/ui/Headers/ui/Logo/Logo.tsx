import { Link } from 'react-router';
import styles from './Logo.module.scss';

interface LogoProps {
  calssName: 'logoForTablet' | 'logo';
}
export default function Logo({ calssName }: LogoProps) {
  return (
    <Link to="/#home">
      <div className={styles[calssName]}> </div>
    </Link>

  );
}
