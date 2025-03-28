import { useEffect, useRef, useState } from 'react';
import Input from '~/FSD/shared/ui/Input/Input';
import Modal from '~/FSD/shared/ui/Modal/Modal';
import Container from '~/FSD/shared/ui/wrappers/Container/Container';
import styles from './Filters.module.scss';
import Tabs from './ui/Tabs/Tabs';

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
export default function Filters() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.items}>
          <Tabs text="Место нахождения" onClick={() => dialogRef.current?.showModal()} />
          <Tabs text="Даты" />
          <Tabs text="Категория" />
        </div>
      </Container>

      <Modal
        // modalTitle="Место нахождения"
        modalContent={(
          <>
            <ModalContent />
          </>
        )}
        ref={{ dialogRef }}
      />
    </div>
  );
}
