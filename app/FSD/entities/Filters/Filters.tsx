import Container from '~/FSD/shared/ui/wrappers/Container/Container';
import styles from './Filters.module.scss';
import Tabs from './ui/Tabs/Tabs';

export default function Filters() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.items}>
        <Tabs text='Место нахождения' />
        <Tabs text='Даты' />
        <Tabs text='Категория' />

        </div>
      </Container>
    </div>
  )
}