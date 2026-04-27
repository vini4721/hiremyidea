import React from 'react';

const HowItWorks = () => {
  return (
    <div className="w-full py-16 md:py-24">
      {/* Header section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-primary max-w-xl text-3xl md:text-[3.2rem] leading-tight flex items-center gap-3">
          How the Olive Food 
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-2xl whitespace-nowrap inline-flex shadow-sm">
             Scanner App Works
          </span>
        </h2>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 md:pt-20">
        
        {/* Card 1 */}
        <div className="flex flex-col p-8 rounded-2xl border border-white bg-white/50 shadow-sm backdrop-blur-sm group hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Scan & Detect</h3>
          <div className="h-48 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden relative shadow-inner mb-6">
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-lg"></div>
            <div className="w-3/4 h-2 bg-primary/20 rounded-full animate-[pulse_2s_ease-in-out_infinite_alternate]"></div>
          </div>
          <p className="text-neutral-600 font-medium leading-relaxed">
            When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col p-8 rounded-2xl border border-white bg-white/50 shadow-sm backdrop-blur-sm group hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Data Analysis & Validation</h3>
          <div className="h-48 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-inner mb-6 relative">
            <div className="flex -space-x-4">
              <div className="w-16 h-16 rounded bg-gray-100 shadow rotate-[-10deg]"></div>
              <div className="w-20 h-20 rounded-lg bg-gray-50 border shadow-md flex items-center justify-center z-10">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="w-16 h-16 rounded bg-gray-100 shadow rotate-[10deg]"></div>
            </div>
          </div>
          <p className="text-neutral-600 font-medium leading-relaxed">
            After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col p-8 rounded-2xl border border-white bg-white/50 shadow-sm backdrop-blur-sm group hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Actionable Insights</h3>
          <div className="h-48 rounded-2xl bg-white border border-gray-100 p-4 shadow-inner overflow-hidden mb-6 flex flex-col gap-3">
             <div className="w-full bg-gray-50 border rounded-lg p-3 flex gap-3 shadow-sm transform group-hover:translate-x-2 transition-transform">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold">!</div>
                <div className="flex-1 flex flex-col gap-2 justify-center">
                   <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                   <div className="w-3/4 h-2 bg-red-200 rounded"></div>
                </div>
             </div>
             <div className="w-full bg-green-50 border border-green-100 rounded-lg p-3 flex gap-3 shadow-sm scale-105 z-10 group-hover:-translate-x-2 transition-transform">
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">✓</div>
                <div className="flex-1 flex flex-col gap-2 justify-center">
                   <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                   <div className="w-2/3 h-2 bg-green-200 rounded"></div>
                </div>
             </div>
          </div>
          <p className="text-neutral-600 font-medium leading-relaxed">
            Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
