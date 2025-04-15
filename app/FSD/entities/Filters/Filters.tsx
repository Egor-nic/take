import { useCallback, useState } from 'react';
import Calendar from 'react-calendar';
import CalendarContent from '~/FSD/shared/ui/Calendar/CalendarContent';
import Input from '~/FSD/shared/ui/Input/Input';
import Modal from '~/FSD/shared/ui/Modal/Modal';
import Container from '~/FSD/shared/ui/wrappers/Container/Container';
import styles from './Filters.module.scss';
import Tabs from './ui/Tabs/Tabs';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
function ModalContent() {
  return (
    <div className={styles.citiesWrapper}>
      <div className={styles.container}>
        <Input />
        <ul className={styles.cities}>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
          <li className={styles.item}>Москва</li>
          <li className={styles.item}>Тольятти</li>
        </ul>
      </div>
      <div className={styles.btnFindWrapper}>

        <button className={styles.btnFind} type="button">Готово</button>
      </div>

    </div>
  );
}

// interface ModalCalendarProps {
//   setDate: React.Dispatch<React.SetStateAction<Value>>;
//   date: Value;
// }
// function ModalCalendar({ setDate, date }: ModalCalendarProps) {
//   return (
//     <div className={styles.calendarWrapper}>
//       <div className={styles.calendar}>
//         <h2>Выберите даты аренды</h2>
//         <Calendar onChange={setDate} value={date} />
//       </div>
//       <div className={styles.btnWrapper}>
//         <button type="button" className={styles.btnClaendar}>Применить даты</button>
//       </div>
//     </div>
//   );
// }

export default function Filters() {
  const [date, setDate] = useState<Value>(new Date());
  const [open, setOpen] = useState(false);
  const [tabContent, setTabContent] = useState({ date: false, search: false, categories: false });

  const modalContetn = useCallback(() => {
    if (tabContent.categories) {
      return <p>Будут Категории</p>;
    }

    if (tabContent.date) {
      return <CalendarContent setDate={setDate} date={date} />;
    }

    if (tabContent.search) {
      return <ModalContent />;
    }
    return <></>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabContent]);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.items}>
          <Tabs
            text="Место нахождения"
            onClick={() => {
              setTabContent({ date: false, search: true, categories: false });
              setOpen(true);
            }}
          />
          <Tabs
            text="Даты"
            onClick={() => {
              setTabContent({ date: true, search: true, categories: false });
              setOpen(true);
            }}
          />
          <Tabs
            text="Категория"
            onClick={() => {
              setTabContent({ date: false, search: true, categories: true });
              setOpen(true);
            }}
          />
        </div>
      </Container>

      <Modal
        open={open}
        setOpen={setOpen}
        modalTitle="Выберите даты аренды"
        modalContent={modalContetn()}
      />
    </div>
  );
}
