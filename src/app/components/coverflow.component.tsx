
// todo: clear if good
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import 'swiper/css/autoplay';

// export default function RacoonCarousel() {
//   const images = [
// 		"/racoon1.png",
// 		"/racoon2.png",
// 		"/racoon3.png",
// 		"/racoon4.png",
// 		"/racoon5.png",
// 		"/racoon6.png",
// 	  "/racoon7.png",
// 	  	"/racoon1.png",
// 		"/racoon2.png",
// 		"/racoon3.png",
// 		"/racoon4.png",
// 		"/racoon5.png",
// 		"/racoon6.png",
// 	  "/racoon7.png",
// 	  	  	"/racoon1.png",
// 		"/racoon2.png",
// 		"/racoon3.png",
// 		"/racoon4.png",
// 		"/racoon5.png",
// 		"/racoon6.png",
// 	  "/racoon7.png",
//   ];
  
//   return (
// 	  <Swiper
// 		loop={true}
// 		centeredSlides
//       grabCursor
//       allowTouchMove
//       initialSlide={3}
// 		slidesPerView={5}
// 		spaceBetween={40}
// 		modules={[Autoplay]}
// 		autoplay={{ delay: 1000, disableOnInteraction: false }}
// 		speed={800} 
//     >
//       {images.map((src, i) => (
//         <SwiperSlide key={i}>
//           <Image
//             src={src}
//             alt={`Racoon ${i + 1}`}
//             width={360}
//             height={400}
//             className="rounded-2xl shadow-lg"
//           />
//         </SwiperSlide>
//       ))}
// 	   </Swiper>
//   );
// }
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// export default function RacoonCarousel() {
//   const images = [
//     "/racoon1.png","/racoon2.png","/racoon3.png","/racoon4.png","/racoon5.png","/racoon6.png","/racoon7.png",
//     "/racoon1.png","/racoon2.png","/racoon3.png","/racoon4.png","/racoon5.png","/racoon6.png","/racoon7.png",
//     "/racoon1.png","/racoon2.png","/racoon3.png","/racoon4.png","/racoon5.png","/racoon6.png","/racoon7.png",
//   ];

//   return (
//     <>
//       <Swiper
//         className="racoon-swiper"
//         loop
//         centeredSlides
//         grabCursor
//         allowTouchMove
//         initialSlide={3}
//         slidesPerView={5}
//         spaceBetween={40}
//         modules={[Autoplay]}
//         autoplay={{ delay: 1000, disableOnInteraction: false }}
//         speed={800}
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i}>
//             <Image
//               src={src}
//               alt={`Racoon ${i + 1}`}
//               width={360}
//               height={400}
//               className="rounded-2xl shadow-lg"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx global>{`
//         .racoon-swiper .swiper-slide {
//           display: flex;               /* гарне вирівнювання картинки */
//           justify-content: center;
//           align-items: center;
//           transition: transform 300ms ease, opacity 300ms ease;
//           will-change: transform;
//           transform: scale(0.65);
//           opacity: 0.5;
//         }
//         .racoon-swiper .swiper-slide-prev,
//         .racoon-swiper .swiper-slide-next {
//           transform: scale(0.8);
//           opacity: 0.85;
//         }
//         .racoon-swiper .swiper-slide-active {
//           transform: scale(1);
//           opacity: 1;
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function RacoonCarousel() {
  const images = [
    "/racoon1.png","/racoon2.png","/racoon3.png","/racoon4.png","/racoon5.png","/racoon6.png","/racoon7.png",
    "/racoon1.png","/racoon2.png","/racoon3.png","/racoon4.png","/racoon5.png","/racoon6.png","/racoon7.png",
    "/racoon1.png","/racoon2.png","/racoon3.png","/racoon4.png","/racoon5.png","/racoon6.png","/racoon7.png",
  ];

  return (
    <div className="mt-6">
      <Swiper
			className="racoon-swiper"
			loop
			centeredSlides
			grabCursor
			allowTouchMove
			initialSlide={3}
			slidesPerView="auto"
			spaceBetween={40}
			slidesOffsetBefore={0}
			slidesOffsetAfter={0}
			modules={[Autoplay]}
			autoplay={{ delay: 1000, disableOnInteraction: false }}
			speed={800}
			breakpoints={{
				320:  { spaceBetween: 16 },
				768:  { spaceBetween: 24 },
				1280: { spaceBetween: 40 },
			}}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="racoon-slide">
            <div className="slide-inner">
              <Image
                src={src}
                alt={`Racoon ${i + 1}`}
                width={460} 
                height={500}
                className="rounded-2xl shadow-lg block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .racoon-swiper { --slide-w: 360px; }

        .racoon-swiper .racoon-slide {
          width: var(--slide-w) !important;
          display: flex;
          justify-content: center;
        }

        .racoon-swiper .slide-inner {
          transition: transform 300ms ease, opacity 300ms ease;
          transform: scale(0.8);
          opacity: 0.6;
        }
        .racoon-swiper .swiper-slide-prev .slide-inner,
        .racoon-swiper .swiper-slide-next .slide-inner {
          transform: scale(0.9);
          opacity: 0.9;
        }
        .racoon-swiper .swiper-slide-active .slide-inner {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
