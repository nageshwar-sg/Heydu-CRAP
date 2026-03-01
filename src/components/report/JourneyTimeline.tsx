import React from 'react';
import { GradientBackground } from './GradientBackground';
import { BookOpen, Briefcase, GraduationCap, Hand, Plane, Target, ChevronLeft, ChevronRight } from 'lucide-react';


export const JourneyTimeline: React.FC = () => {
  const y1 = 40;
  const y2 = 170;
  const y3 = 300;
  const y4 = 430;
  const yGrad = 560;
  const yHline = 660;

  const timelineNodes = [
    {
      top: y1,
      label: '1st Year',
      filled: true,
      leftBadge: (
        <div className="rounded-[14px] border border-[#CBD5E1] bg-white px-4 py-2 text-[14px] font-bold text-[#1E3A8A] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          B-Tech: CSE
        </div>
      ),
    },
    {
      top: y2,
      label: '2nd Year',
      filled: true
    },
    { top: y3, label: '3rd Year', filled: false },
    { top: y4, label: '4th Year', filled: false },
  ];

  return (
    <div className="bg-transparent w-full h-full relative overflow-hidden px-4 py-8 md:p-12">
      <GradientBackground
        centerPosition="top left"
        stops={[
          { color: '#FFFFFF', opacity: 0, position: '0%' },
          { color: '#FFFFFF', opacity: 0.8, position: '40%' },
          { color: '#FFFFFF', opacity: 1, position: '100%' },
        ]}
      />

      <div className="relative z-10  mx-auto w-full max-w-[640px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[40px] md:text-[46px] font-black text-[#1B2A56] leading-none mb-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Hello Adhitya!
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#273568] font-medium leading-tight">
            Here's what we know about your journey
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto w-full min-h-[780px]">
          {/* Main Vertical Line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-[#E2E8F0] z-0"
            style={{ top: `${y1}px`, height: `${yHline - y1}px` }}
          />

          {/* Regular Nodes */}
          {timelineNodes.map((year, i) => (
            <div key={i}>
              <div
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ top: `${year.top}px` }}
              >
                <div
                  className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] transition-all hover:scale-105 duration-200 ${
                    year.filled
                      ? 'border-[#2A2372] bg-[#4B3B9B] text-white'
                      : 'border-[#2A2372] bg-white text-[#4B3B9B]'
                  }`}
                >
                  <BookOpen className="h-[22px] w-[22px]" />
                </div>
              </div>
              <div
                className="absolute left-[calc(50%+40px)] transform -translate-y-1/2 z-10"
                style={{ top: `${year.top}px` }}
              >
                <span className="whitespace-nowrap text-[22px] md:text-[22px] font-extrabold text-[#111827]">
                  {year.label}
                </span>
              </div>
              {year.leftBadge && (
                <div
                  className="absolute right-[calc(50%+40px)] transform -translate-y-1/2 z-10"
                  style={{ top: `${year.top}px` }}
                >
                  {year.leftBadge}
                </div>
              )}
            </div>
          ))}

          {/* Soft Skills Card */}
          <div
            className="absolute left-[calc(50%+140px)] w-[165px] rounded-[16px] border border-[#E2E8F0] bg-[#FAFAFA] p-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] z-10 hidden md:block"
            style={{ top: `${y2 - 20}px` }}
          >
            <div className="mb-3 flex items-center gap-2 text-[14px] font-bold text-[#475569]">
              <Target className="h-[18px] w-[18px] text-[#64748B]" />
              Soft Skills
            </div>
            <ul className="space-y-[8px] text-[13px] font-medium text-[#334155]">
              {['Communication', 'Teamwork', 'Presentation', 'Time management', 'Problem solving'].map((skill) => (
                <li key={skill} className="flex items-center gap-[8px]">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#34D399] shrink-0" />
                  <span className="leading-tight">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Graduated Node */}
          <div>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: `${yGrad}px` }}
            >
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-[#6EE7B7] bg-[#ECFDF5] text-[#1E3A8A]">
                <GraduationCap className="h-[22px] w-[22px]" />
              </div>
            </div>
            <div
              className="absolute left-[calc(50%+40px)] transform -translate-y-1/2 z-10"
              style={{ top: `${yGrad}px` }}
            >
              <div className="flex items-center gap-[6px] rounded-[14px] border border-[#CBD5E1] bg-white px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span className="text-[16px]">👏</span>
                <span className="text-[15px] font-bold text-[#1E3A8A]">Graduated</span>
              </div>
            </div>
          </div>

          {/* Horizontal Split Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[160px] z-0"
            style={{ top: `${yHline}px`, marginTop: '-2px' }}
          >
            <ChevronLeft className="w-6 h-6 text-[#CBD5E1] -ml-[12px]" />
            <div className="flex-1 h-[3px] bg-[#E2E8F0]" />
            <ChevronRight className="w-6 h-6 text-[#CBD5E1] -mr-[12px]" />
          </div>

          {/* Abroad Branch */}
          <div
            className="absolute right-[calc(50%+85px)] flex flex-col items-end gap-3 z-10"
            style={{ top: `${yHline - 16}px` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[20px] md:text-[22px] font-extrabold text-[#111827]">Abroad</span>
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-[#2A2372] bg-white text-[#4B3B9B] shrink-0">
                <Plane className="h-[22px] w-[22px]" />
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-[10px] w-full justify-start shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="text-[16px]">🇺🇸</span>
              <span className="text-[14px] font-bold text-[#111827]">United States</span>
            </div>
          </div>

          {/* Job Branch */}
          <div
            className="absolute left-[calc(50%+85px)] flex flex-col items-start gap-3 z-10"
            style={{ top: `${yHline - 16}px` }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-[#2A2372] bg-white text-[#4B3B9B] shrink-0">
                <Briefcase className="h-[22px] w-[22px]" />
              </div>
              <span className="text-[20px] md:text-[22px] font-extrabold text-[#111827]">Job</span>
            </div>
            <div className="flex items-center justify-center rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-[10px] w-full shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="text-[14px] font-bold text-[#111827]">AI Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
