import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Share2, ChevronDown, Leaf } from "lucide-react";

const products = [
  {
    id: 1,
    image: '/assets/images/how-to/slider/product-1.png',
    title: 'Organic Bagels',
    brand: 'Artisan Bakery',
    score: '92',
    verdict: 'Great',
    description: 'This product scored highly because it is made with non-GMO organic flour and completely avoids high fructose corn syrup and artificial preservatives.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 2,
    image: '/assets/images/how-to/slider/product-2.png',
    title: 'Cocao-nectar Bar, Oregon Peppermint',
    brand: 'Organic Farm',
    score: '95',
    verdict: 'Excellent',
    description: 'This product scored exceptionally well as it uses organic raw materials and avoids synthetic additives, maintaining great taste.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 3,
    image: '/assets/images/how-to/slider/product-3.png',
    title: 'Strawberry Vanilla Sparkling Tonic',
    brand: 'Olipop',
    score: '88',
    verdict: 'Great',
    description: 'A great refreshing drink that substitutes highly processed sugars with natural plant-based sweeteners and prebiotics for gut health.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 4,
    image: '/assets/images/how-to/slider/product-4.png',
    title: 'Fig and Olive Crackers',
    brand: 'Rustic Bakery',
    score: '90',
    verdict: 'Great',
    description: 'These crackers are baked with extra virgin olive oil rather than inflammatory seed oils, making them a fantastic and clean snack.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 5,
    image: '/assets/images/how-to/slider/product-5.png',
    title: 'San Pellegrino Sparkling Mineral Water',
    brand: 'San Pellegrino',
    score: '100',
    verdict: 'Perfect',
    description: 'This is a perfect naturally occurring mineral water with no added ingredients or artificial carbonation. Hydration in its purest form.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 6,
    image: '/assets/images/how-to/slider/product-6.png',
    title: 'Sea Salt & Vinegar Potato Crisps',
    brand: 'Kettle Brand',
    score: '75',
    verdict: 'Fair',
    description: 'While containing simple ingredients, it uses standard cooking oils. A decent occasional snack with no artificial flavorings.',
    scoreColor: 'bg-yellow-500'
  },
  {
    id: 7,
    image: '/assets/images/how-to/slider/product-7.png',
    title: 'Larabar Chocolate Chip Cookie Dough',
    brand: 'Larabar',
    score: '96',
    verdict: 'Excellent',
    description: 'Made from just a few simple, whole-food ingredients like dates, cashews, and chocolate chips. A perfectly clean on-the-go snack.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 8,
    image: '/assets/images/how-to/slider/product-8.png',
    title: 'Sourlittles',
    brand: 'YumEarth',
    score: '85',
    verdict: 'Good',
    description: 'An excellent alternative to conventional candy, naturally colored with fruit extracts and entirely free from high fructose corn syrup.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 9,
    image: '/assets/images/how-to/slider/product-9.png',
    title: 'GradeA Raw Pure Jersey Milk',
    brand: 'Claravale Farm',
    score: '100',
    verdict: 'Perfect',
    description: 'This product scored perfectly because it contains no processed sugars, seed oils, or harmful additives.',
    scoreColor: 'bg-[#2E9D57]'
  },
  {
    id: 10,
    image: '/assets/images/how-to/slider/product-10.png',
    title: 'Late July Snacks Thin and Crispy Organic',
    brand: 'Late July',
    score: '92',
    verdict: 'Excellent',
    description: 'These chips use 100% organic corn and avoid inflammatory seed oils, scoring extremely high for ingredient purity.',
    scoreColor: 'bg-[#2E9D57]'
  }
];

export default function PhoneCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[680px] max-w-6xl mx-auto overflow-hidden py-8">
      {/* Phone chassis & screen */}
      <div className="relative z-20 h-[580px] w-[290px] md:h-[600px] md:w-[300px]">
        {/* Slider overlapping outside the phone laterally */}
        <div className="absolute top-[110px] flex w-full justify-center pointer-events-none z-[60]">
          <div className="relative flex items-center justify-center w-full">
            {products.map((product, index) => {
              let offset = index - activeIndex;
              if (offset < -Math.floor(products.length / 2)) offset += products.length;
              if (offset > Math.floor(products.length / 2)) offset -= products.length;

              const distance = Math.abs(offset);
              const isCenter = distance === 0;

              return (
                <motion.div
                  key={product.id}
                  animate={{
                    x: offset * 115,
                    scale: isCenter ? 1.25 : distance === 1 ? 0.9 : 0.7,
                    opacity: isCenter ? 1 : distance === 1 ? 0.6 : 0.0,
                    filter: isCenter ? "blur(0px)" : `blur(${distance * 2}px)`,
                    zIndex: isCenter ? 50 : 40 - distance
                  }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute"
                >
                  <div className="h-[75px] w-[75px] md:h-[84px] md:w-[84px] rounded-[1.4rem] bg-white p-1.5 shadow-lg flex items-center justify-center overflow-hidden">
                    <img src={product.image} alt={product.title} className="h-full w-full object-cover rounded-[0.9rem]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Outer Phone Shell */}
        <div className="absolute -inset-2 rounded-[3.6rem] bg-[#D9DDDA] border-[1px] border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10" />
        
        {/* Inner Phone Screen */}
        <div className="absolute inset-0 rounded-[3.3rem] bg-white border-[6px] border-white shadow-inner overflow-hidden z-20">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute left-1/2 top-3 z-50 h-[26px] w-[90px] -translate-x-1/2 rounded-full bg-black flex items-center justify-end px-2.5 shadow-sm">
            <div className="h-[12px] w-[12px] bg-[#1A1A1A] rounded-full border border-white/10" />
          </div>

          <div className="relative h-full w-full bg-white pt-[220px]">
            {/* Scroll Indicator */}
            <div className="flex justify-center mb-5">
              <span className="h-1 w-10 rounded-full bg-gray-200" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="px-5"
              >
                {/* Product Header */}
                <div className="flex gap-3 items-start">
                  <div className="w-14 h-16 flex-shrink-0 bg-gray-50 rounded-xl p-1 shadow-sm border border-gray-100 flex items-center justify-center">
                    <img src={activeProduct.image} className="w-full h-full object-cover rounded-lg" alt="Thumbnail" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[1.05rem] font-bold text-gray-900 leading-tight truncate">
                      {activeProduct.title}
                    </h2>
                    <p className="text-gray-500 text-[12px] font-medium mt-0.5 truncate">{activeProduct.brand}</p>

                    <div className="mt-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${activeProduct.scoreColor}`} />
                        <div>
                          <p className="font-bold text-gray-900 text-[0.95rem] leading-none">{activeProduct.score}/100</p>
                          <p className="text-[8.5px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{activeProduct.verdict}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 text-gray-400">
                        <Heart size={18} strokeWidth={2.5} className="cursor-pointer hover:text-red-500 transition-colors" />
                        <Share2 size={16} strokeWidth={2.5} className="cursor-pointer hover:text-gray-700 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Oliver Says Box */}
                <div className="mt-5 p-3.5 rounded-[1.2rem] bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] relative">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="bg-[#E9F5ED] p-1 rounded-[8px]">
                      <span className="text-[13px] leading-none block">🥑</span>
                    </div>
                    <span className="text-[12px] font-extrabold text-gray-800 tracking-tight">Oliver Says:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-500 font-medium italic">
                    "{activeProduct.description}"
                  </p>
                </div>

                {/* Breakdown Section */}
                <div className="mt-5">
                  <h3 className="font-bold text-[13px] text-gray-800 mb-2 ml-1">Breakdown</h3>
                  <div className="flex items-center justify-between p-3 rounded-[1rem] border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-gray-100 p-1.5 rounded-full">
                        <Leaf size={14} className="text-gray-500" />
                      </div>
                      <span className="text-[12px] font-bold text-gray-700">Seed Oils</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#E9F5ED] text-[#2E9D57] px-2 py-1 rounded-[5px] text-[9px] font-extrabold uppercase tracking-wide">None</span>
                      <ChevronDown size={14} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
