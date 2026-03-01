import React from 'react';
import { GradientBackground } from './GradientBackground';
import logo from '../../assets/images/logo-1.svg';

export const ThankYou: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-transparent flex flex-col justify-between items-center min-h-[1414px]">
      {/* Background Layers */}
      <GradientBackground
        centerPosition="top left"
        stops={[
          { color: '#FFFFFF', opacity: 0, position: '0%' },
          { color: '#FFFFFF', opacity: 0.8, position: '40%' },
          { color: '#FFFFFF', opacity: 1, position: '100%' },
        ]}
      />

      {/* Decorative Corner Graphics (Pink/Purple Blobs with faint dots) */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundImage: 'radial-gradient(#C4B5E0 2px, transparent 2px), radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundSize: '20px 20px, 100% 100%'
        }}
      ></div>
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] translate-x-1/3 -translate-y-1/3 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundImage: 'radial-gradient(#C4B5E0 2px, transparent 2px), radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundSize: '20px 20px, 100% 100%'
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] -translate-x-1/3 translate-y-1/3 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundImage: 'radial-gradient(#C4B5E0 2px, transparent 2px), radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundSize: '20px 20px, 100% 100%'
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] translate-x-1/3 translate-y-1/3 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundImage: 'radial-gradient(#C4B5E0 2px, transparent 2px), radial-gradient(circle, #EBE4F5 0%, #FAF8FD 70%, transparent 100%)',
          backgroundSize: '20px 20px, 100% 100%'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-[840px] px-6 py-24 flex flex-col items-center flex-1 mt-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-[52px] md:text-[60px] font-black text-[#5A32A3] leading-none mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Thank You!
          </h1>
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1B2A56]">
            For Your Dedication
          </h2>
        </div>

        {/* Quote Block */}
        <div className="w-full bg-white border border-[#5A32A3] rounded-[24px] p-8 md:p-12 mb-12 shadow-[0_2px_10px_rgba(90,50,163,0.05)] flex flex-col items-center text-center">
          <p className="text-[22px] text-[#111827] leading-snug mb-6 font-medium">
            The future belongs to those who learn more skills<br className="hidden md:block" />
            and combine them in creative ways.
          </p>
          <span className="text-[18px] text-[#475569] font-medium">
            - Robert Greene
          </span>
        </div>

        {/* Your Journey Ahead Block */}
        <div className="w-full bg-[#F4F6FF] rounded-[24px] p-8 md:p-12 pb-14 text-left shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-auto border border-[#EBEFFF]">
          <h3 className="text-[28px] font-medium text-[#5A32A3] mb-6 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Your Journey Ahead
          </h3>
          <ul className="space-y-3 text-[17px] text-[#111827] font-medium pl-6 relative">
            <li className="relative">
              <span className="absolute -left-6 top-[10px] w-1.5 h-1.5 bg-[#475569] rounded-full"></span>
              Every expert was once a beginner - embrace the learning process
            </li>
            <li className="relative">
              <span className="absolute -left-6 top-[10px] w-1.5 h-1.5 bg-[#475569] rounded-full"></span>
              Technology advances rapidly, but persistent learners lead the way
            </li>
            <li className="relative">
              <span className="absolute -left-6 top-[10px] w-1.5 h-1.5 bg-[#475569] rounded-full"></span>
              Your unique perspective and creativity are your greatest assets
            </li>
            <li className="relative">
              <span className="absolute -left-6 top-[10px] w-1.5 h-1.5 bg-[#475569] rounded-full"></span>
              The Artificial Intelligence field needs passionate innovators like you
            </li>
          </ul>
        </div>
      </div>

      {/* Footer / Call to Action */}
      <div className="relative z-10 w-full flex flex-col items-center pb-20 mt-10">

        <img src={logo} alt="Heydu" className="h-[60px] md:h-[70px] w-auto object-contain mb-8 mix-blend-multiply" />

        <h3 className="text-[28px] md:text-[34px] font-bold text-[#5A32A3]" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Start Building Your Future Today!
        </h3>
      </div>
    </div>
  );
};
