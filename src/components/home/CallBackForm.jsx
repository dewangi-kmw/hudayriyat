// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import ReCAPTCHA from "react-google-recaptcha";

// const CallBackForm = () => {
//       const [captchaValue, setCaptchaValue] = useState(null);
//       const [phone, setPhone] = useState("");
//   return (
//     <section className="py-10 bg-brand-grey-1">
//       <div className="container m-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 px-20 py-2">
//           {/* Form  */}
//           <div className="border border-brand-green p-2 rounded-lg w-11/12" >
//           <div className="bg-white rounded-md flex flex-col items-center p-8 w-full">
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
//           </div>

//           {/* Woman */}
//           <div className="flex justify-center">

//                     <img src="/images/form-girl.webp" alt="form-girl" className="h-[27rem]"/>

//                 </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallBackForm;

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";

const CallBackForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [phone, setPhone] = useState("");

  return (
    <section className="py-10 lg:py-14 bg-brand-grey-1 overflow-hidden">
      
      <div className="container m-auto px-4 sm:px-6 lg:px-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center px-0 sm:px-6 lg:px-20 py-2">
          
          {/* FORM */}
          <div className="border border-brand-green p-2 rounded-lg w-full lg:w-11/12">
            
            <div className="bg-white rounded-md flex flex-col items-center p-5 sm:p-8 w-full">
              
              {/* TITLE */}
              <div className="text-lg sm:text-xl mb-2 tracking-wide">
                REQUEST
              </div>

              <div className="font-bold text-[32px] sm:text-4xl text-brand-black mb-4 text-center leading-tight">
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
                <div className="mb-3 overflow-hidden rounded-sm scale-[0.92] sm:scale-100 origin-left">
                  <ReCAPTCHA
                    sitekey="6LfqJPcsAAAAAIsiPQlWIonGRYz6QwNwP80Tm_V8"
                    onChange={(value) => setCaptchaValue(value)}
                  />
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

          {/* WOMAN IMAGE */}
          <div className="flex justify-center lg:justify-end">
            
            <img
              src="/images/form-girl.webp"
              alt="form-girl"
              className="h-[20rem] sm:h-[24rem] lg:h-[27rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallBackForm;
