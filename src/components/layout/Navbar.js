// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (mobileMenu) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [mobileMenu]);

//   const navLinks = [
//     "Home",
//     "Communities",
//     "Gallery",
//     "FAQ",
//     "Contact",
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${
//           scrolled
//             ? "bg-black/40 nav-blur"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1600px] mx-auto px-6 lg:px-20 flex items-center justify-between">
          
//           {/* LOGO */}
//           <Link href="/">
//             <img
//               src="/images/logo.webp"
//               alt="logo"
//               className="h-10 md:h-[60px] object-contain cursor-pointer"
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {navLinks.map((item, index) => (
//               <Link
//                 href="/"
//                 key={index}
//                 className="text-white text-sm tracking-tight font-semibold uppercase hover:border-b-2 pb-1 hover:border-brand-green transition-all transform duration-300"
//               >
//                 {item}
//               </Link>
//             ))}

//             <div className="uppercase text-white rounded-sm font-semibold bg-brand-green p-1">
//                 List Your Property
//             </div>
//           </nav>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setMobileMenu(true)}
//             className="lg:hidden text-white text-4xl"
//           >
//             <HiOutlineMenuAlt3 />
//           </button>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed inset-0 bg-black z-[999] transition-all duration-500 ${
//           mobileMenu
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         }`}
//       >
//         <div className="flex justify-between items-center p-6">
//           <img
//             src="/images/logo.svg"
//             className="h-10"
//           />

//           <button
//             onClick={() => setMobileMenu(false)}
//             className="text-white text-4xl"
//           >
//             <IoClose />
//           </button>
//         </div>

//         <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
//           {navLinks.map((item, index) => (
//             <Link
//               href="/"
//               key={index}
//               onClick={() => setMobileMenu(false)}
//               className="text-white text-3xl uppercase tracking-[0.15em]"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


// WOrking code
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // STOP BODY SCROLL WHEN MOBILE MENU OPENS
//   useEffect(() => {
//     if (mobileMenu) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [mobileMenu]);

//   const navLinks = [
//     "Home",
//     "Communities",
//     "Gallery",
//     "FAQ",
//     "Contact",
//   ];

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 py-4 ${
//           scrolled
//             ? "bg-black/40 nav-blur"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
          
//           {/* LOGO */}
//           <Link href="/">
//             <img
//               src="/images/logo.webp"
//               alt="logo"
//               className="h-9 sm:h-10 md:h-[52px] lg:h-[60px] object-contain cursor-pointer transition-all duration-300"
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
//             {navLinks.map((item, index) => (
//               <Link
//                 href="/"
//                 key={index}
//                 className="text-white text-xs xl:text-sm tracking-tight font-semibold uppercase hover:border-b-2 pb-1 hover:border-brand-green transition-all duration-300"
//               >
//                 {item}
//               </Link>
//             ))}

//             <button className="uppercase text-white rounded-sm font-semibold bg-brand-green px-4 py-2 text-sm hover:opacity-90 transition-all duration-300">
//               List Your Property
//             </button>
//           </nav>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMobileMenu(true)}
//             className="lg:hidden text-white text-3xl sm:text-4xl"
//           >
//             <HiOutlineMenuAlt3 />
//           </button>
//         </div>
//       </header>

//       {/* MOBILE MENU OVERLAY */}
//       <div
//         className={`fixed inset-0 bg-black z-[999] transition-all duration-500 lg:hidden ${
//           mobileMenu
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         }`}
//       >
//         {/* TOP BAR */}
//         <div className="flex justify-between items-center px-4 sm:px-6 py-5">
//           <img
//             src="/images/logo.webp"
//             alt="logo"
//             className="h-9 sm:h-10 object-contain"
//           />

//           <button
//             onClick={() => setMobileMenu(false)}
//             className="text-white text-4xl"
//           >
//             <IoClose />
//           </button>
//         </div>

//         {/* MOBILE NAV LINKS */}
//         <div
//           className={`flex flex-col items-center justify-center h-[calc(100vh-90px)] gap-6 sm:gap-8 transition-all duration-500 ${
//             mobileMenu
//               ? "translate-y-0 opacity-100"
//               : "translate-y-10 opacity-0"
//           }`}
//         >
//           {navLinks.map((item, index) => (
//             <Link
//               href="/"
//               key={index}
//               onClick={() => setMobileMenu(false)}
//               className="text-white text-2xl sm:text-3xl uppercase tracking-[0.15em] transition-all duration-300 hover:text-brand-green"
//             >
//               {item}
//             </Link>
//           ))}

//           {/* MOBILE CTA */}
//           <button className="uppercase text-white rounded-sm font-semibold bg-brand-green px-6 py-3 text-sm tracking-wide mt-4">
//             List Your Property
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // STOP BODY SCROLL WHEN MOBILE MENU OPENS
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  const navLinks = [
    "Home",
    "Communities",
    "Gallery",
    "FAQ",
    "Contact",
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 py-4 ${
          scrolled ? "bg-black/40 nav-blur" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/">
            <img
              src="/images/logo.webp"
              alt="logo"
              className="h-9 sm:h-10 md:h-[52px] lg:h-[60px] object-contain cursor-pointer transition-all duration-300"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((item, index) => (
              <Link
                href="/"
                key={index}
                className="text-white text-xs xl:text-sm tracking-tight font-semibold uppercase hover:border-b-2 pb-1 hover:border-brand-green transition-all duration-300"
              >
                {item}
              </Link>
            ))}

            <button className="uppercase text-white rounded-sm font-semibold bg-brand-green px-4 py-2 text-sm hover:opacity-90 transition-all duration-300">
              List Your Property
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden text-white text-[34px] relative z-[1100]"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
<div
  className={`fixed inset-0 z-[9999] lg:hidden ${
    mobileMenu ? "pointer-events-auto" : "pointer-events-none"
  }`}
>
  {/* BACKDROP */}
  <div
    onClick={() => setMobileMenu(false)}
    className={`absolute inset-0 bg-black/70 backdrop-blur-[3px] transition-all duration-500 ${
      mobileMenu ? "opacity-100" : "opacity-0"
    }`}
  ></div>

  {/* SLIDE MENU */}
  <div
    className={`absolute top-0 right-0 h-full w-[85%] sm:w-[72%] bg-[#0b0b0b] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
      mobileMenu ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* TOP BAR */}
    <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
      <img
        src="/images/logo.webp"
        alt="logo"
        className="h-10 object-contain"
      />

      <button
        onClick={() => setMobileMenu(false)}
        className="text-white text-[36px] leading-none"
      >
        <IoClose />
      </button>
    </div>

    {/* NAVIGATION */}
    <div className="flex flex-col pt-8">
      {navLinks.map((item, index) => (
        <Link
          href="/"
          key={index}
          onClick={() => setMobileMenu(false)}
          className={`border-b border-white/10 px-6 py-5 text-white uppercase text-[15px] tracking-[0.18em] font-medium transition-all duration-700 hover:text-brand-green ${
            mobileMenu
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 90}ms`,
          }}
        >
          {item}
        </Link>
      ))}

      {/* CTA */}
      <div
        className={`px-6 mt-8 transition-all duration-700 ${
          mobileMenu
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        style={{
          transitionDelay: "450ms",
        }}
      >
        <button className="w-full bg-brand-green text-white uppercase tracking-[0.15em] text-sm font-semibold py-4 rounded-sm">
          List Your Property
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}