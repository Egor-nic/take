import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router';
import styles from './HeaderDefaultLayout.module.scss';
import Logo from './ui/Logo/Logo';

interface LinksRef {
  refAboutSection: React.RefObject<HTMLDivElement | null>;
  refHowItWorksSection: React.RefObject<HTMLDivElement | null>;
  refProductsSection: React.RefObject<HTMLDivElement | null>;

}
interface HeaderDefaultLayoutProps {
  htmlRefs: LinksRef;
}

export default function HeaderDefaultLayout({ htmlRefs }: HeaderDefaultLayoutProps) {
  const [menuIsChecked, setMenuIsChecked] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={classNames(styles.logoWrapper, {
          [styles.headerBgWhite]: menuIsChecked,
          [styles.headerBgGray]: !menuIsChecked,

        })}
        >
          <Logo calssName="logo" />

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

        <Logo calssName="logoForTablet" />

        <nav className={classNames(styles.nav, {
          [styles.menuIsOpen]: menuIsChecked,
          [styles.menuIsClose]: !menuIsChecked,

        })}
        >
          <ul className={styles.nasvList}>
            <li className={styles.navItem}>
              <Link
                className={styles.navLink}
                to="/#about"
                onClick={(e) => {
                  e.preventDefault();

                  if (htmlRefs.refAboutSection.current) {
                    const yOffset = -200;
                    const y = htmlRefs.refAboutSection.current?.getBoundingClientRect()?.top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                О сервисе
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={styles.navLink}
                to="/#how-it-works"
                onClick={(e) => {
                  e.preventDefault();

                  if (htmlRefs.refHowItWorksSection.current) {
                    const yOffset = -200;
                    const y = htmlRefs.refHowItWorksSection.current?.getBoundingClientRect()?.top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Как это работает
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={styles.navLink}
                to="/#products"
                onClick={(e) => {
                  e.preventDefault();
                  const yOffset = -200;
                  if (htmlRefs.refProductsSection.current) {
                    const y = htmlRefs.refProductsSection.current?.getBoundingClientRect()?.top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Продукты и услуги
              </Link>
            </li>
          </ul>

          <Link to="/product" className={styles.getRentLink}>Взять в аренду</Link>
        </nav>
      </div>
    </header>
  );
}
