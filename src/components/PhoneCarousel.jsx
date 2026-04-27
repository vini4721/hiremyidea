import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    image: '/assets/images/how-to/slider/product-1.png',
    title: 'Organic Bagels',
    brand: 'Artisan Bakery',
    score: '92/100',
    description: 'This product scored highly because it is made with non-GMO organic flour and completely avoids high fructose corn syrup and artificial preservatives.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 2,
    image: '/assets/images/how-to/slider/product-2.png',
    title: 'Cocao-nectar Bar, Oregon Peppermint',
    brand: 'Organic Farm',
    score: '95/100',
    description: 'This product scored exceptionally well as it uses organic raw materials and avoids synthetic additives, maintaining great taste.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 3,
    image: '/assets/images/how-to/slider/product-3.png',
    title: 'Strawberry Vanilla Sparkling Tonic',
    brand: 'Olipop',
    score: '88/100',
    description: 'A great refreshing drink that substitutes highly processed sugars with natural plant-based sweeteners and prebiotics for gut health.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 4,
    image: '/assets/images/how-to/slider/product-4.png',
    title: 'Fig and Olive Crackers',
    brand: 'Rustic Bakery',
    score: '90/100',
    description: 'These crackers are baked with extra virgin olive oil rather than inflammatory seed oils, making them a fantastic and clean snack.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 5,
    image: '/assets/images/how-to/slider/product-5.png',
    title: 'San Pellegrino Sparkling Natural Mineral Water',
    brand: 'San Pellegrino',
    score: '100/100',
    description: 'This is a perfect naturally occurring mineral water with no added ingredients or artificial carbonation. Hydration in its purest form.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 6,
    image: '/assets/images/how-to/slider/product-6.png',
    title: 'Sea Salt & Vinegar Potato Crisps',
    brand: 'Kettle Brand',
    score: '75/100',
    description: 'While containing simple ingredients, it uses standard cooking oils. A decent occasional snack with no artificial flavorings.',
    scoreColor: 'bg-yellow-500'
  },
  {
    id: 7,
    image: '/assets/images/how-to/slider/product-7.png',
    title: 'Larabar Chocolate Chip Cookie Dough',
    brand: 'Larabar',
    score: '96/100',
    description: 'Made from just a few simple, whole-food ingredients like dates, cashews, and chocolate chips. A perfectly clean on-the-go snack.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 8,
    image: '/assets/images/how-to/slider/product-8.png',
    title: 'Sourlittles',
    brand: 'YumEarth',
    score: '85/100',
    description: 'An excellent alternative to conventional candy, naturally colored with fruit extracts and entirely free from high fructose corn syrup.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 9,
    image: '/assets/images/how-to/slider/product-9.png',
    title: 'GradeA Raw Pure Jersey Milk',
    brand: 'Claravale Farm',
    score: '100/100',
    description: 'This product scored perfectly because it contains no processed sugars, seed oils, or harmful additives, making it a great option for your family\'s health, especially since you\'re looking to avoid processed foods.',
    scoreColor: 'bg-green-500'
  },
  {
    id: 10,
    image: '/assets/images/how-to/slider/product-10.png',
    title: 'Late July Snacks Thin and Crispy Organic Tortilla',
    brand: 'Late July',
    score: '92/100',
    description: 'These chips use 100% organic corn and avoid inflammatory seed oils, scoring extremely high for ingredient purity.',
    scoreColor: 'bg-green-500'
  }
];

export default function PhoneCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000); // Shift every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[activeIndex];

  // We map the array three times to ensure there's enough runway to show adjacent items safely without wrapping bugs during transitions
  const displayProducts = [...products, ...products, ...products];
  const offsetIndex = activeIndex + products.length; // Start in the middle array

  return (
    <div className="relative z-50 min-h-[600px] max-w-6xl mx-auto overflow-hidden">
      {/* Slider track */}
      <div className="flex absolute inset-0 top-[25%] -translate-y-1/2 left-1/4 right-1/4 z-[51] justify-center" style={{ maskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)' }}>
        <div className="h-full w-full overflow-hidden relative">
          <div 
            className="absolute z-1 top-1/2 -translate-y-1/2 flex gap-2 items-center transition-transform duration-700 ease-in-out"
            style={{ 
              left: '50%',
              transform: `translateX(calc(-50px - ${(offsetIndex * 108)}px))`
            }}
          >
            {displayProducts.map((product, idx) => {
              const distance = Math.abs(idx - offsetIndex);
              
              let scaleClass = 'scale-[0.6] opacity-0 z-0';
              if (distance === 0) scaleClass = 'scale-[1.3] opacity-100 z-20';
              else if (distance === 1) scaleClass = 'scale-100 opacity-[0.8] z-10';
              else if (distance === 2) scaleClass = 'scale-[0.8] opacity-[0.4] z-0 blur-[1px]';
              else if (distance === 3) scaleClass = 'scale-[0.6] opacity-[0.1] z-0 blur-sm';

              return (
                <div
                  key={`${product.id}-${idx}`}
                  className={`relative w-[100px] h-[100px] shrink-0 transition-all duration-700 ease-in-out ${scaleClass}`}
                >
                  <img
                    alt={product.title}
                    className="rounded-2xl object-cover w-full h-full shadow-lg"
                    src={product.image}
                  />
                </div>
              );
            })}
          </div>
          <div className="absolute left-0 right-0 h-[200px] w-[280px] bg-[white] mx-auto top-[114px]"></div>
        </div>
      </div>
      
      {/* Phone Mockup Frame - restored original classes exactly */}
      <div className="relative top-[20px] flex items-center justify-end left-1/2 -translate-x-1/2 bg-black h-[26px] w-[100px] rounded-full z-5">
        <div className="h-[16px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,255,255,0.04)_72%,_rgba(255,255,255,0.16)_100%)] w-[16px] mr-[5px] rounded-full absolute right-0"></div>
      </div>
      <div className="h-full top-[10px] bg-white mx-auto w-[280px] rounded-tr-[36px] rounded-tl-[36px] shadow-xl absolute inset-0 z-4"></div>
      <div className="h-[600px] mx-auto w-[300px] bg-[linear-gradient(180deg,_rgba(88,88,88,0.24)_0%,_rgba(255,255,255,0.24)_100%)] rounded-[38px] shadow-xl absolute inset-0 z-3"></div>
      <div className="absolute h-[400px] w-[280px] top-[10px] rounded-[36px] mx-auto bg-[rgb(21,21,21)] flex items-end z-4 justify-center inset-0 left-1 right-1"></div>

      {/* Dynamic Product Details Card Container */}
      <div className="absolute flex z-[100] justify-center inset-0 top-[230px] pointer-events-none">
        <div className="w-[280px] px-4 flex flex-col items-center animate-fade-in pointer-events-auto">
          <h3 className="font-pall text-[1.4rem] font-bold leading-tight text-[#253612] text-center mb-1">{currentProduct.title}</h3>
          <p className="text-[#1F1F1F99] text-sm mb-6">{currentProduct.brand}</p>
          
          <div className="flex w-full items-center justify-between px-2 mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${currentProduct.scoreColor}`}></div>
              <div className="flex flex-col">
                <span className="font-bold text-[#253612] leading-none text-lg">{currentProduct.score}</span>
                <span className="text-xs text-[#1F1F1F99]">Excellent</span>
              </div>
            </div>
            <div className="flex gap-4 text-[#1F1F1F99]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </div>
          </div>

          {/* Oliver Says Box */}
          <div className="bg-white rounded-2xl shadow-sm p-4 w-full relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 flex items-center justify-center bg-[#EBF0C1] rounded-full">
                <span className="text-sm leading-none">🥑</span>
              </div>
              <span className="font-bold text-[#253612] text-sm">Oliver Says:</span>
            </div>
            <p className="text-xs text-[#1F1F1FB2] leading-relaxed">
              {currentProduct.description}
            </p>
          </div>
          
          {/* Breakdown section header */}
          <div className="w-full mt-8 text-left">
            <h4 className="font-bold text-[#253612] text-[15px]">Breakdown</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
