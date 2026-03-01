import React from 'react';
import { Building2, TrendingUp, CheckCircle2, Target, DollarSign, Code2 } from 'lucide-react';
import { GradientBackground } from './GradientBackground';

export const Internships: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      {/* Background Layers */}
      <GradientBackground
              centerPosition="top left"
              stops={[
                { color: '#FFFFFF', opacity: 0, position: '0%' },
                { color: '#FFFFFF', opacity: 0.8, position: '40%' },
                { color: '#FFFFFF', opacity: 1, position: '100%' },
              ]}
            />

      <div className="relative z-10  px-6 py-6 md:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-[#1034A6] mb-2">Internships</h1>
          <p className="text-[#6B7280] text-lg font-semibold italic">Do one Internship during Year-4</p>
        </div>

        {/* Hero Card: GenAI Intern */}
        <div className="bg-[#F9F8FF] rounded-[40px] p-8 mb-8 border border-[#E9E1F5]/50 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-[#111827] mb-6">GenAI Intern</h2>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#059669]">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
              <div>
                <p className="text-[#6B7280] text-sm font-bold uppercase tracking-wider mb-1">Expected Stipend (INR)</p>
                <p className="text-3xl font-black text-[#111827]">20,000 - 60,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Skill Set Required */}
          <div className="bg-white rounded-[32px] p-6 border border-[#F3F4F6] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#5A32A3]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#111827]">Skill Set Required</h3>
            </div>
            <div className="space-y-4">
              {[
                'LLMs (GPT/Llama)',
                'LangChain',
                'Vector DBs',
                'Streamlit',
                'API integration'
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EFECFF] text-[#5346AF] font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Companies List */}
          <div className="bg-white rounded-[32px] p-6 border border-[#F3F4F6] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-[#166534]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#111827]">Companies List</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Big', value: 'NVIDIA, Adobe, Meta' },
                { label: 'Medium', value: 'Freshworks, Uniphore, Cred /' },
                { label: 'Small', value: 'any AI startup (high pay)' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#F8F9FA] p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <span className="font-bold text-[#374151]">{item.label}: </span>
                    <span className="text-[#6B7280]">{item.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-[32px] p-6 border border-[#F3F4F6] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1E40AF]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#111827]">Activities</h3>
            </div>
            <div className="space-y-4">
              {[
                'Develop RAG chatbots',
                'Optimize prompt performance',
                'Integrate AI into web apps'
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EBF5FF] text-[#1E40AF] font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="bg-[#EEF2FF]/30 rounded-[32px] p-6 border border-[#E0E7FF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1E40AF] shadow-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111827]">Conversion Rate</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <p className="text-sm text-[#4B5563] font-medium leading-tight">Avg. Conversion % to Full-Time</p>
                <p className="text-4xl font-black text-[#1034A6]">48%</p>
              </div>
            </div>
            <div className="w-full bg-[#E0E7FF] rounded-full h-3 overflow-hidden">
              <div className="bg-[#1034A6] h-full rounded-full" style={{ width: '48%' }}></div>
            </div>
          </div>
        </div>

        {/* Footer: Referral Section */}
        <div className="bg-white rounded-[32px] p-8 border border-[#F3F4F6] shadow-sm">
          <h3 className="text-2xl font-black text-[#374151] mb-4">Refer them for opertunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Internshala.com', 'LinkedIn.com', 'Glassdoor.com'].map((link, i) => (
              <a
                key={i}
                href={`https://${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3B82F6] text-xl font-bold hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
