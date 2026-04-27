import React, { useState, useEffect } from 'react';

const SparkleField = ({ count = 12, color = '#1F3824' }) => {
  const stars = ['✦', '★', '✧'];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {[...Array(count)].map((_, i) => {
        const top = Math.floor(Math.random() * 80) + 10;
        const left = Math.floor(Math.random() * 80) + 10;
        const size = Math.floor(Math.random() * 12) + 6;
        const delay = (Math.random() * 2).toFixed(2);
        const duration = (Math.random() * 1.5 + 1).toFixed(2);
        const char = stars[i % stars.length];
        return (
          <div
            key={i}
            className="absolute animate-sparkle opacity-25"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: `${size}px`,
              color: color,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full z-10 pt-16 pb-24 px-4 overflow-hidden">
      
      {/* Social Proof */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-3">
        <div className="flex -space-x-3">
          <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces" alt="User" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces" alt="User" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces" alt="User" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
          <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">3k+</div>
        </div>
        <span className="text-xs font-medium text-neutral-600">Trusted by thousands of healthy families</span>
      </div>

      {/* Main Title */}
      <h1 className="relative z-50 py-2 md:pt-4 pb-4 mx-auto max-w-3xl text-primary text-center font-bold tracking-tight text-5xl md:text-7xl leading-[1.1]">
        The Safest Way to Shop for Groceries
      </h1>
      
      {/* Subtitle */}
      <p className="relative z-50 mx-auto mt-4 md:text-lg text-sm max-w-xl px-4 text-center text-gray-600 font-medium">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
      </p>

      {/* Primary Action */}
      <div className="flex justify-center mt-8 relative z-50">
        <a href="#" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg px-8 py-3.5 rounded-full text-base font-semibold transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
             <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.91 3.83-.81 1.69.1 2.97.8 3.73 2.05-3.32 1.83-2.73 6.36.43 7.63-.73 1.86-1.74 3.39-3.07 4.3zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          Download for iOS
        </a>
      </div>

      {/* Product Slider Representation */}
      <div className="relative mt-20 max-w-5xl mx-auto h-[400px]">
        {/* Floating elements backdrop */}
        <div className="absolute inset-0 top-1/2 -translate-y-1/2 overflow-hidden mask-edges opacity-30 select-none pointer-events-none">
          <div className="flex gap-8 whitespace-nowrap items-center animate-infinite-slider">
            {[1,2,3,4,5,6,1,2,3,4,5,6].map((i, index) => (
               <div key={index} className="w-24 h-24 bg-white rounded-2xl shadow border border-gray-200 overflow-hidden shrink-0">
                  <img src={`/assets/images/how-to/slider/product-${i}.png`} alt="Backdrop Product" className="w-full h-full object-cover" />
               </div>
            ))}
          </div>
        </div>

        {/* Central App Mockup Frame */}
        <div className="absolute inset-x-0 mx-auto -bottom-10 w-[260px] md:w-[320px] h-[550px] bg-black rounded-[40px] border-[12px] border-black shadow-2xl overflow-hidden z-20 flex flex-col pt-8 bg-[linear-gradient(180deg,_#333_0%,_#111_100%)] animate-float">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-30"></div>
           {/* Mockup Screen inner */}
           <div className="bg-white flex-1 rounded-[28px] overflow-hidden flex flex-col items-center justify-center shadow-inner relative">
              <div className="w-full p-4 border-b">
                 <div className="w-3/4 h-2 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex-1 w-full bg-gray-50 flex items-center justify-center relative overflow-hidden p-6">
                 <SparkleField count={15} color="#AEB93E" />
                 <img src="/assets/images/how-to/slider/straus-ice-cream.png" alt="Product Scan" className="w-full h-auto object-contain relative z-0" />
                 <div className="absolute w-[80%] h-1 bg-[#AEB93E] shadow-[0_0_15px_4px_rgba(174,185,62,0.6)] rounded-full animate-scanner z-10 overflow-visible">
                    <div className="absolute -top-1 left-[15%] text-[8px] text-white animate-sparkle">✦</div>
                    <div className="absolute -bottom-1 left-[45%] text-[10px] text-white animate-sparkle" style={{"animationDelay":"0.5s"}}>✦</div>
                    <div className="absolute -top-2 left-[75%] text-[9px] text-white animate-sparkle" style={{"animationDelay":"1s"}}>✦</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
{/* Extra specific css for mask overlay */}
<style dangerouslySetInnerHTML={{__html: `
.mask-edges { 
  -webkit-mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);
  mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);
}
`}} />
    </div>
  );
};

export default Hero;
