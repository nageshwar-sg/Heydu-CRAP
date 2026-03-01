import React from 'react';

// Report Components
import { CoverPage } from '../components/report/CoverPage';
import { Blueprint } from '../components/report/Blueprint';
import { JourneyTimeline } from '../components/report/JourneyTimeline';
import { TrendingAI } from '../components/report/TrendingAI';
import { KeySubjects } from '../components/report/KeySubjects';
import { RecommendedProjects } from '../components/report/RecommendedProjects';
import { Internships } from '../components/report/Internships';
import { SkillUp } from '../components/report/SkillUp';
import { CareerGrowth } from '../components/report/CareerGrowth';
import { CountriesInfo } from '../components/report/CountriesInfo';
import { CountriesInfoExtra } from '../components/report/CountriesInfoExtra';
import { ThankYou } from '../components/report/ThankYou';
import { PageFooter } from '../components/report/PageFooter';
import { BackgroundPattern } from '../components/report/BackgroundPattern';

const ReportView: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] relative py-12 px-0 md:px-4">
      <div className="flex flex-col items-center w-full space-y-8 md:space-y-12">

          {/* Helper function/component for consistent page wrappers could be added here,
              but for now we'll ensure each component handles its own "page" identity
              or wrap them directly for consistency.
          */}

          {/* Page 1: Cover Page */}
          <div className="w-full md:w-[1000px] md:min-h-[1414px] bg-white md:shadow-2xl md:rounded-sm overflow-hidden flex flex-col items-center relative transition-all duration-300">
            {/* Global Background Pattern */}
            <BackgroundPattern maskPosition="top left" />
            <div className="relative z-10 w-full h-full flex flex-col items-center">
              <CoverPage />
            </div>
          </div>

          {/* Page 2: The Blueprint (Table of Contents) */}
          <div className="w-full md:w-[1000px] md:min-h-[1000px] bg-white md:shadow-2xl md:rounded-sm overflow-hidden flex flex-col relative transition-all duration-300">
            {/* Global Background Pattern */}
            <BackgroundPattern maskPosition="top left" />
            <div className="relative z-10 w-full h-full flex flex-col">
              <Blueprint />
            </div>
          </div>

          {/* Subsequent sections wrapped in the same "Page" style */}
          {[
            { id: 'journey', Component: JourneyTimeline },
            { id: 'trending', Component: TrendingAI },
            { id: 'subjects', Component: KeySubjects },
            { id: 'projects', Component: RecommendedProjects },
            { id: 'internships', Component: Internships },
            { id: 'skillup', Component: SkillUp },
            { id: 'career', Component: CareerGrowth },
            { id: 'countries', Component: CountriesInfo },
            { id: 'countries-extra', Component: CountriesInfoExtra },
            { id: 'thanks', Component: ThankYou },
          ].map(({ id, Component }) => (
            <div
              key={id}
              className="w-full md:w-[1000px] md:min-h-[1414px] bg-white md:shadow-2xl md:rounded-sm overflow-hidden flex flex-col relative transition-all duration-300"
            >
              {/* Global Background Pattern */}
              <BackgroundPattern maskPosition="top left" />
              <div className={`relative z-10 flex-1 flex flex-col ${id !== 'thanks' ? 'pb-24 md:pb-32' : ''}`}>
                <div className="flex-1">
                  <Component />
                </div>
                {id !== 'thanks' && <PageFooter />}
              </div>
            </div>
          ))}

        </div>
    </div>
  );
};

export default ReportView;
