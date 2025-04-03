import avatar from '@/FSD/shared/assets/images/avatar.png';
import Carousel from '~/FSD/shared/ui/Carusel/Carusel';
import styles from './Comment.module.scss';
import ComentCard from './ui/ComentCard/ComentCard';

const coments = [
  {
    uuid: '123e4567-e89b-12d3-a456-426655440001',
    userName: 'Иван Иванов',
    userAvatar: avatar,
    commentText: 'В take собрали все прокаты в одном месте, очень удобно для поиска того, что нужно было именно мне. Плюс оплатить можно сразу и без залога. Если будет ещё и доставка - получится максимально удобно!',
  },

  {
    uuid: '123e4567-e89b-12d3-a456-426655440002',
    userName: 'Егор Егоров',
    userAvatar: avatar,
    commentText: 'Приехали с детьми в Тольятти, было немного времени, решили покататься в лесу. Быстро нашли прокат поблизости, забронировали и оплатили прямо на сайте. Удобно и без залога.',
  },

  {
    uuid: '123e4567-e89b-12d3-a456-426655440003',
    userName: 'Антон Антонов',
    userAvatar: avatar,
    commentText: 'Очень понравилось, что можно точно выбрать время аренды и увидеть стоимость сразу, плюс тут же забронировать и оплатить. В целом, удобный сервис - брали и велосипед, и газонокосилку. Всем советую! ',
  },

  {
    uuid: '123e4567-e89b-12d3-a456-426655440004',
    userName: 'Пётр Петров',
    userAvatar: avatar,
    commentText: 'Take спасибо! Очень удобный сервис! Брала на прокат электросамокат в Тольятти. Просто пришла и забрала самокат в прокате рядом с домом. А забронировала и оплатила все в take!!',
  },
];
export default function Comment() {
  return (

    <section className={styles.section}>
      <h2>Отзывы</h2>
      <Carousel
        slidesPerView={2}
      >
        {coments.map(comment => (
          <ComentCard
            key={comment.uuid}
            commentText={comment.commentText}
            userAvatar={comment.userAvatar}
            userName={comment.userName}
          />
        ))}
      </Carousel>
    </section>
  );
}
