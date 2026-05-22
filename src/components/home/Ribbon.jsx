// import React from 'react'

// const Ribbon = () => {
//   return (
//     <div className='w-full py-12 px-14 flex bg-brand-grey'>

//         {/* Item - 1 */}
//         <div className='w-1/6 flex gap-2 items-center justify-center mb-4 mt-1'>

//             <div className='rounded-full border border-brand-green p-2 w-12 h-12'>
//             <img src="/images/icon.webp" className='h-8 w-8'/>
//             </div>


//             <div className='flex flex-col gap-3'>

//                 <div className='font-bold'>
//                     Developer
//                 </div>

//                 <div className='text-sm'>
//                 Modon Properties
//                 </div>

//             </div>



//         </div>
//         {/* Item - 2 */}
//         <div className='w-1/6 flex gap-2 items-center justify-center mb-4 mt-1'>

//             <div className='rounded-full border border-brand-green p-2 w-12 h-12'>
//             <img src="/images/icon.webp" className='h-8 w-8'/>
//             </div>


//             <div className='flex flex-col gap-3'>

//                 <div className='font-bold'>
//                 Price From
//                 </div>

//                 <div className='text-sm'>
//                 AED 6,000,000
//                 </div>

//             </div>



//         </div>
//         {/* Item - 3 */}
//         <div className='w-1/6 flex gap-2 items-center justify-center mb-4 mt-1'>

//             <div className='rounded-full border border-brand-green p-2 w-12 h-12'>
//             <img src="/images/icon.webp" className='h-8 w-8'/>
//             </div>


//             <div className='flex flex-col gap-3'>

//                 <div className='font-bold'>
//                 Project Status
//                 </div>

//                 <div className='text-sm'>
//                 Off-Plan
//                 </div>

//             </div>



//         </div>
//         {/* Item - 4 */}
//         <div className='w-1/6 flex gap-2 items-center justify-center mb-4 mt-1'>

//             <div className='rounded-full border border-brand-green p-2 w-12 h-12'>
//             <img src="/images/icon.webp" className='h-8 w-8'/>
//             </div>


//             <div className='flex flex-col gap-3'>

//                 <div className='font-bold'>
//                 Property Type
//                 </div>

//                 <div className='text-sm'>
//                 Apartments and Villas
//                 </div>

//             </div>



//         </div>
//         {/* Item - 5 */}
//         <div className='w-1/6 flex gap-2 items-center justify-center mb-4 mt-1'>

//             <div className='rounded-full border border-brand-green p-2 w-12 h-12'>
//             <img src="/images/icon.webp" className='h-8 w-8'/>
//             </div>


//             <div className='flex flex-col gap-3'>

//                 <div className='font-bold'>
//                 Bedrooms
//                 </div>

//                 <div className='text-sm'>
//                 3 to 8 bedrooms
//                 </div>

//             </div>



//         </div>
//         {/* Item - 6 */}
//         <div className='w-1/6 flex gap-2 items-center justify-center mb-4 mt-1'>

//             <div className='rounded-full border border-brand-green p-2 w-12 h-12'>
//             <img src="/images/icon.webp" className='h-8 w-8'/>
//             </div>


//             <div className='flex flex-col gap-3'>

//                 <div className='font-bold'>
//                 Ownership
//                 </div>

//                 <div className='text-sm'>
//                 For All Nationalities
//                 </div>

//             </div>



//         </div>

//     </div>
//   )
// }

// export default Ribbon

// RESPONSIVE
// import React from "react";

// const Ribbon = () => {
//   const ribbonItems = [
//     {
//       title: "Developer",
//       value: "Modon Properties",
//     },
//     {
//       title: "Price From",
//       value: "AED 6,000,000",
//     },
//     {
//       title: "Project Status",
//       value: "Off-Plan",
//     },
//     {
//       title: "Property Type",
//       value: "Apartments and Villas",
//     },
//     {
//       title: "Bedrooms",
//       value: "3 to 8 bedrooms",
//     },
//     {
//       title: "Ownership",
//       value: "For All Nationalities",
//     },
//   ];

//   return (
//     <div className="w-full bg-brand-grey py-10 lg:py-12 px-4 sm:px-6 lg:px-14">
      
//       {/* DESKTOP + TABLET */}
//       <div className="hidden md:flex flex-wrap lg:flex-nowrap">
//         {ribbonItems.map((item, index) => (
//           <div
//             key={index}
//             className="w-1/2 lg:w-1/6 flex gap-3 items-center justify-start lg:justify-center mb-6 lg:mb-4 mt-1 px-2"
//           >
//             {/* ICON */}
//             <div className="rounded-full border border-brand-green p-2 w-12 h-12 flex items-center justify-center flex-shrink-0">
//               <img
//                 src="/images/icon.webp"
//                 className="h-8 w-8 object-contain"
//                 alt="icon"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="flex flex-col gap-1">
//               <div className="font-bold text-sm lg:text-base">
//                 {item.title}
//               </div>

//               <div className="text-xs lg:text-sm leading-relaxed">
//                 {item.value}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MOBILE */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:hidden">
//         {ribbonItems.map((item, index) => (
//           <div
//             key={index}
//             className="flex gap-3 items-center p-4"
//           >
//             {/* ICON */}
//             <div className="rounded-full border border-brand-green p-2 w-12 h-12 flex items-center justify-center flex-shrink-0">
//               <img
//                 src="/images/icon.webp"
//                 className="h-8 w-8 object-contain"
//                 alt="icon"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="flex flex-col gap-1">
//               <div className="font-bold text-sm">
//                 {item.title}
//               </div>

//               <div className="text-xs leading-relaxed">
//                 {item.value}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ribbon;

import React from "react";

const Ribbon = () => {
  const ribbonItems = [
    {
      title: "Developer",
      value: "Modon Properties",
    },
    {
      title: "Price From",
      value: "AED 6,000,000",
    },
    {
      title: "Project Status",
      value: "Off-Plan",
    },
    {
      title: "Property Type",
      value: "Apartments and Villas",
    },
    {
      title: "Bedrooms",
      value: "3 to 8 bedrooms",
    },
    {
      title: "Ownership",
      value: "For All Nationalities",
    },
  ];

  return (
    <div className="w-full bg-brand-grey py-10 lg:py-12 px-4 sm:px-6 lg:px-14">
      
      {/* DESKTOP + TABLET */}
      <div className="hidden md:flex flex-wrap lg:flex-nowrap">
        {ribbonItems.map((item, index) => (
          <div
            key={index}
            className="w-1/2 lg:w-1/6 flex gap-3 items-center justify-start lg:justify-center mb-6 lg:mb-4 mt-1 px-2"
          >
            {/* ICON */}
            <div className="rounded-full border border-brand-green p-2 w-12 h-12 flex items-center justify-center flex-shrink-0">
              <img
                src="/images/icon.webp"
                className="h-8 w-8 object-contain"
                alt="icon"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-1">
              <div className="font-bold text-sm lg:text-base">
                {item.title}
              </div>

              <div className="text-xs lg:text-sm leading-relaxed">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="grid grid-cols-2 gap-y-5 gap-x-3 md:hidden">
        {ribbonItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center justify-start"
          >
            {/* ICON */}
            <div className="rounded-full border border-brand-green p-2 w-12 h-12 flex items-center justify-center flex-shrink-0">
              <img
                src="/images/icon.webp"
                className="h-8 w-8 object-contain"
                alt="icon"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-1">
              <div className="font-bold text-sm leading-tight">
                {item.title}
              </div>

              <div className="text-xs leading-relaxed">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ribbon;