import React, { useState } from 'react';
import { GraduationCap, Briefcase, ChevronDown, ChevronUp, ExternalLink, DollarSign, Building2 } from 'lucide-react';
import { GradientBackground } from './GradientBackground';

const countries = [
  {
    name: 'United States',
    flag: '🇺🇸',
    subtitle: 'Doing Masters, is the option for students/freshers to enter into USA',
    expanded: true, // Initially expanded as per mockup
    courseInfo: {
      program: 'M Sc. in Artificial Intelligence / Machine\nLearning / Computer Science (AI-track)',
      duration: '2 years Full time',
      annualFee: '$40k-$70k per year'
    },
    colleges: {
      top: ['Stanford', 'Carnegie Mellon', 'MIT', 'UC Berkeley', 'Georgia Tech'],
      medium: ['University of Illinois Urbana-\nChampaign', 'Arizona State University', 'Northeastern University']
    },
    loans: [
      { name: 'SBI Education Loan', rate: 'up to 9.5% p.a.' },
      { name: 'HDFC Education Loan', rate: 'up to 9% p.a.' },
      { name: 'Govt. "Study Abroad" scheme', rate: 'interest-subsidised\nProvide bank links' }
    ],
    jobRole: {
      visaProcess: 'OPT (12 mo. +24 mo STEM extension) →\nH-1B (lottery) → EB-2/EB-3 green-card',
      expectedSalary: '$100k-$150k per yr',
      jobTrend: 'Very high – US firms sponsor ~30\n% of Indian AI hires. 2024 H-1B\ncap filled 99 % within days.'
    }
  }
];

export const CountriesInfo: React.FC = () => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>('United States');

  const toggleCountry = (name: string) => {
    setExpandedCountry(prev => prev === name ? null : name);
  };

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

      <div className="relative z-10 px-6 py-6 md:px-12 mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-[36px] md:text-[42px] font-black text-[#1E3A8A] leading-tight mb-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            AI Engineer In Different Countries!
          </h2>
        </div>

        <div className="space-y-6">
          {countries.map((country, idx) => {
            const isExpanded = expandedCountry === country.name;

            return (
              <div
                key={idx}
                className={`rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'bg-[#FDF9FF] shadow-sm' : 'bg-[#FAFAFA] border border-[#E2E8F0]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleCountry(country.name)}
                  className="w-full text-left p-6 md:px-8 md:pt-8 md:pb-6 flex flex-col gap-3 relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[28px] leading-none">{country.flag}</span>
                      <h3 className="text-[24px] font-bold text-[#111827]">{country.name}</h3>
                    </div>

                    <div className="text-[#475569]">
                      {isExpanded ? (
                        <ChevronUp className="w-7 h-7" />
                      ) : (
                        <ChevronDown className="w-7 h-7" />
                      )}
                    </div>
                  </div>

                  {country.subtitle && (
                    <p className="text-[16px] text-[#475569] pl-10 font-medium">
                      {country.subtitle}
                    </p>
                  )}
                </button>

                {/* Expanded Content Area */}
                {isExpanded && country.courseInfo && (
                  <div className="p-6 md:p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FDF9FF]">
                    {/* Left Column (Course info, Top Colleges) */}
                    <div className="space-y-6">
                      {/* Course Information Card */}
                      <div className="bg-white p-6 rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#E2E8F0]">
                        <h4 className="font-bold text-[#111827] text-[18px] mb-5 flex items-center gap-3">
                          <GraduationCap className="w-6 h-6 text-[#5A32A3]" /> Course Information
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <span className="text-[#94A3B8] text-[13px] font-medium block mb-1">
                              Program
                            </span>
                            <span className="font-bold text-[#111827] text-[14px] leading-snug block whitespace-pre-line">
                              {country.courseInfo.program}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#94A3B8] text-[13px] font-medium block mb-1">
                              Duration
                            </span>
                            <span className="font-bold text-[#111827] text-[14px]">
                              {country.courseInfo.duration}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#94A3B8] text-[13px] font-medium block mb-1">
                              Annual Fee
                            </span>
                            <span className="font-bold text-[#5A32A3] text-[16px]">
                              {country.courseInfo.annualFee}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Top Colleges Card */}
                      <div className="bg-white p-6 pb-2 rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#E2E8F0]">
                        <h4 className="font-bold text-[#111827] text-[18px] mb-4 flex items-center gap-3">
                          <Building2 className="w-6 h-6 text-[#5A32A3]" /> Top Colleges
                        </h4>
                        <div className="space-y-2">
                          {country.colleges?.top.map((college, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-4 p-3 bg-[#FDF9FF] rounded-[12px]"
                            >
                              <div className="w-[26px] h-[26px] rounded-full bg-[#5A32A3] text-white font-bold text-[13px] flex items-center justify-center shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-[15px] font-medium text-[#111827]">
                                {college}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Medium Tier Colleges Section */}
                        <div className="mt-8 mb-4">
                          <h4 className="font-bold text-[#111827] text-[18px] mb-4 flex items-center gap-3">
                            <Building2 className="w-6 h-6 text-[#5A32A3]" /> Medium Tier Colleges
                          </h4>
                          <ul className="space-y-4 px-2">
                            {country.colleges?.medium.map((college, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-[#5A32A3] shrink-0 mt-[8px]"></span>
                                <span className="text-[15px] font-medium text-[#475569] whitespace-pre-line leading-relaxed">
                                  {college}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column (Loans, Job Role) */}
                    <div className="space-y-6 pt-2">
                      {/* Education Loan Options Card */}
                      <div className="bg-white p-6 rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#D1FAE5]">
                        <h4 className="font-bold text-[#111827] text-[18px] mb-5 flex items-center gap-3">
                          <DollarSign className="w-6 h-6 text-[#9333EA]" /> Education Loan Options
                        </h4>
                        <div className="space-y-3">
                          {country.loans?.map((loan, i) => (
                            <div
                              key={i}
                              className="border border-[#E2E8F0] rounded-[12px] p-4 flex items-center justify-between"
                            >
                              <div>
                                <div className="font-bold text-[#111827] text-[15px] mb-1">
                                  {loan.name}
                                </div>
                                <div className="text-[13px] text-[#9333EA] font-medium whitespace-pre-line leading-tight">
                                  {loan.rate}
                                </div>
                              </div>
                              <div className="text-[#94A3B8]">
                                <ExternalLink className="w-5 h-5" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* About AI Engineer Job Role Card */}
                      <div className="bg-white p-6 rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#DBEAFE]">
                        <h4 className="font-bold text-[#111827] text-[18px] mb-5 flex items-center gap-3">
                          <Briefcase className="w-6 h-6 text-[#5A32A3]" /> About AI Engineer Job Role
                        </h4>

                        <div className="space-y-5">
                          <div>
                            <span className="text-[#64748B] text-[14px] font-medium block mb-2">
                              Work Visa Process
                            </span>
                            <div className="bg-white rounded-[12px] p-4 border border-[#E2E8F0] text-[14px] font-semibold text-[#334155] whitespace-pre-line leading-relaxed">
                              {country.jobRole?.visaProcess}
                            </div>
                          </div>

                          <div>
                            <span className="text-[#64748B] text-[14px] font-medium block mb-1">
                              Expected Salary
                            </span>
                            <span className="font-black text-[20px] text-[#9333EA]">
                              {country.jobRole?.expectedSalary}
                            </span>
                          </div>

                          <div>
                            <span className="text-[#64748B] text-[14px] font-medium block mb-2">
                              Job Trend
                            </span>
                            <p className="text-[14px] text-[#475569] whitespace-pre-line leading-relaxed font-medium">
                              {country.jobRole?.jobTrend}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
