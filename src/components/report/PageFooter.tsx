import React from 'react';
import logo from '../../assets/images/logo-1.svg';

export const PageFooter: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-0 z-30 pointer-events-none select-none">
      {/*
        Corner Brand Mark
        - Lavender background (#EFECFF)
        - Professional document feel
      */}
      <div className="bg-[#EFECFF] w-[130px] h-[100px] md:w-[140px] md:h-[110px] rounded-tl-[35px] shadow-[-12px_-12px_45px_rgba(0,0,0,0.12)] border-l border-t border-white/60 flex flex-col items-center justify-center p-4">

        {/* Logo Asset */}
        <div className="flex flex-col items-center justify-center scale-[0.85] w-full">
          <img src={logo} alt="Heydu Logo" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};
