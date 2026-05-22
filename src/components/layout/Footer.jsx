// components/Footer.js

import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaTiktok,
    FaLinkedinIn,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-[#f8f9fa] text-center py-10">
        {/* TOP SECTION */}
        <div className="max-w-[1320px] mx-auto px-4 py-6 border-b border-border-grey">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            
            {/* NAVIGATION */}
            <div className="w-full lg:w-8/12 mb-8 lg:mb-0">
              <ul className="flex flex-wrap items-center justify-center gap-24">
                <li>
                  <a
                    href="#hero"
                    className="text-brand-green text-[16px] hover:text-[#6aae5d] transition-colors duration-300 font-semibold"
                  >
                    Home
                  </a>
                </li>
  
                <li>
                  <a
                    href="#alt-services"
                    className="text-brand-green text-[16px] hover:text-[#6aae5d] transition-colors duration-300 font-semibold"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
  
            {/* SOCIAL ICONS */}
            <div className="w-full lg:w-4/12">
              <div className="flex items-center justify-center gap-3">
                
                <a
                  href="https://hudayriyat-island.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[42px] h-[42px] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={16} />
                </a>
  
                <a
                  href="https://hudayriyat-island.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[42px] h-[42px] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaFacebookF size={15} />
                </a>
  
                <a
                  href="https://hudayriyat-island.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[42px] h-[42px] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaYoutube size={16} />
                </a>
  
                <a
                  href="https://hudayriyat-island.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[42px] h-[42px] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaTiktok size={15} />
                </a>
  
                <a
                  href="https://hudayriyat-island.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[42px] h-[42px] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* BOTTOM SECTION */}
        <div className="max-w-[1320px] mx-auto px-4 mt-10 pb-5">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-8">
            
            {/* COPYRIGHT */}
            <div className="w-full lg:w-4/12">
            <div class="text-center p-3 text-dark font-medium">
                            © 2026 Copyright:
                            <a class="text-dark" href="#" rel="nofollow" target="_blank"> hudayriyat-island.com – This is an independent marketing website and is not the official site.
                            </a>
                        </div>
            </div>
  
            {/* LOGO */}
            <div className="w-full lg:w-4/12">
              <div className="flex justify-center">
                <a
                  href="https://hudayriyat-island.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://hudayriyat-island.com/storage/general-settings/July2025/onnqk8meRt93FNXoO2rl.png"
                    alt="Modon Developer Logo"
                    width={100}
                    height={100}
                    loading="lazy"
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
  
            {/* TERMS */}
           {/* TERMS */}
<div className="w-full lg:w-4/12">
  <ul className="flex items-center justify-center lg:justify-between px-0 lg:px-10 gap-x-6 text-brand-green font-medium text-center">
                <li>
                  <a
                    href="https://hudayriyat-island.com"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    Terms & Conditions
                  </a>
                </li>
  
                <li>
                  <a
                    href="https://hudayriyat-island.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6aae5d] transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }