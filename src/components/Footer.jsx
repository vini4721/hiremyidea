import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] rounded-3xl mt-10 md:mt-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 py-16 text-white relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Brand Section */}
            <div className="flex flex-col max-w-xs">
               <a href="/" className="font-bold text-3xl tracking-tighter flex items-center space-x-2 text-white mb-6">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#AEB93E"/>
                    <path d="M12 6C13.5 6 15 7.5 15 9V15C15 16.5 13.5 18 12 18S9 16.5 9 15V9C9 7.5 10.5 6 12 6Z" fill="#fff" fillOpacity="0.4"/>
                 </svg>
                 <span>olive</span>
               </a>
               <p className="text-gray-400 font-medium mb-8">
                  Keep your family safe with Olive. Effortless food scanning, peace of mind for parents, and healthy product recommendations.
               </p>
               <a href="#" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg px-6 py-3 rounded-full text-base font-semibold w-max transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.91 3.83-.81 1.69.1 2.97.8 3.73 2.05-3.32 1.83-2.73 6.36.43 7.63-.73 1.86-1.74 3.39-3.07 4.3zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                 </svg>
                 Download for iOS
               </a>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap gap-12 md:gap-24">
               <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg mb-2">Explore More</h4>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Explore Foods</a>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Allergy Scanner App</a>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Gluten Free Scanner</a>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Dairy Free App</a>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Food Ingredient Checker</a>
               </div>

               <div className="flex flex-col gap-4">
                  <h4 className="text-white font-bold text-lg mb-2">About</h4>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Blog</a>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Email Us</a>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Contact Us</a>
               </div>
            </div>
         </div>

         {/* Bottom Footer */}
         <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 font-medium">© 2026 Olive Inc.</p>
            <div className="flex gap-6">
               <a href="#" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
               <a href="#" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
               <a href="#" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">Refund Policy</a>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
