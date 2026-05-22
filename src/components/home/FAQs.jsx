// // components/FaqSection.js

// import { useRef, useState } from "react";

// const faqData = [
//   {
//     question: "What is Hudayriyat Island?",
//     answer:
//       "Hudayriyat Island is a premium coastal lifestyle destination in Abu Dhabi developed by Modon Properties. It features luxury villas, Apartments, beachfront communities with world-class amenities, and freehold ownership for all nationalities.",
//   },
//   {
//     question: "Who is the developer of Hudayriyat Island?",
//     answer:
//       "Hudayriyat Island is developed by Modon Properties, one of Abu Dhabi’s leading developers focused on premium lifestyle destinations.",
//   },
//   {
//     question: "What types of properties are available on Hudayriyat Island?",
//     answer:
//       "The island offers luxury villas, waterfront homes, townhouses, and premium residential communities.",
//   },
//   {
//     question: "Are apartments available on Hudayriyat Island?",
//     answer:
//       "Yes, selected communities on Hudayriyat Island feature modern apartments with premium amenities and beachfront access.",
//   },
//   {
//     question: "What lifestyle does Hudayriyat Island offer?",
//     answer:
//       "Hudayriyat Island offers an upscale beachfront lifestyle with cycling tracks, sports facilities, beach clubs, restaurants, and luxury residences.",
//   },
//   {
//     question: "What are the main communities on Hudayriyat Island?",
//     answer:
//       "The island includes several luxury residential communities designed around waterfront living and modern architecture.",
//   },
//   {
//     question: "How close is Hudayriyat Island to major Abu Dhabi landmarks?",
//     answer:
//       "Hudayriyat Island is strategically located with quick access to central Abu Dhabi and major landmarks across the city.",
//   },
//   {
//     question: "Is Hudayriyat Island suitable for investment?",
//     answer:
//       "Yes, Hudayriyat Island is considered a strong investment opportunity due to its premium location, luxury developments, and growing demand.",
//   },
// ];

// function FAQItem({ item, isOpen, onClick }) {
//   const contentRef = useRef(null);

//   return (
//     <div className="border-b border-[#dddddd]">
//       <button
//         onClick={onClick}
//         className="w-full flex items-start gap-[22px] py-[20px] text-left"
//       >
//         {/* ICON */}
//         <div
//           className={`text-[24px] leading-none mt-[-10px] transition-all duration-300 cursor-pointer ${
//             isOpen ? "rotate-45 text-[#6AAE5D] font-bold" : "text-[#6AAE5D]"
//           }`}
//         >
//           +
//         </div>

//         {/* CONTENT */}
//         <div className="flex-1">
//           <h3
//             className={`text-[18px] leading-[1.3] font-medium tracking-[-0.02em] transition-colors duration-300 ${
//               isOpen ? "text-[#6AAE5D]" : "text-black"
//             }`}
//             style={{
//               fontFamily: "Helvetica, Arial, sans-serif",
//             }}
//           >
//             {item.question}
//           </h3>

//           <div
//             ref={contentRef}
//             style={{
//               maxHeight: isOpen
//                 ? `${contentRef.current?.scrollHeight}px`
//                 : "0px",
//             }}
//             className="overflow-hidden transition-all duration-500 ease-in-out"
//           >
//             <p
//               className="pt-[24px] pb-[6px] max-w-[1080px] text-[14px] leading-[1.6] text-[#333333]"
//               style={{
//                 fontFamily: "Helvetica, Arial, sans-serif",
//               }}
//             >
//               {item.answer}
//             </p>
//           </div>
//         </div>
//       </button>
//     </div>
//   );
// }

// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="py-[90px] lg:py-[110px]">
//       <div className="container mx-auto px-[24px] lg:px-[150px]">
//         {/* HEADING */}
//         <h2
//           className="text-center text-[26px] leading-none font-bold tracking-[-0.03em]"
//           style={{
//             fontFamily: "Helvetica, Arial, sans-serif",
//           }}
//         >
//           FAQs
//         </h2>

//         {/* FAQ LIST */}
//         <div>
//           {faqData.map((item, index) => (
//             <FAQItem
//               key={index}
//               item={item}
//               isOpen={openIndex === index}
//               onClick={() =>
//                 setOpenIndex(openIndex === index ? null : index)
//               }
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/FaqSection.js

// import { useRef, useState } from "react";

// const faqData = [
//   {
//     question: "What is Hudayriyat Island?",
//     answer:
//       "Hudayriyat Island is a premium coastal lifestyle destination in Abu Dhabi developed by Modon Properties. It features luxury villas, Apartments, beachfront communities with world-class amenities, and freehold ownership for all nationalities.",
//   },
//   {
//     question: "Who is the developer of Hudayriyat Island?",
//     answer:
//       "Hudayriyat Island is developed by Modon Properties, one of Abu Dhabi’s leading developers focused on premium lifestyle destinations.",
//   },
//   {
//     question: "What types of properties are available on Hudayriyat Island?",
//     answer:
//       "The island offers luxury villas, waterfront homes, townhouses, and premium residential communities.",
//   },
//   {
//     question: "Are apartments available on Hudayriyat Island?",
//     answer:
//       "Yes, selected communities on Hudayriyat Island feature modern apartments with premium amenities and beachfront access.",
//   },
//   {
//     question: "What lifestyle does Hudayriyat Island offer?",
//     answer:
//       "Hudayriyat Island offers an upscale beachfront lifestyle with cycling tracks, sports facilities, beach clubs, restaurants, and luxury residences.",
//   },
//   {
//     question: "What are the main communities on Hudayriyat Island?",
//     answer:
//       "The island includes several luxury residential communities designed around waterfront living and modern architecture.",
//   },
//   {
//     question: "How close is Hudayriyat Island to major Abu Dhabi landmarks?",
//     answer:
//       "Hudayriyat Island is strategically located with quick access to central Abu Dhabi and major landmarks across the city.",
//   },
//   {
//     question: "Is Hudayriyat Island suitable for investment?",
//     answer:
//       "Yes, Hudayriyat Island is considered a strong investment opportunity due to its premium location, luxury developments, and growing demand.",
//   },
// ];

// function FAQItem({ item, isOpen, onClick }) {
//   const contentRef = useRef(null);

//   return (
//     <div className="border-b border-[#dddddd]">
      
//       <button
//         onClick={onClick}
//         className="w-full flex items-start gap-[14px] sm:gap-[18px] lg:gap-[22px] py-[18px] sm:py-[20px] text-left"
//       >
        
//         {/* ICON */}
//         <div
//           className={`text-[22px] sm:text-[24px] leading-none mt-[-6px] sm:mt-[-10px] transition-all duration-300 cursor-pointer flex-shrink-0 ${
//             isOpen
//               ? "rotate-45 text-[#6AAE5D] font-bold"
//               : "text-[#6AAE5D]"
//           }`}
//         >
//           +
//         </div>

//         {/* CONTENT */}
//         <div className="flex-1">
          
//           <h3
//             className={`text-[16px] sm:text-[18px] leading-[1.4] sm:leading-[1.3] font-medium tracking-[-0.02em] transition-colors duration-300 ${
//               isOpen ? "text-[#6AAE5D]" : "text-black"
//             }`}
//             style={{
//               fontFamily: "Helvetica, Arial, sans-serif",
//             }}
//           >
//             {item.question}
//           </h3>

//           <div
//             ref={contentRef}
//             style={{
//               maxHeight: isOpen
//                 ? `${contentRef.current?.scrollHeight}px`
//                 : "0px",
//             }}
//             className="overflow-hidden transition-all duration-500 ease-in-out"
//           >
//             <p
//               className="pt-[18px] sm:pt-[24px] pb-[6px] max-w-[1080px] text-[14px] leading-[1.7] text-[#333333]"
//               style={{
//                 fontFamily: "Helvetica, Arial, sans-serif",
//               }}
//             >
//               {item.answer}
//             </p>
//           </div>
//         </div>
//       </button>
//     </div>
//   );
// }

// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="py-[70px] sm:py-[90px] lg:py-[110px]">
      
//       <div className="container mx-auto px-[20px] sm:px-[30px] lg:px-[150px]">
        
//         {/* HEADING */}
//         <h2
//           className="text-center text-[30px] sm:text-[36px] lg:text-[26px] leading-none font-bold tracking-[-0.03em] mb-4 sm:mb-6"
//           style={{
//             fontFamily: "Helvetica, Arial, sans-serif",
//           }}
//         >
//           FAQs
//         </h2>

//         {/* FAQ LIST */}
//         <div>
//           {faqData.map((item, index) => (
//             <FAQItem
//               key={index}
//               item={item}
//               isOpen={openIndex === index}
//               onClick={() =>
//                 setOpenIndex(openIndex === index ? null : index)
//               }
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/FaqSection.js

import { useRef, useState } from "react";

const faqData = [
  {
    question: "What is Hudayriyat Island?",
    answer:
      "Hudayriyat Island is a premium coastal lifestyle destination in Abu Dhabi developed by Modon Properties. It features luxury villas, Apartments, beachfront communities with world-class amenities, and freehold ownership for all nationalities.",
  },
  {
    question: "Who is the developer of Hudayriyat Island?",
    answer:
      "Hudayriyat Island is developed by Modon Properties, one of Abu Dhabi’s leading developers focused on premium lifestyle destinations.",
  },
  {
    question: "What types of properties are available on Hudayriyat Island?",
    answer:
      "The island offers luxury villas, waterfront homes, townhouses, and premium residential communities.",
  },
  {
    question: "Are apartments available on Hudayriyat Island?",
    answer:
      "Yes, selected communities on Hudayriyat Island feature modern apartments with premium amenities and beachfront access.",
  },
  {
    question: "What lifestyle does Hudayriyat Island offer?",
    answer:
      "Hudayriyat Island offers an upscale beachfront lifestyle with cycling tracks, sports facilities, beach clubs, restaurants, and luxury residences.",
  },
  {
    question: "What are the main communities on Hudayriyat Island?",
    answer:
      "The island includes several luxury residential communities designed around waterfront living and modern architecture.",
  },
  {
    question: "How close is Hudayriyat Island to major Abu Dhabi landmarks?",
    answer:
      "Hudayriyat Island is strategically located with quick access to central Abu Dhabi and major landmarks across the city.",
  },
  {
    question: "Is Hudayriyat Island suitable for investment?",
    answer:
      "Yes, Hudayriyat Island is considered a strong investment opportunity due to its premium location, luxury developments, and growing demand.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-[#dddddd]">
      
      <button
        onClick={onClick}
        className="group w-full flex items-start gap-[14px] sm:gap-[18px] lg:gap-[22px] py-[18px] sm:py-[20px] text-left cursor-pointer"
      >
        
        {/* ICON */}
        <div
          className={`text-[22px] sm:text-[24px] leading-none transition-all duration-300 flex-shrink-0 mt-[1px] ${
            isOpen
              ? "rotate-45 text-[#6AAE5D] font-bold"
              : "text-[#6AAE5D]"
          }`}
        >
          +
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          
          <h3
            className={`text-[16px] sm:text-[18px] leading-[1.4] sm:leading-[1.3] font-medium tracking-[-0.02em] transition-colors duration-300 ${
              isOpen
                ? "text-[#6AAE5D]"
                : "text-black group-hover:text-[#6AAE5D]"
            }`}
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            {item.question}
          </h3>

          <div
            ref={contentRef}
            style={{
              maxHeight: isOpen
                ? `${contentRef.current?.scrollHeight}px`
                : "0px",
            }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <p
              className="pt-[18px] sm:pt-[24px] pb-[6px] max-w-[1080px] text-[14px] leading-[1.7] text-[#333333]"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[70px] sm:py-[90px] lg:py-[110px]">
      
      <div className="container mx-auto px-[20px] sm:px-[30px] lg:px-[150px]">
        
        {/* HEADING */}
        <h2
          className="text-center text-[30px] sm:text-[36px] lg:text-[26px] leading-none font-bold tracking-[-0.03em] mb-4 sm:mb-6"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          FAQs
        </h2>

        {/* FAQ LIST */}
        <div>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}