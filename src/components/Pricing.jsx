import React from 'react';

const Pricing = () => {
  return (
    <div id="pricing" className="w-full py-16 md:py-24 bg-white rounded-3xl mt-10 md:mt-20 border border-neutral-100 shadow-sm relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center text-center relative z-10">
        <h2 className="font-bold text-gray-900 text-3xl md:text-5xl mb-4">Healthy Choices<br/>Honest Pricing</h2>
        <p className="text-neutral-600 max-w-md mx-auto mb-10">Select a plan to start your journey towards healthier family nutrition.</p>
        
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto w-full px-4 justify-center">
          
          {/* Monthly Plan */}
          <div className="flex flex-col p-8 rounded-3xl border border-gray-200 bg-white shadow-sm flex-1 max-w-sm w-full mx-auto relative hover:-translate-y-1 transition-transform">
             <h3 className="text-xl font-bold text-gray-800 mb-2">monthly</h3>
             <div className="text-4xl font-black text-gray-900 mb-6">$9<span className="text-lg font-medium text-gray-500">.99</span></div>
             
             <ul className="flex flex-col gap-4 text-left mb-8 flex-1">
                <li className="flex items-center gap-3 text-neutral-700 font-medium">
                   <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                   Unlimited Scans
                </li>
                <li className="flex items-center gap-3 text-neutral-700 font-medium">
                   <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                   Unlimited Database Searches
                </li>
                <li className="flex items-center gap-3 text-neutral-700 font-medium">
                   <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                   Comprehensive Lab-Testing Data
                </li>
             </ul>
             
             <a href="#" className="w-full text-center py-3.5 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-800 rounded-full font-bold transition-colors">
               Subscribe
             </a>
          </div>

          {/* Yearly Plan Highlights */}
          <div className="flex flex-col p-8 rounded-3xl border-2 border-primary bg-primary/5 shadow-md flex-1 max-w-sm w-full mx-auto relative hover:-translate-y-1 transition-transform">
             <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
               Most Popular
             </div>
             
             <h3 className="text-xl font-bold text-gray-800 mb-2">yearly</h3>
             <div className="text-4xl font-black text-gray-900 mb-6">$39<span className="text-lg font-medium text-gray-500">.99</span></div>
             
             <ul className="flex flex-col gap-4 text-left mb-8 flex-1">
                <li className="flex items-center gap-3 text-neutral-700 font-medium">
                   <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                   Everything in monthly plan
                </li>
                <li className="flex items-center gap-3 text-neutral-700 font-medium">
                   <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                   Get 7 months free
                </li>
                <li className="flex items-center gap-3 text-neutral-700 font-medium">
                   <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                   60% Savings
                </li>
             </ul>
             
             <a href="#" className="w-full text-center py-3.5 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-colors shadow">
               Subscribe
             </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
