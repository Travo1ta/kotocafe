import React, { useState } from "react";
import {SwiperSlide } from "swiper/react";
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
   StyleSlideMini
} from "./styles";

function Gallery({ slides = [] }) {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                     <StyleSlideMini src={slide.src} alt={slide.alt} />
                  </SwiperSlide>
               ))}
            </StyledSwiperMini>
         </SliderWrapper>
      </>
   );
}

export default Gallery;