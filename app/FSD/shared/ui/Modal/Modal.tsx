import type { JSX } from 'react';
import styles from './Modal.module.scss';

interface refModal {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}
interface ModalProps {
  modalTitle?: string;
  modalContent: JSX.Element;
  ref: refModal;
  closeModal: () => void;
}

export default function Modal({ modalTitle, modalContent, ref, closeModal }: ModalProps) {
  return (
    <div>
      <dialog role="alertdialog" ref={ref.dialogRef} className={styles.modal}>
        <button
          className={styles.close}
          type="button"
          onClick={closeModal}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8131 5.1869C14.5639 4.9377 14.1598 4.9377 13.9106 5.1869L10 9.09754L6.08936 5.1869C5.84015 4.9377 5.43611 4.9377 5.1869 5.1869C4.9377 5.43611 4.9377 5.84015 5.1869 6.08936L9.09754 10L5.1869 13.9106C4.9377 14.1598 4.9377 14.5639 5.1869 14.8131C5.43611 15.0623 5.84015 15.0623 6.08936 14.8131L10 10.9025L13.9106 14.8131C14.1598 15.0623 14.5639 15.0623 14.8131 14.8131C15.0623 14.5639 15.0623 14.1598 14.8131 13.9106L10.9025 10L14.8131 6.08936C15.0623 5.84015 15.0623 5.43611 14.8131 5.1869Z"
              fill="#3C3E41"
            />
          </svg>
        </button>

        <div className={styles.wrapper}>
          <h3>{modalTitle}</h3>
        </div>
        {modalContent}
      </dialog>
    </div>
  );
}
