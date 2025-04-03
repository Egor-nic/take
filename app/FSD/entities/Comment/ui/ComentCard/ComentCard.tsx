import styles from './ComentCard.module.scss';

interface ComentCardProps {
  commentText: string;
  userName: string;
  userAvatar: string;

}
export default function ComentCard({ commentText, userName, userAvatar }: ComentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <img className={styles.avatar} src={userAvatar} alt="avatar" />
        <div className={styles.comment}>
          <h3 className={styles.userName}>{userName}</h3>
          <p className={styles.comentText}>{commentText}</p>
        </div>
      </div>
    </div>
  )
}
