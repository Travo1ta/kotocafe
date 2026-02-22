import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
   SliderWrapper,
   StyledSwiper,
   StyledSwiperMini,
   StyleSlide,
   StyleSlideMini,
   StyledButtonLeft,
   StyledButtonRight
} from "./styles";

function Gallery({ slides = [] }) {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const [activeSlide, setActiveSlide] = useState(0);

   const navigationPrevRef = useRef(null);
   const navigationNextRef = useRef(null);

   // Эффект для настройки навигации после монтирования
   useEffect(() => {
      if (thumbsSwiper) {
         // Даем время на монтирование DOM
         const timer = setTimeout(() => {
            if (navigationPrevRef.current && navigationNextRef.current) {
               thumbsSwiper.params.navigation.prevEl = navigationPrevRef.current;
               thumbsSwiper.params.navigation.nextEl = navigationNextRef.current;
               thumbsSwiper.navigation.destroy(); // Удаляем старую навигацию
               thumbsSwiper.navigation.init();    // Инициализируем новую
               thumbsSwiper.navigation.update();   // Обновляем
            }
         }, 100);

         return () => clearTimeout(timer);
      }
   }, [thumbsSwiper]);

   if (!slides || slides.length === 0) {
      return <div>Нет изображений</div>;
   }

   // Дублируем слайды для loop
   const extendedSlides = [...slides, ...slides];

   return (
      <>
         <StyledSwiper
            loop={true}
            spaceBetween={20}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
            onSlideChange={(swiper) => {
               setActiveSlide(swiper.realIndex);
            }}
         >
            {extendedSlides.map((slide, index) => (
               <SwiperSlide key={`${slide.id}-${index}`}>
                  <StyleSlide
                     src={slide.src}
                     alt={slide.alt}
                     width={728}
                     height={408}
                  />
               </SwiperSlide>
            ))}
         </StyledSwiper>

         <SliderWrapper>
            <StyledSwiperMini
               onSwiper={setThumbsSwiper}
               loop={true}
               spaceBetween={20}
               slidesPerView={4}
               freeMode={true}
               watchSlidesProgress={true}
               modules={[FreeMode, Navigation, Thumbs]}
            >
               {extendedSlides.map((slide, index) => (
                  <SwiperSlide key={`thumb-${slide.id}-${index}`}>
                     <StyleSlideMini
                        src={slide.src}
                        alt={slide.alt}
                        $active={activeSlide === index}
                     />
                  </SwiperSlide>
               ))}
            </StyledSwiperMini>

            <StyledButtonLeft ref={navigationPrevRef}>
               <span style={{ fontSize: '24px', lineHeight: '1' }}>←</span>
            </StyledButtonLeft>
            <StyledButtonRight ref={navigationNextRef}>
               <span style={{ fontSize: '24px', lineHeight: '1' }}>→</span>
            </StyledButtonRight>
         </SliderWrapper>
      </>
   );
}

export default Gallery;