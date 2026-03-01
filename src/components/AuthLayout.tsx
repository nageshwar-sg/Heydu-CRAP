import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { BackgroundPattern } from './report/BackgroundPattern';

export interface Feature {
  title: string;
  description: string;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
  leftPanelContent: {
    title: string;
    features: Feature[];
    imagePlacholderText: string;
    image?: string;
  };
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, leftPanelContent }) => {
  return (
    <div className="min-h-screen w-full bg-[#F0F2F5] relative flex flex-col p-6 md:p-10 overflow-x-hidden overflow-y-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <BackgroundPattern dotColor="#53389E" maskSize="100%" />
      </div>

      <div className="relative z-10 flex-1 w-full flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
        {/* Left Side - Brand Panel */}
        <div className="w-full lg:flex-1 bg-[#53389E] p-8 md:p-10 text-white flex flex-col relative overflow-hidden shrink-0 rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_-12px_rgba(83,56,158,0.3)]">
          {/* Brand Icon */}
          <div className="w-14 h-14 bg-[#7F56D9] rounded-2xl flex items-center justify-center mb-10 shadow-lg border border-white/10">
            <Shield className="w-7 h-7 text-white" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-12 tracking-tight">
            {leftPanelContent.title}
          </h1>

          <div className="flex-1 w-full bg-transparent flex items-center justify-center mb-12 min-h-[300px]">
            {/* Image Section */}
            {leftPanelContent.image ? (
              <img src={leftPanelContent.image} alt={leftPanelContent.imagePlacholderText} className="w-full h-auto object-contain max-h-[340px]" />
            ) : (
              <div className="w-full h-64 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
                <span className="text-white/40 font-medium">
                  {leftPanelContent.imagePlacholderText}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {leftPanelContent.features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/20 transition-colors group-hover:bg-white/20">
                  <CheckCircle2 className="w-4 h-4 text-purple-200" />
                </div>
                <div>
                  <h3 className="font-bold text-xl leading-tight">{feature.title}</h3>
                  <p className="text-purple-100/70 text-base mt-1.5 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form/Content */}
        <div className="w-full lg:flex-1 bg-white flex items-center justify-center p-8 md:p-10 shrink-0 relative rounded-[32px] md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
          <div className="w-full max-w-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
