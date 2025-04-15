import Calendar from 'react-calendar';
import styles from './CalendarContent.module.scss';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ModalCalendarProps {
  setDate: React.Dispatch<React.SetStateAction<Value>>;
  date: Value;
};

export default function CalendarContent({ setDate, date }: ModalCalendarProps) {
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendar}>
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className={styles.btnWrapper}>
        <button type="button" className={styles.btnClaendar}>Применить даты</button>
      </div>
    </div>
  );
}
