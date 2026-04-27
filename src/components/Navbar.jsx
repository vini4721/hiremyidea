import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { name: "Solutions", hasDropdown: true },
    { name: "Features", hasDropdown: false },
    { name: "Pricing", hasDropdown: false },
    { name: "Blog", hasDropdown: true },
    { name: "Restaurants", hasDropdown: false },
    { name: "Food", hasDropdown: true },
  ];

  return (
    <div className="w-full z-[60] flex flex-row items-center justify-between sticky top-0 bg-transparent px-2 lg:px-4 py-1">
      <div className="flex flex-1 items-center justify-between">
        
        {/* Logo */}
        <a aria-label="Return to homepage" className="relative z-20 flex items-center space-x-2 text-sm font-normal text-black transition-opacity hover:opacity-80" href="/">
<svg xmlns="http://www.w3.org/2000/svg" width="235" height="43" viewBox="0 0 235 43" fill="none" className="w-60 md:w-70 h-14">
  <path d="M51.3794 22.8744C50.7456 22.6747 46.7038 24.7708 46.4888 25.6298C46.2737 26.4887 54.0113 42.1087 54.7547 42.4371C55.498 42.7654 58.468 42.7291 58.8188 42.4371C59.1695 42.145 67.2049 26.4956 66.9432 25.6298C66.6816 24.7638 62.7917 21.8492 61.5307 22.8744C60.2698 23.8996 56.4767 33.0691 56.4767 33.0691C56.4767 33.0691 52.0133 23.0741 51.3794 22.8744Z" fill="#AEB93E"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M75.784 34.6549C74.9453 34.6396 74.1819 34.6257 73.5794 34.6257C73.5794 35.1707 73.8896 36.1295 76.0495 36.551C77.4942 36.8329 79.4763 36.2989 80.783 35.947C81.4298 35.7728 81.9112 35.643 82.0796 35.6792C82.5881 35.7881 84.9857 38.8758 84.1137 40.5468C83.2419 42.2178 73.325 44.361 69.4745 40.1109C65.624 35.8608 65.5514 30.4845 68.1668 26.852C70.7824 23.2194 73.979 22.7109 76.3402 22.7109C78.7012 22.7109 81.6239 23.0979 84.1137 26.2344C86.6036 29.3712 84.4095 34.1559 83.4599 34.4078C82.0959 34.7696 78.5345 34.7049 75.784 34.6549ZM73.5793 31.1021C73.7851 30.2787 74.6744 28.7733 76.558 28.632C78.9653 28.4514 78.709 30.1096 78.5748 30.9787C78.5681 31.0219 78.5616 31.0632 78.5559 31.1021H73.5793Z" fill="#AEB93E"></path>
  <path d="M32.4408 13.3464C32.0595 12.6154 26.9215 13.2964 26.636 13.7735C26.3506 14.2505 27.3026 41.5301 27.4797 41.8046C27.657 42.079 37.0964 42.036 37.3851 41.8046C37.6739 41.5731 37.7469 36.9571 37.3851 36.5275C37.0234 36.0979 32.8783 36.1003 32.8783 36.1003C32.8783 36.1003 32.8219 14.0773 32.4408 13.3464Z" fill="#AEB93E"></path>
  <path d="M44.7833 23.9464C43.9394 23.3245 39.7642 23.1024 38.9202 23.9464C38.0763 24.7903 38.3872 40.6473 38.9202 41.58C39.4532 42.5128 43.9394 42.2907 44.7833 41.58C45.6273 40.8693 45.6273 24.5682 44.7833 23.9464Z" fill="#AEB93E"></path>
  <path d="M44.7833 14.607C43.9394 13.9851 39.7642 13.7631 38.9202 14.607C38.0763 15.4508 38.3872 19.8595 38.9202 20.7923C39.4532 21.725 43.9394 21.503 44.7833 20.7923C45.6273 20.0816 45.6273 15.2288 44.7833 14.607Z" fill="#AEB93E"></path>
  <path d="M11.6445 7.9541C12.4104 9.37799 12.8738 10.4285 12.7638 12.2955" stroke="#B47E54" strokeWidth="1.74943" strokeLinecap="round"></path>
  <path d="M25.1663 27.0132C25.1663 35.8274 22.081 42.9728 12.5992 42.9728C3.1175 42.9728 0.0322266 35.8274 0.0322266 27.0132C0.0322266 18.1991 7.69597 12.3589 12.5992 12.3589C17.5025 12.3589 25.1663 18.1991 25.1663 27.0132Z" fill="#AEB93E"></path>
  <path d="M25.1668 27.0132C25.1668 35.8272 22.0816 42.9726 12.5998 42.9726C8.59668 42.9726 5.73372 41.6989 3.76172 39.5639C6.2414 40.6582 9.69106 41.6785 13.4808 41.3384C17.2705 40.9983 23.0118 39.5639 25.1668 27.0132Z" fill="black" fillOpacity="0.17"></path>
  <path d="M22.2615 1.75041C21.7345 0.808721 17.9008 0.622276 15.7399 1.7504C13.5792 2.87853 12.5756 5.55323 12.7304 7.92803C13.9888 8.30191 15.5759 8.67554 18.2322 7.56102C20.8882 6.44651 22.6101 3.11565 22.2615 1.75041Z" fill="#AEB93E"></path>
  <path d="M20.5462 2.678C20.721 2.20308 16.6358 6.00599 13.0654 7.26714C13.0654 7.26714 15.7484 6.79644 17.2876 5.70094C18.8267 4.60545 20.2372 3.5175 20.5462 2.678Z" fill="#8F9838"></path>
  <path d="M5.94531 23.5363C5.94531 22.4632 6.81526 21.5933 7.8884 21.5933C8.96155 21.5933 9.83151 22.4632 9.83151 23.5363V24.0836C9.83151 25.1567 8.96155 26.0266 7.8884 26.0266C6.81526 26.0266 5.94531 25.1567 5.94531 24.0836V23.5363Z" fill="#2D2D2D"></path>
  <path d="M15.3652 23.5363C15.3652 22.4632 16.2351 21.5933 17.3083 21.5933C18.3814 21.5933 19.2514 22.4632 19.2514 23.5363V24.0836C19.2514 25.1567 18.3814 26.0266 17.3083 26.0266C16.2351 26.0266 15.3652 25.1567 15.3652 24.0836V23.5363Z" fill="#2D2D2D"></path>
  <path d="M11.168 25.903C11.4712 26.3679 11.9867 26.6672 12.6389 26.6672C13.4864 26.6672 13.8868 26.378 14.2133 25.8237" stroke="#2D2D2D" strokeWidth="0.728929" strokeLinecap="round"></path>
  <path d="M8.89323 23.2728C9.19778 23.2728 9.44467 23.0259 9.44467 22.7214C9.44467 22.4168 9.19778 22.1699 8.89323 22.1699C8.58868 22.1699 8.3418 22.4168 8.3418 22.7214C8.3418 23.0259 8.58868 23.2728 8.89323 23.2728Z" fill="#D9D9D9"></path>
  <path d="M18.3249 23.2728C18.6294 23.2728 18.8763 23.0259 18.8763 22.7214C18.8763 22.4168 18.6294 22.1699 18.3249 22.1699C18.0203 22.1699 17.7734 22.4168 17.7734 22.7214C17.7734 23.0259 18.0203 23.2728 18.3249 23.2728Z" fill="#D9D9D9"></path>
</svg>
</a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex flex-row items-center justify-center gap-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a
                href="#"
                className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold transition-all rounded-lg
                  ${hoveredMenu === item.name ? "bg-black/5 text-gray-900" : "text-gray-600 hover:bg-black/5 hover:text-gray-900"}
                `}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${hoveredMenu === item.name ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              <AnimatePresence>
                {hoveredMenu === item.name && item.hasDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute top-[130%] bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[1.5rem] p-5 border border-gray-100 overflow-hidden ${
                      item.name === "Solutions" ? "w-[750px] -left-[250px]" :
                      item.name === "Blog" ? "w-[800px] -left-[350px]" :
                      item.name === "Food" ? "w-[600px] -left-[250px]" :
                      "w-72 left-0"
                    }`}
                  >
                    {item.name === "Solutions" && (
                      <div className="flex gap-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 flex-1">
                          <div className="flex items-start gap-4 p-3 hover:bg-[#F5FAF6] rounded-xl transition-colors cursor-pointer group">
                            <span className="text-3xl mt-1 group-hover:scale-110 transition-transform origin-center">🥜</span>
                            <div>
                              <h4 className="text-[14px] font-bold text-gray-900 mb-1">Allergy Scanning</h4>
                              <p className="text-[13px] text-gray-500 leading-relaxed">Scan groceries and even bottled water to reveal hidden ingredients</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 p-3 hover:bg-[#F5FAF6] rounded-xl transition-colors cursor-pointer group">
                            <span className="text-3xl mt-1 group-hover:scale-110 transition-transform origin-center">🌾</span>
                            <div>
                              <h4 className="text-[14px] font-bold text-gray-900 mb-1">Gluten Free Scanning</h4>
                              <p className="text-[13px] text-gray-500 leading-relaxed">Wheat, barley, rye, or their derivatives, the scanner flags any gluten-containing ingredients</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 p-3 hover:bg-[#F5FAF6] rounded-xl transition-colors cursor-pointer group">
                            <span className="text-3xl mt-1 group-hover:scale-110 transition-transform origin-center">🥛</span>
                            <div>
                              <h4 className="text-[14px] font-bold text-gray-900 mb-1">Dairy and Lactose Scanning</h4>
                              <p className="text-[13px] text-gray-500 leading-relaxed">Detect common dairy-derived ingredients like casein, whey, lactose, and more</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 p-3 hover:bg-[#F5FAF6] rounded-xl transition-colors cursor-pointer group">
                            <span className="text-3xl mt-1 group-hover:scale-110 transition-transform origin-center">✅</span>
                            <div>
                              <h4 className="text-[14px] font-bold text-gray-900 mb-1">Ingredient Checking</h4>
                              <p className="text-[13px] text-gray-500 leading-relaxed">Decode complex ingredient labels in seconds, with easy-to-understand alerts.</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-[260px] shrink-0 relative rounded-xl overflow-hidden group cursor-pointer shadow-sm">
                          <img src="/assets/external/bcce9450.jpg" alt="Farm" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-5">
                            <div>
                              <h4 className="text-white font-bold text-[16px] leading-tight">Modern-Day Miracle in Salinas, California</h4>
                              <div className="flex items-center text-white/90 text-sm mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Read story <ArrowRight className="ml-1" size={16} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.name === "Blog" && (
                      <div className="grid grid-cols-2 gap-6 p-2">
                        <div className="flex gap-5 group cursor-pointer hover:bg-gray-50 p-3 rounded-2xl transition-colors">
                          <div className="w-[180px] h-[160px] rounded-xl overflow-hidden shrink-0 shadow-sm">
                            <img src="/assets/external/bcce9450.jpg" alt="Farm" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-[16px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#2E9D57] transition-colors">Modern-Day Miracle in Salinas, California</h4>
                            <p className="text-[13px] text-gray-500 line-clamp-3 leading-relaxed">One author's journey from faith-based organic advocacy to witnessing a...</p>
                          </div>
                        </div>
                        <div className="flex gap-5 group cursor-pointer hover:bg-gray-50 p-3 rounded-2xl transition-colors">
                          <div className="w-[180px] h-[160px] rounded-xl overflow-hidden shrink-0 shadow-sm">
                            <img src="/assets/external/5e8d56c9.jpg" alt="Eggs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-[16px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#2E9D57] transition-colors">We Bought Eggs From Every Store... What We Discovered About 'Pasture-Free,' 'Free-Range,' and 'Cage-Free' Will SHOCK You!</h4>
                            <p className="text-[13px] text-gray-500 line-clamp-3 leading-relaxed">Not all eggs are created equal. We decoded the confusing labels on egg...</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.name === "Food" && (
                      <div className="grid grid-cols-2 gap-y-3 gap-x-8 px-4 py-2">
                        {[
                          { name: "Breakfast Cereals", icon: "🥣" },
                          { name: "Sauces And Condiments", icon: "🍅" },
                          { name: "Snacks Salty", icon: "🥨" },
                          { name: "Snacks Sweet", icon: "🍫" },
                          { name: "Ice Cream And Frozen Dairy", icon: "🍦" },
                          { name: "Baby And Infant Food", icon: "👶" },
                        ].map((food) => (
                          <div key={food.name} className="flex items-center gap-5 hover:bg-[#F5FAF6] p-3 rounded-2xl transition-colors cursor-pointer group">
                            <div className="h-12 w-12 bg-[#FFF8EB] flex items-center justify-center rounded-xl text-[24px] group-hover:scale-110 transition-transform origin-center shadow-sm border border-[#FFF0D4]">
                              {food.icon}
                            </div>
                            <span className="text-[14px] font-bold text-gray-800 group-hover:text-[#2E9D57] transition-colors">{food.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Nav */}
        <div className="flex items-center space-x-4">
           <a href="#signin" className="hidden lg:block text-[#1F3824] font-medium hover:text-[#1F3824]/80 transition">Sign in</a>
           <a href="#get" className="flex items-center gap-2 bg-[#1A3622] hover:bg-[#2B5034] text-white shadow-md px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all">
             Get Olive
             <ArrowRight size={16} />
           </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
