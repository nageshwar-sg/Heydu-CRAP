import React from 'react';
import { Briefcase, Users, Award, ChevronRight, Clock, Target } from 'lucide-react';
import { GradientBackground } from './GradientBackground';

const progression = [
  {
    title: 'Junior AI Engineer',
    level: 'Level 1',
    experience: '0-2 years experience',
    salary: '6-8 LPA',
    icon: <Briefcase className="w-5 h-5" />,
    responsibilities: [
      'Implement pre-built models for client projects',
      'Write production-grade Python/SQL code',
      'Perform data cleaning & basic feature engineering'
    ]
  },
  {
    title: 'AI Engineer',
    level: 'Level 2',
    experience: '2-5 years experience',
    salary: '10-14 LPA',
    icon: <Users className="w-5 h-5" />,
    responsibilities: [
      'Lead a small project (2-3 engineers)',
      'Design end-to-end pipelines (data → model → deployment)',
      'Interact with client-side data-science teams and present results'
    ]
  },
  {
    title: 'Lead AI Engineer',
    level: 'Level 3',
    experience: '>5 years experience',
    salary: '18-25 LPA',
    icon: <Award className="w-5 h-5" />,
    responsibilities: [
      'Own AI roadmap for a practice area',
      'Manage a team of 5-10 engineers',
      'Drive R&D, budgeting, and hiring'
    ]
  }
];

export const CareerGrowth: React.FC = () => {
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
            className="text-[40px] md:text-[46px] font-black text-[#1B2A56] leading-tight mb-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            5 Years Of Growth In Multiple
            <br />
            Industries!
          </h2>
        </div>

        {/* Main Content Box */}
        <div className="bg-white rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-hidden">

          {/* Header Row */}
          <div className="bg-[#FDF9FF] px-8 py-6 border-b border-[#F1E8FC] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-[26px] font-bold text-[#5A32A3] leading-none mb-2">
                Information Technology
              </h3>
              <p className="text-[#64748B] text-[15px] font-medium">
                3 career progression levels
              </p>
            </div>

            <div className="text-right">
              <p className="text-[#64748B] text-[15px] font-medium mb-1">
                Salary Range
              </p>
              <div className="flex items-center justify-end gap-2 text-[20px] font-bold text-[#5A32A3]">
                <span>6-8 LPA</span>
                <span>→</span>
                <span>18-25 LPA</span>
              </div>
            </div>
          </div>

          {/* Timeline Area */}
          <div className="px-8 pb-8 pt-10 relative">
            {/* Vertical Line */}
            <div className="absolute top-[60px] bottom-[60px] left-[63px] w-[2px] bg-[#E2E8F0] hidden md:block z-0"></div>

            <div className="space-y-10 relative z-10">
              {progression.map((stage, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                  {/* Icon Node */}
                  <div className="hidden md:flex w-[60px] shrink-0 justify-center relative mt-4">
                    <div className="w-[60px] h-[60px] rounded-full border-[2.5px] border-[#F1E8FC] bg-white flex items-center justify-center text-[#5A32A3] shadow-[0_0_0_8px_white]">
                      {stage.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-[#FAFAFA] rounded-[20px] p-6 border border-[#E2E8F0] shadow-sm w-full">
                    {/* Title & Level Tag */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h4 className="text-[22px] font-bold text-[#111827] leading-none">
                        {stage.title}
                      </h4>
                      <span className="bg-[#FDF9FF] text-[#5A32A3] px-3 py-1 rounded-[8px] text-[13px] font-bold border border-[#F1E8FC]">
                        {stage.level}
                      </span>
                    </div>

                    {/* Meta Info (Duration & Salary) */}
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 text-[15px] text-[#475569] font-medium">
                        <Clock className="w-[18px] h-[18px] text-[#94A3B8]" />
                        {stage.experience}
                      </div>
                      <div className="flex items-center gap-2 text-[15px] font-bold text-[#16A34A]">
                        <span className="text-[#22C55E] text-[16px]">$</span>
                        {stage.salary}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h5 className="font-bold text-[#475569] text-[15px] mb-4 flex items-center gap-2">
                        <Target className="w-[18px] h-[18px] text-[#94A3B8]" />
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-3">
                        {stage.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ChevronRight className="w-[18px] h-[18px] text-[#9333EA] shrink-0 mt-[2px]" />
                            <span className="text-[#475569] text-[15px] leading-relaxed">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
