import styles from './Input.module.scss';

const Input: React.FC<React.ComponentProps<'input'>> = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Начать поиск" />
      {/* <label className={styles.label} htmlFor="">label</label> */}
      <button className={styles.btn} type="button">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.2659" cy="11.7666" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5195 18.4851L22.0436 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
};

export default Input;
