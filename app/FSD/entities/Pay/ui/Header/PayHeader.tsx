import styles from './PayHeader.module.scss';

export default function PayHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.breadCrumbs}>Будут хлебные крошки</div>
      <h1>Подтверждение и оплата</h1>
    </div>
  )
}