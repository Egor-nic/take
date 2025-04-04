import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
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
        <h3>Место нахождения</h3>
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

interface ModalCalendarProps {
  setDate: React.Dispatch<React.SetStateAction<Value>>,
  date: Value,
}
function ModalCalendar({setDate, date}: ModalCalendarProps) {
  return (
    <div className={styles.calendar}>
      <h2>Выберите даты аренды</h2>
      <Calendar onChange={setDate} value={date} />

      <button>Применить даты</button>
    </div>
  )
}

//

export default function Filters() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [date, setDate] = useState<Value>(new Date());
  // const [selectRange, setSelectRange] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.items}>
          <Tabs text="Место нахождения" onClick={() => dialogRef.current?.showModal()} />
          <Tabs text="Даты" />
          <Tabs text="Категория" />
        </div>
      </Container>

      {/* <Modal
        modalContent={<ModalContent />}
        ref={{ dialogRef }}
      /> */}

      <Modal
        modalContent={<ModalCalendar setDate={setDate} date={date} />}
        ref={{ dialogRef }}
      />
    </div>
  );
}
