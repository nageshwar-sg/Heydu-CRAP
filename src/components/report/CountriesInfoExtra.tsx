import React from 'react';
import { GraduationCap, DollarSign, Plus } from 'lucide-react';
import { GradientBackground } from './GradientBackground';

const extraCountries = [
  {
    name: 'Germany',
    flag: '🇩🇪',
    feeRange: '€0-€3k per year (Public universities)',
    duration: '2 years Full time',
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    feeRange: 'CAD $20k-$45k per year',
    duration: '1.5-2 years Full time',
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    feeRange: '£20k-$35k per year',
    duration: '1 year Full time',
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    feeRange: 'CHF 1k-2k per year\n(Public universities)',
    duration: '1.5-2 years Full time',
  }
];

export const CountriesInfoExtra: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-transparent">
      {/* Background Layers */}
      <GradientBackground
        centerPosition="top left"
        stops={[
          { color: '#FFFFFF', opacity: 0, position: '0%' },
          { color: '#FFFFFF', opacity: 0.8, position: '40%' },
          { color: '#FFFFFF', opacity: 1, position: '100%' },
        ]}
      />

      <div className="relative z-10 px-4 py-8 md:p-12 mx-auto max-w-[1000px] flex flex-col gap-6">
        {extraCountries.map((country, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] shadow-sm border border-[#E2E8F0] p-6 md:px-8 md:py-8"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-[32px] md:text-[36px] leading-none">{country.flag}</span>
                <h3 className="text-[26px] md:text-[28px] font-bold text-[#111827]">
                  {country.name}
                </h3>
              </div>

              <button className="bg-[#5A32A3] hover:bg-[#4B2889] transition-colors text-white px-5 py-2.5 rounded-[12px] text-[15px] font-bold flex items-center justify-center gap-2 w-full md:w-auto shadow-sm">
                <Plus className="w-[18px] h-[18px] font-black" strokeWidth={3} />
                <span>25 ₹ INR</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div className="flex items-start gap-4 flex-1">
                <GraduationCap className="w-[22px] h-[22px] text-[#5A32A3] shrink-0 mt-[2px]" />
                <div>
                  <span className="text-[#94A3B8] text-[14px] font-medium block mb-1">
                    Duration
                  </span>
                  <span className="font-bold text-[#111827] text-[16px]">
                    {country.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-1">
                <DollarSign className="w-[22px] h-[22px] text-[#22C55E] shrink-0 mt-[2px]" />
                <div>
                  <span className="text-[#94A3B8] text-[14px] font-medium block mb-1">
                    Fee Range
                  </span>
                  <span className="font-bold text-[#111827] text-[16px] whitespace-pre-line leading-tight block">
                    {country.feeRange}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
