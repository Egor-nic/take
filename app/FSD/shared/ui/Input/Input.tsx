import styles from './Input.module.scss';

export default function Input() {
  return (
    <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Начать поиск" />
        {/* <label className={styles.label} htmlFor="">label</label> */}
        <button className={styles.btn} type="submit">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.2659" cy="11.7666" r="8.98856" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.5195 18.4851L22.0436 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
    </form>
  );
}
