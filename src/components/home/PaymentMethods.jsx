// import React from "react";

// const PaymentMethods = () => {
//   return (
//     <section className="py-10">
//       <div className="container m-auto">
//         <div className="mb-5 grid grid-cols-1">
//           <h2 className="text-center font-bold text-[26px] w-full mb-2.5">
//             Hudayriyat Island Payment Methods
//           </h2>

//           <p class="text-center font-[14px]">
//             We accept all the following payment methods
//           </p>
//         </div>

//         <div className="grid grid-cols-4 gap-4 pt-3.5">
//           {/* Tile - 1 */}
//           <div className="flex flex-col gap-2 py-4 px-3 items-center justify-center border border-border-grey rounded-md">
//             <img
//               alt="accepted payment icon"
//               src="https://hudayriyat-island.com/storage/accepted-payments/April2023/CQPxcLmYyMdLwrBRkDgq.png"
//               width="50"
//               height="50"
//               loading="lazy"
//             />

//             <div className="text-xl font-medium">Card</div>
//           </div>

//           {/* Tile - 2 */}
//           <div className="flex flex-col gap-2 py-4 px-3 items-center justify-center border border-border-grey rounded-md">
//           <img alt="accepted payment icon" src="https://hudayriyat-island.com/storage/accepted-payments/April2023/HjGet9T5UHgDAOLrDONm.png" width="50" height="50" loading="lazy"/>

//             <div className="text-xl font-medium">Cheque</div>
//           </div>

//           {/* Tile - 3 */}
//           <div className="flex flex-col gap-2 py-4 px-3 items-center justify-center border border-border-grey rounded-md">
//           <img alt="accepted payment icon" src="https://hudayriyat-island.com/storage/accepted-payments/April2023/aSr5FTNmpoeSn9RXDo8s.png" width="50" height="50" loading="lazy"/>
//             <div className="text-xl font-medium">Cash</div>
//           </div>

//           {/* Tile - 4  */}
//           <div className="flex flex-col gap-2 py-4 px-3 items-center justify-center border border-border-grey rounded-md">
//           <img alt="accepted payment icon" src="https://hudayriyat-island.com/storage/accepted-payments/April2023/S5hsajsQpuoFO8huf1mi.png" width="50" height="50" loading="lazy"/>

//             <div className="text-xl font-medium">Bitcoin</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PaymentMethods;


import React from "react";

const PaymentMethods = () => {
  return (
    <section className="py-10 lg:py-14">
      
      <div className="container m-auto px-4 sm:px-6 lg:px-0">
        
        {/* HEADING */}
        <div className="mb-5 grid grid-cols-1">
          
          <h2 className="text-center font-bold text-[28px] sm:text-[34px] lg:text-[26px] leading-tight w-full mb-2.5">
            Hudayriyat Island Payment Methods
          </h2>

          <p className="text-center text-[14px]">
            We accept all the following payment methods
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3.5">
          
          {/* Tile - 1 */}
          <div className="flex flex-col gap-2 py-5 px-3 items-center justify-center border border-border-grey rounded-md">
            
            <img
              alt="accepted payment icon"
              src="https://hudayriyat-island.com/storage/accepted-payments/April2023/CQPxcLmYyMdLwrBRkDgq.png"
              width="50"
              height="50"
              loading="lazy"
              className="object-contain"
            />

            <div className="text-lg sm:text-xl font-medium text-center">
              Card
            </div>
          </div>

          {/* Tile - 2 */}
          <div className="flex flex-col gap-2 py-5 px-3 items-center justify-center border border-border-grey rounded-md">
            
            <img
              alt="accepted payment icon"
              src="https://hudayriyat-island.com/storage/accepted-payments/April2023/HjGet9T5UHgDAOLrDONm.png"
              width="50"
              height="50"
              loading="lazy"
              className="object-contain"
            />

            <div className="text-lg sm:text-xl font-medium text-center">
              Cheque
            </div>
          </div>

          {/* Tile - 3 */}
          <div className="flex flex-col gap-2 py-5 px-3 items-center justify-center border border-border-grey rounded-md">
            
            <img
              alt="accepted payment icon"
              src="https://hudayriyat-island.com/storage/accepted-payments/April2023/aSr5FTNmpoeSn9RXDo8s.png"
              width="50"
              height="50"
              loading="lazy"
              className="object-contain"
            />

            <div className="text-lg sm:text-xl font-medium text-center">
              Cash
            </div>
          </div>

          {/* Tile - 4 */}
          <div className="flex flex-col gap-2 py-5 px-3 items-center justify-center border border-border-grey rounded-md">
            
            <img
              alt="accepted payment icon"
              src="https://hudayriyat-island.com/storage/accepted-payments/April2023/S5hsajsQpuoFO8huf1mi.png"
              width="50"
              height="50"
              loading="lazy"
              className="object-contain"
            />

            <div className="text-lg sm:text-xl font-medium text-center">
              Bitcoin
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;