import type { ReactNode } from 'react';
import type { SwiperOptions } from 'swiper/types';
import { Children, useRef, useState } from 'react';
import { A11y, Autoplay, EffectFade, FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carusel.module.scss';
import 'swiper/swiper-bundle.css';
import './style.css';

interface CarouselProps {
  spaceBetween?: number;
  slidesPerView?: number;
  children?: ReactNode;
  className?: string;
  centeredSlides?: boolean;
  breakpoints?: SwiperOptions['breakpoints'];
}

export default function Carousel({
  slidesPerView = 2,
  spaceBetween = 20,
  children,
  className,
  centeredSlides,
  breakpoints,
}: CarouselProps) {
  const result = Children.toArray(children);

  const refCarousel = useRef(null);

  const [, setInitialized] = useState(false);
  //   myEffect: {
  //     setTranslate: function() {
  //         // your actual animation code goes here
  //     },
  //     setTransition: function( duration ) {
  //         // duration is between 0 and max speed (300 is default)
  //         // but you can change it in the config object below
  //         // is called when your swiping starts and ends
  //     }
  //  }
  return (
    <div className={className}>
      <Swiper
        className={styles.swiper}
        modules={[EffectFade, Navigation, Pagination, FreeMode, A11y, Autoplay, Grid]}
        pagination={{
          el: refCarousel.current,
          clickable: true,
          type: 'bullets',
        }}
        // effect="fade"
        // autoplay={{
        //   delay: 5000, // время задержки между слайдами
        //   disableOnInteraction: false, // слайды будут продолжать автоматически переключаться при нажатии на кнопки навигации
        // }}
        onAfterInit={() => setInitialized(true)}
        maxBackfaceHiddenSlides={0}
        resizeObserver
        freeMode
        observeParents
        spaceBetween={spaceBetween}
        observeSlideChildren
        observer
        updateOnWindowResize
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        centeredSlides={centeredSlides}
        mousewheel
        keyboard
        speed={2000}
        breakpoints={breakpoints || {
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
            slidesPerGroup: 1,

          },
          768: {
            slidesPerView,
            spaceBetween,
          },
        }}
      >
        {result.map((node, index) =>
          <SwiperSlide className={styles.slide} key={index}>{node}</SwiperSlide>,
        )}
      </Swiper>

      <div ref={refCarousel} className={styles.customPagination}></div>
    </div>

  );
}
