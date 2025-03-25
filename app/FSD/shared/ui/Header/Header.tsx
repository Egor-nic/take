import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router';
import styles from './Header.module.scss';

export default function Header() {
  const [menuIsChecked, setMenuIsChecked] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={classNames(styles.logoWrapper, {
          [styles.headerBgWhite]: menuIsChecked,
          [styles.headerBgGray]: !menuIsChecked,

        })}
        >
          <Link to="/#home">
            <div className={styles.logo}> </div>
          </Link>

          <label htmlFor="menu-toggle" className={styles.menuIcon}>
            <svg
              className={classNames({
                [styles.iconActive]: menuIsChecked,
                [styles.iconNotActive]: !menuIsChecked,

              })}
              width="22px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_429_11066)">
                <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_429_11066">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <input
            className={styles.menuToggle}
            type="checkbox"
            id="menu-toggle"
            checked={menuIsChecked}
            onChange={() => setMenuIsChecked(prev => !prev)}
          />
        </div>

        <Link to="/#home">
          <div className={styles.logoForTablet}></div>
        </Link>

        <nav className={classNames(styles.nav, {
          [styles.menuIsOpen]: menuIsChecked,
          [styles.menuIsClose]: !menuIsChecked,

        })}
        >
          <ul className={styles.nasvList}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/#about">О сервисе</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/#how-it-works">Как это работает</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/#products">Продукты и услуги</a>
            </li>
          </ul>

          <Link to="#" className={styles.getRentLink}>Взять в аренду</Link>
        </nav>
      </div>
    </header>
  );
}
