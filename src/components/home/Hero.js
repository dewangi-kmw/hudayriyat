// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import PhoneInput from "react-phone-input-2";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import "react-phone-input-2/lib/style.css";

// export default function Hero() {
//   const [captchaValue, setCaptchaValue] = useState(null);
//   const [phone, setPhone] = useState("");

//   const heroImages = [
//     "/images/hero-1.jpg",
//     "/images/hero-2.jpg",
//     "/images/hero-1.jpg",
//     "/images/hero-2.jpg",
//   ];

//   // DUPLICATE FIRST SLIDE FOR INFINITE EFFECT
//   const sliderImages = [...heroImages, heroImages[0]];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [enableTransition, setEnableTransition] = useState(true);

//   // AUTO SLIDE
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const nextSlide = () => {
//     setEnableTransition(true);
//     setCurrentSlide((prev) => prev + 1);
//   };

//   const prevSlide = () => {
//     if (currentSlide === 0) {
//       setEnableTransition(false);
//       setCurrentSlide(heroImages.length);

//       setTimeout(() => {
//         setEnableTransition(true);
//         setCurrentSlide(heroImages.length - 1);
//       }, 50);
//     } else {
//       setEnableTransition(true);
//       setCurrentSlide((prev) => prev - 1);
//     }
//   };

//   // RESET AFTER LAST DUPLICATE SLIDE
//   useEffect(() => {
//     if (currentSlide === heroImages.length) {
//       const timeout = setTimeout(() => {
//         setEnableTransition(false);
//         setCurrentSlide(0);
//       }, 1200);

//       return () => clearTimeout(timeout);
//     }
//   }, [currentSlide]);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* HERO CAROUSEL */}
//       {/* HERO CAROUSEL */}
//       {/* <div className="absolute inset-0 overflow-hidden">
//   <motion.div
//     animate={{
//       x: `-${currentSlide * 100}%`,
//     }}
//     transition={{
//       duration: 1.2,
//       ease: [0.76, 0, 0.24, 1],
//     }}
//     className="flex h-full w-full"
//     style={{
//       width: `${heroImages.length * 100}%`,
//     }}
//   >
//     {heroImages.map((image, index) => (
//       <div
//         key={index}
//         className="relative w-full h-full overflow-hidden flex-shrink-0"
//       >
//         <motion.img
//           src={image}
//           alt="hero"
//           animate={{
//             scale: currentSlide === index ? 1.12 : 1,
//           }}
//           transition={{
//             duration: 7,
//             ease: "linear",
//           }}
//           className="w-full h-full object-cover"
//         />
//       </div>
//     ))}
//   </motion.div>
//         </div> */}

//       {/* HERO CAROUSEL */}
//       {/* HERO CAROUSEL */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             x: `-${currentSlide * 100}vw`,
//           }}
//           transition={
//             enableTransition
//               ? {
//                   duration: 1.2,
//                   ease: [0.76, 0, 0.24, 1],
//                 }
//               : {
//                   duration: 0,
//                 }
//           }
//           className="flex h-full"
//           style={{
//             width: `${sliderImages.length * 100}vw`,
//           }}
//         >
//           {sliderImages.map((image, index) => (
//             <div
//               key={index}
//               className="relative h-full overflow-hidden flex-shrink-0"
//               style={{
//                 width: "100vw",
//               }}
//             >
//               <motion.img
//                 src={image}
//                 alt="hero"
//                 animate={{
//                   scale:
//                     currentSlide === index ||
//                     (currentSlide === heroImages.length &&
//                       index === heroImages.length)
//                       ? 1.12
//                       : 1,
//                 }}
//                 transition={{
//                   duration: 7,
//                   ease: "linear",
//                 }}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 video-overlay z-10"></div>

//       {/* LEFT ARROW */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white/20 transition-all duration-300 cursor-pointer"
//       >
//         <FaChevronLeft className="text-[18px]" />
//       </button>

//       {/* RIGHT ARROW */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 lg:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white/20 transition-all duration-300 cursor-pointer"
//       >
//         <FaChevronRight className="text-[18px]" />
//       </button>

//       {/* CONTENT */}
//       <div className="relative z-20 flex justify-center items-center">
//         <div className="w-full h-screen px-6 lg:px-20 pb-20 lg:pb-24 flex justify-center items-center">
//           <div className="w-full flex justify-center items-center">
//             {/* LEFT TEXT */}
//             <div className="w-1/3 text-white">
//               <h2 className="font-bold text-6xl mb-4">Hudayriyat Island</h2>

//               <h4 className="mb-4 text-2xl font-semibold">
//                 Abu Dhabi’s Most Exclusive Coastal Lifestyle Destination
//               </h4>

//               <h6 className="mb-3 font-semibold">
//                 Freehold for All Nationalities
//               </h6>
//             </div>

//             {/* FORM SECTION */}
//             <div className="w-2/3 flex justify-end">
//               <div className="w-1/2">
//                 <div className="bg-white rounded-md flex flex-col items-center p-8 w-full">
//                   {/* TITLE */}
//                   <div className="text-xl mb-2 tracking-wide">REQUEST</div>

//                   <div className="font-bold text-4xl text-brand-black mb-4">
//                     A CALL BACK
//                   </div>

//                   {/* INPUTS */}
//                   <div className="flex flex-col gap-3 mb-3 w-full">
//                     <input
//                       className="p-4 bg-input-grey w-full rounded-sm outline-none text-[18px] placeholder:text-[#6b7280]"
//                       placeholder="Full Name"
//                       type="text"
//                     />

//                     <input
//                       className="p-4 bg-input-grey w-full rounded-sm outline-none text-[18px] placeholder:text-[#6b7280]"
//                       placeholder="Email"
//                       type="email"
//                     />

//                     {/* PHONE INPUT */}
//                     <div className="phone-input-wrapper w-full relative z-[999]">
//                       <PhoneInput
//                         country={"in"}
//                         value={phone}
//                         onChange={setPhone}
//                         enableSearch={true}
//                         disableSearchIcon={true}
//                         countryCodeEditable={false}
//                         searchPlaceholder="Search country"
//                         inputProps={{
//                           name: "phone",
//                           required: true,
//                           placeholder: "Phone Number",
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {/* CAPTCHA + BUTTON */}
//                   <div className="w-full">
//                     {/* CAPTCHA */}
//                     <div className="mb-3 overflow-hidden rounded-sm">
//                       <ReCAPTCHA
//                         sitekey="YOUR_RECAPTCHA_SITE_KEY"
//                         onChange={(value) => setCaptchaValue(value)}
//                       />
//                     </div>

//                     {/* SUBMIT BUTTON */}
//                     <button
//                       disabled={!captchaValue}
//                       className={`p-4 rounded-sm text-white font-bold w-full transition-all duration-300 bg-brand-green`}
//                     >
//                       REQUEST NOW
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "react-phone-input-2/lib/style.css";

export default function Hero() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [phone, setPhone] = useState("");

  const heroImages = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
  ];

  // INFINITE LOOP SETUP
  const sliderImages = [...heroImages, heroImages[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setEnableTransition(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setEnableTransition(false);
      setCurrentSlide(heroImages.length);

      setTimeout(() => {
        setEnableTransition(true);
        setCurrentSlide(heroImages.length - 1);
      }, 50);
    } else {
      setEnableTransition(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // RESET LOOP
  useEffect(() => {
    if (currentSlide === heroImages.length) {
      const timeout = setTimeout(() => {
        setEnableTransition(false);
        setCurrentSlide(0);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [currentSlide]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* HERO CAROUSEL */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: `-${currentSlide * 100}vw`,
          }}
          transition={
            enableTransition
              ? {
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                }
              : {
                  duration: 0,
                }
          }
          className="flex h-full"
          style={{
            width: `${sliderImages.length * 100}vw`,
          }}
        >
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="relative h-full overflow-hidden flex-shrink-0"
              style={{
                width: "100vw",
              }}
            >
              <motion.img
                src={image}
                alt="hero"
                animate={{
                  scale:
                    currentSlide === index ||
                    (currentSlide === heroImages.length &&
                      index === heroImages.length)
                      ? 1.12
                      : 1,
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                }}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 video-overlay z-10"></div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white/30 transition-all duration-300 cursor-pointer"
      >
        <FaChevronLeft className="text-[14px] sm:text-[18px]" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white/30 transition-all duration-300 cursor-pointer"
      >
        <FaChevronRight className="text-[14px] sm:text-[18px]" />
      </button>

      {/* CONTENT */}
      <div className="relative z-30 flex justify-center items-center">
        <div className="w-full min-h-screen px-4 sm:px-6 lg:px-20 pt-28 pb-14 lg:py-24 flex justify-center items-center">
          
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 relative z-30">
            
            {/* LEFT TEXT */}
            <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
              
              <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight">
                Hudayriyat Island
              </h2>

              <h4 className="mb-4 text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
                Abu Dhabi’s Most Exclusive Coastal Lifestyle Destination
              </h4>

              <h6 className="mb-3 font-semibold text-sm sm:text-base">
                Freehold for All Nationalities
              </h6>
            </div>

            {/* FORM SECTION */}
            <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
              
              <div className="w-full sm:w-[90%] md:w-[75%] lg:w-1/2">
                
                <div className="bg-white rounded-md flex flex-col items-center p-5 sm:p-6 lg:p-8 w-full">
                  
                  {/* TITLE */}
                  <div className="text-lg sm:text-xl mb-2 tracking-wide">
                    REQUEST
                  </div>

                  <div className="font-bold text-3xl sm:text-4xl text-brand-black mb-4 text-center">
                    A CALL BACK
                  </div>

                  {/* INPUTS */}
                  <div className="flex flex-col gap-3 mb-3 w-full">
                    
                    <input
                      className="p-4 bg-input-grey w-full rounded-sm outline-none text-[16px] sm:text-[18px] placeholder:text-[#6b7280]"
                      placeholder="Full Name"
                      type="text"
                    />

                    <input
                      className="p-4 bg-input-grey w-full rounded-sm outline-none text-[16px] sm:text-[18px] placeholder:text-[#6b7280]"
                      placeholder="Email"
                      type="email"
                    />

                    {/* PHONE INPUT */}
                    <div className="phone-input-wrapper w-full relative z-[999]">
                      <PhoneInput
                        country={"in"}
                        value={phone}
                        onChange={setPhone}
                        enableSearch={true}
                        disableSearchIcon={true}
                        countryCodeEditable={false}
                        searchPlaceholder="Search country"
                        inputProps={{
                          name: "phone",
                          required: true,
                          placeholder: "Phone Number",
                        }}
                      />
                    </div>
                  </div>

                  {/* CAPTCHA + BUTTON */}
                  <div className="w-full">
                    
                    {/* CAPTCHA */}
                    <div className="mb-3 overflow-hidden rounded-sm w-full flex justify-center sm:justify-start">
                      
                      <div className="scale-[0.88] sm:scale-100 origin-center sm:origin-left">
                        <ReCAPTCHA
                          sitekey="YOUR_RECAPTCHA_SITE_KEY"
                          onChange={(value) =>
                            setCaptchaValue(value)
                          }
                        />
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      disabled={!captchaValue}
                      className="p-4 rounded-sm text-white font-bold w-full transition-all duration-300 bg-brand-green text-sm sm:text-base"
                    >
                      REQUEST NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}