import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SurveyLayout from '../components/SurveyLayout';

// Example Mock Data Arrays
const studies = ['B-Tech', 'BBA', 'MBA', 'B.com'];
const branches = [
  'Mechanical Engineering', 'Computer Science Engineering',
  'Electronics and Communication Engineering', 'Artificial Intelligence and Machine learning',
  'Electronics and Electrical Engineering', 'Information Technology'
];
const years = ['1st Year', '2st Year', '3st Year', '4st Year'];
const specializations = [
  'Artificial Intelligence', 'Manufacturing Engineering', 'Structural Analysis',
  'Automotive Engineering', 'Biomechanical Engineering', 'Thermal and fluid system',
  'Robotics and Automation', 'Material Science', 'Mechatronics'
];
const jobRoles = [
  'AI Engineer', 'Robotics Programmer', 'Mechatronics Engineer', 'Industrial Engineer',
  'System Integration Engineer', 'Research Scientist in Robotics', 'Automation Specialist',
  'Machine Learning Engineer', 'Control Systems Engineering', 'Automation Project Manager'
];
const softSkills = [
  'Communication skills ?', 'Are you a Teamwork ?', 'How would you describe your Presentation skill ?',
  'How would you describe your Time management?', 'How would you describe your Problem solving skill?'
];
const softSkillLevels = ['Good', 'Average', 'Bad'];
const countries = ['United States of America', 'Germany', 'Australia', 'Canada', 'United Kingdom', 'None'];

const Survey: React.FC = () => {
  const navigate = useNavigate();

  // Selected State
  const [selectedStudy, setSelectedStudy] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedJobRole, setSelectedJobRole] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const [skillsMapping, setSkillsMapping] = useState<Record<string, string>>({});

  const handleSkillSelect = (skill: string, level: string) => {
    setSkillsMapping(prev => ({ ...prev, [skill]: level }));
  };

  return (
    <SurveyLayout>
      <div className="py-6 px-4 md:px-0 max-w-[500px] lg:max-w-none mx-auto">

        {/* Page Title Area */}
        <div className="mb-8 md:pl-2 text-center md:text-left">
          <h1 className="text-[26px] md:text-3xl font-bold text-[#5A32A3] tracking-tight mb-1.5 md:mb-2 leading-tight">Career Assessment Survey</h1>
          <p className="text-[13px] md:text-sm text-[#7D76B1] font-medium">Help us understand your goals and interests</p>
        </div>

        {/* Progress Bar (Mock) */}
        <div className="w-full bg-white h-1.5 rounded-full mb-8 shadow-sm border border-gray-100 overflow-hidden relative max-w-sm mx-auto md:max-w-none md:mx-0">
          <div className="absolute top-0 left-0 bg-[#26328C] h-full w-[35%] rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 pb-24">

          {/* Main Form Content */}
          <div className="flex-1 space-y-6">

            {/* 1. Study */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[15px] md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">1. What are you studying?</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {studies.map((study) => (
                  <button
                    key={study}
                    onClick={() => setSelectedStudy(study)}
                    className={`px-6 py-2.5 rounded-lg border text-[14px] font-semibold transition-all ${
                      selectedStudy === study
                        ? 'border-[#5A32A3] bg-[#F5F3FF] text-[#5A32A3] shadow-sm'
                        : 'border-[#EBEBEB] bg-[#F8FAFC] text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {study}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Branch */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[15px] md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">2. What is your branch?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {branches.map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    className={`px-5 py-3.5 text-left rounded-lg border text-[14px] font-semibold transition-all ${
                      selectedBranch === branch
                        ? 'border-[#5A32A3] bg-[#F5F3FF] text-[#5A32A3] shadow-sm'
                        : 'border-[#EBEBEB] bg-[#F8FAFC] text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {branch}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Year */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[15px] md:text-lg font-semibold text-gray-900 mb-4 md:mb-6 leading-snug">3. Which year are you currently<br className="hidden md:block"/> studying in?</h2>
              <div className="flex flex-wrap gap-3">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-2.5 rounded-lg border text-[14px] font-semibold transition-all ${
                      selectedYear === year
                        ? 'border-[#5A32A3] bg-[#F5F3FF] text-[#5A32A3] shadow-sm'
                        : 'border-[#EBEBEB] bg-[#F8FAFC] text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Specialization */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[15px] md:text-lg font-bold text-gray-900 mb-6">4. What career specialization are you interested in ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {specializations.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpecialization(spec)}
                    className={`px-5 py-3.5 text-left rounded-lg border text-[14px] font-semibold transition-all ${
                      selectedSpecialization === spec
                        ? 'border-[#5A32A3] bg-[#F5F3FF] text-[#5A32A3] shadow-sm'
                        : 'border-[#EBEBEB] bg-[#F8FAFC] text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Job Role */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[15px] md:text-lg font-semibold text-gray-900 mb-4 md:mb-6 leading-snug">5. Please select your top 5 job roles<br className="hidden md:block"/> of interest in Robotics and<br className="md:hidden"/> Automation ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {jobRoles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedJobRole(role)}
                    className={`px-5 py-3.5 text-left rounded-lg border text-[14px] font-semibold transition-all ${
                      selectedJobRole === role
                        ? 'border-[#5A32A3] bg-[#F5F3FF] text-[#5A32A3] shadow-sm'
                        : 'border-[#EBEBEB] bg-[#F8FAFC] text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* 6. Soft Skills */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[15px] md:text-lg font-bold text-gray-900 mb-6">6. How are your soft skills ?</h2>
              <div className="space-y-4">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-1">
                    <span className="text-[14px] font-semibold text-gray-700">{skill}</span>
                    <div className="inline-flex rounded-lg border border-[#EBEBEB] overflow-hidden">
                      {softSkillLevels.map((lvl, i) => (
                         <button
                           key={lvl}
                           onClick={() => handleSkillSelect(skill, lvl)}
                           className={`px-6 py-2 md:py-2.5 min-w-[80px] text-[13px] font-bold transition-all ${
                             skillsMapping[skill] === lvl
                               ? 'bg-[#F5F3FF] text-[#5A32A3]'
                               : 'bg-white text-gray-500 hover:bg-gray-50'
                           } ${i !== 0 ? 'border-l border-[#EBEBEB]' : ''}`}
                         >
                           {lvl}
                         </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Country */}
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[15px] md:text-lg font-bold text-gray-900 mb-6">7. Which Country you are interested to Build your career?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className={`px-5 py-3.5 text-left rounded-lg border text-[14px] font-semibold transition-all ${
                      selectedCountry === country
                        ? 'border-[#5A32A3] bg-[#F5F3FF] text-[#5A32A3] shadow-sm'
                        : 'border-[#EBEBEB] bg-[#F8FAFC] text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sticky Order Summary */}
          <div className="w-full lg:w-[420px] shrink-0">
             <div className="sticky top-28 bg-white p-8 md:p-10 rounded-3xl shadow-[0px_8px_30px_rgba(0,0,0,0.06)] border border-[#EBEBEB]">
                <h3 className="text-2xl font-black text-gray-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Order Summary</h3>

                {/* Price Display */}
                <div className="flex items-center gap-3 mb-10">
                  <span className="text-[44px] font-bold text-[#0092E4] leading-none">₹98</span>
                  <span className="text-xl font-semibold text-gray-300 line-through mt-2">₹199</span>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center text-[16px]">
                     <span className="font-semibold text-gray-700">C-RAP report</span>
                     <span className="font-bold text-gray-900">₹199</span>
                  </div>
                  <div className="flex justify-between items-center text-[16px]">
                     <span className="font-bold text-gray-900">Subtotal</span>
                     <span className="font-bold text-gray-900">₹199</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 my-6"></div>

                <div className="flex justify-between items-center text-[16px] text-[#0092E4] font-bold mb-6">
                     <span>Discount (50%)</span>
                     <span>-₹101</span>
                </div>

                <div className="border-t border-dashed border-gray-200 my-6"></div>

                <div className="mt-8 mb-10">
                  <div className="flex justify-between items-center">
                     <span className="text-xl font-black text-gray-900">Total Payable</span>
                     <span className="text-xl font-black text-gray-900">₹98</span>
                  </div>
                  <p className="text-[13px] text-gray-400 mt-1 font-medium">(Inclusive GST)</p>
                </div>

                <button
                  onClick={() => navigate('/job-path')}
                  className="w-full bg-[#26328C] hover:bg-[#1E287A] text-white px-6 py-5 rounded-2xl text-[16px] font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]"
                >
                  Pay & Get Report
                  <ArrowRight className="w-5 h-5 ml-1" />
                </button>
             </div>
          </div>
        </div>

      </div>
    </SurveyLayout>
  );
};

export default Survey;
