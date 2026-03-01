import React from 'react';
import logo from '../../assets/images/logo-1.svg';
import coverBg from '../../assets/images/cover-page-bg-1.jpg';

export const CoverPage: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white flex flex-col justify-between items-center min-h-[1414px]">
      {/* Heavy top image section with perfectly circular massive downward arc */}
      <div
      >
        <div
          className="absolute inset-0 bg-[center_top]"
          style={{ backgroundImage: `url(${coverBg})`, backgroundSize: '1200px auto', backgroundRepeat: 'no-repeat', backgroundPositionY: '-90%' }}
        ></div>
        {/* Dotted pattern overlay in top-right */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: 'radial-gradient(circle, #FFFFFF 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to bottom left, black, transparent 20%)',
            WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 20%)'
          }}
        ></div>
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10 w-full flex flex-col items-center pt-[120px] flex-1">

        {/* Crisp JSX C-RAP Logo Circle */}
        <div className="w-[480px] h-[480px] bg-[#FDFDFD] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center select-none relative z-20">

          <div className="flex flex-col items-center">
            {/* Logo Layout */}
            <div className="flex items-center">

              {/* Giant C- */}
              <div className="flex items-center text-[#2D4A8A] font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                 <span className="text-[180px] leading-none tracking-tighter -mr-2">C</span>
                 {/* Minus aligned specifically */}
                 <span className="text-[120px] leading-none ml-2 mb-8">-</span>
              </div>

              {/* R A P Stack */}
              <div className="flex flex-col ml-8 gap-0 text-center font-black mt-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                 {/* R */}
                 <div className="flex flex-col">
                    <span className="text-[52px] leading-[0.8] text-[#5A32A3] tracking-tighter">R</span>
                    <span className="text-[9px] text-[#5A32A3] uppercase tracking-widest mt-1">Ready</span>
                 </div>
                 {/* A */}
                 <div className="flex flex-col mt-4">
                    <span className="text-[52px] leading-[0.8] text-[#2D4A8A] tracking-tighter">A</span>
                    <span className="text-[9px] text-[#2D4A8A] uppercase tracking-widest mt-1">Analysis</span>
                 </div>
                 {/* P */}
                 <div className="flex flex-col mt-4">
                    <span className="text-[52px] leading-[0.8] text-[#5A32A3] tracking-tighter">P</span>
                    <span className="text-[9px] text-[#5A32A3] uppercase tracking-widest mt-1">Progress</span>
                 </div>
              </div>

            </div>

            {/* Path To My First Job Line */}
            <div className="mt-8 text-center flex flex-col items-center w-full">
               <span className="text-[#5A32A3] font-black text-[18px] tracking-[0.05em] uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  PATH TO MY FIRST JOB
               </span>
               <div className="w-[110%] h-[3px] bg-[#5A32A3] mt-2 rounded-full"></div>
            </div>

          </div>

        </div>

        {/* Heydu Brand Section Below */}
        <div className="mt-40 mb-16 flex flex-col items-center relative z-20">
            <img src={logo} alt="Heydu" className="h-[70px] md:h-[80px] w-auto object-contain mb-6 md:mb-8 mix-blend-multiply" />
            <h2 className="text-[#111827] font-semibold text-[28px] md:text-[32px] tracking-wide">
              Level UP Your Career!
            </h2>
        </div>
      </div>

      {/* Tailored For Section (Bottom) */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end pb-8 md:pb-12 mt-auto h-[250px] overflow-hidden">
          {/* Faint Dotted Pattern Background for Bottom Section */}
          <div
             className="absolute bottom-0 left-0 w-full h-[250px] opacity-30 z-0 pointer-events-none"
             style={{
               backgroundImage: 'radial-gradient(circle, #94A3B8 3px, transparent 3px)',
               backgroundSize: '36px 36px',
               maskImage: 'linear-gradient(to top, black, transparent)',
               WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
             }}
          ></div>

          {/* Perfect Circle Dashed curved line from Mockup */}
          <div className="absolute top-[100px] w-[450px] md:w-[500px] aspect-square rounded-full border-[3px] border-dashed border-[#2D4A8A] bg-white"></div>

          <div className="relative z-20 text-center bg-white px-8 rounded-full mt-12">
              <p className="text-[#2D4A8A] font-bold italic text-[24px] md:text-[28px] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Tailored for<br/>
                Adithya
              </p>
          </div>
      </div>

    </div>
  );
};
