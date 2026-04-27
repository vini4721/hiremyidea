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
    <div className="w-full z-[60] flex flex-row items-center justify-between sticky top-0 md:top-4 bg-transparent mt-4 md:px-6 px-2 lg:px-12 py-2">
      <div className="flex flex-1 items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="font-bold text-2xl tracking-tighter text-[#8C9A31] flex items-center space-x-2 transition-opacity hover:opacity-80">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#AEB93E"/>
              <path d="M12 6C13.5 6 15 7.5 15 9V15C15 16.5 13.5 18 12 18S9 16.5 9 15V9C9 7.5 10.5 6 12 6Z" fill="#fff" fillOpacity="0.4"/>
           </svg>
           <span className="font-bold text-black tracking-tight">olive</span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex flex-row items-center justify-center gap-1 rounded-full px-4 py-2 bg-white/80 backdrop-blur-md shadow-sm border border-neutral-100">
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
