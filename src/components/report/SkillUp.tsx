import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { GradientBackground } from './GradientBackground';

const skillTracks = [
  {
    category: 'Python Programming',
    courses: [
      {
        level: 'Basic',
        levelClass: 'bg-[#DCFCE7] text-[#16A34A]',
        title: 'Python for Data Science, AI & Development',
        desc: 'First course complete, ok, second one good, third one excellent',
        duration: '20-25 hrs',
        cost: '$49 per month for full access & certificate',
      },
      {
        level: 'Intermediate',
        levelClass: 'bg-[#DBEAFE] text-[#2563EB]',
        title: 'Google IT Automation with Python – Professional Certificate',
        desc: 'Completed',
        duration: '20-25 hrs',
        cost: '$49 per month for full access & certificate',
      },
      {
        level: 'Advanced',
        levelClass: 'bg-[#F3E8FF] text-[#9333EA]',
        title: 'AI Engineering Professional Certificate (Python-focused)',
        desc: 'Completed',
        duration: '20-25 hrs',
        cost: '$49 per month for full access & certificate',
      }
    ]
  }
];

export const SkillUp: React.FC = () => {
  const [openTracks, setOpenTracks] = useState([0]);

  const toggleTrack = (index: number) => {
    setOpenTracks(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
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
            className="text-[40px] md:text-[46px] font-black text-[#1B2A56] leading-none mb-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Skill-Up
          </h2>
          <p className="text-[16px] xl:text-[18px] text-[#475569] font-medium">
            Get certified to level up your skills for that AI Engineer gig!
          </p>
        </div>

        {/* Tracks */}
        <div className="space-y-8">
          {skillTracks.map((track, trackIdx) => {
            const isOpen = openTracks.includes(trackIdx);

            return (
              <div key={trackIdx} className="flex flex-col gap-5">
                {/* Track Category Header */}
                <button
                  onClick={() => toggleTrack(trackIdx)}
                  className="w-full flex items-center justify-between hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-7 h-7 text-[#5A32A3] shrink-0" />
                    <h3 className="text-[24px] font-bold text-[#111827]">
                      {track.category}
                    </h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#94A3B8]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#94A3B8]" />
                  )}
                </button>

                {/* Course List */}
                {isOpen && (
                  <div className="flex flex-col gap-4 pl-2 md:pl-10">
                    {track.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-[16px] border border-[#5A32A3] border-l-[6px] shadow-sm p-6"
                      >
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Left Column (Title & Desc) */}
                          <div className="flex-1">
                            <span
                              className={`inline-block px-3 py-1 rounded-[6px] text-[12px] font-bold mb-3 ${course.levelClass}`}
                            >
                              {course.level}
                            </span>
                            <h4 className="text-[17px] font-bold text-[#111827] mb-2 leading-tight">
                              {course.title}
                            </h4>
                            <p className="text-[14px] text-[#64748B] leading-relaxed">
                              {course.desc}
                            </p>
                          </div>

                          {/* Right Column (Info & Action) */}
                          <div className="flex-1 lg:max-w-[360px] flex flex-col gap-4 pt-1">
                            <div className="flex items-center justify-between">
                              <div className="flex gap-3 text-[15px] text-[#475569] font-medium items-center">
                                <Calendar className="w-[18px] h-[18px] text-[#94A3B8] shrink-0" />
                                <span>{course.duration}</span>
                              </div>
                              <a
                                href="#"
                                className="flex items-center gap-2 text-[14px] font-bold text-[#5A32A3] hover:underline"
                              >
                                <ExternalLink className="w-4 h-4" /> View Course
                              </a>
                            </div>

                            <div className="flex gap-3 text-[15px] text-[#475569] font-medium items-start">
                              <div className="shrink-0 flex items-center justify-center w-[18px] h-[18px]">
                                <span className="text-[18px] text-[#94A3B8] font-light leading-none">
                                  $
                                </span>
                              </div>
                              <span className="leading-tight">
                                {course.cost}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
