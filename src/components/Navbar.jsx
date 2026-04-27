import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full z-[60] flex flex-row items-center justify-between sticky top-0 md:top-4 bg-transparent mt-4 md:px-6 px-2 lg:px-12 py-2">
      <div className="flex flex-1 items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="font-bold text-2xl tracking-tighter text-black flex items-center space-x-2">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#AEB93E"/>
              <path d="M12 6C13.5 6 15 7.5 15 9V15C15 16.5 13.5 18 12 18S9 16.5 9 15V9C9 7.5 10.5 6 12 6Z" fill="#fff" fillOpacity="0.4"/>
           </svg>
           <span className="font-bold">olive</span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex flex-row items-center justify-center gap-2 rounded-full px-4 py-2 bg-white/70 backdrop-blur-md shadow-sm border border-neutral-100">
          <a href="#" className="text-neutral-700 px-4 py-2 text-sm font-medium hover:bg-black/5 rounded-lg transition">Solutions</a>
          <a href="#features" className="text-neutral-700 px-4 py-2 text-sm font-medium hover:bg-black/5 rounded-lg transition">Features</a>
          <a href="#pricing" className="text-neutral-700 px-4 py-2 text-sm font-medium hover:bg-black/5 rounded-lg transition">Pricing</a>
          <a href="#" className="text-neutral-700 px-4 py-2 text-sm font-medium hover:bg-black/5 rounded-lg transition">Blog</a>
          <a href="#" className="text-neutral-700 px-4 py-2 text-sm font-medium hover:bg-black/5 rounded-lg transition">Restaurants</a>
          <a href="#" className="text-neutral-700 px-4 py-2 text-sm font-medium hover:bg-black/5 rounded-lg transition">Food</a>
        </nav>

        {/* Right Nav */}
        <div className="flex items-center space-x-4">
           <a href="#signin" className="hidden lg:block text-primary font-medium hover:text-primary/80 transition">Sign in</a>
           <a href="#get" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white shadow-md px-6 py-2.5 rounded-full text-base font-semibold transition-all">
             Get Olive
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
             </svg>
           </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
