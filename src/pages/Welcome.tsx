import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Sparkles, ArrowRight } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import welcomeImg from '../assets/images/welcome-1.svg';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Content Half */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B308B] tracking-tight mb-2">
            Hello Vemulapalli Srinivas.
          </h1>

          <div className="flex items-center gap-2 mb-10">
            <span className="text-[#5A32A3] font-bold italic text-3xl opacity-80">Heydu</span>
            <span className="text-2xl text-[#2F3E66] font-semibold">Welcomes You</span>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 bg-transparent rounded-lg p-2">
              <div className="w-10 h-10 rounded-full bg-[#F3EEFA] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-[#5A32A3]" />
              </div>
              <p className="text-lg text-[#2F3E66] font-medium">
                Start your journey with us to plan and achieve your first job
              </p>
            </div>

            <div className="flex items-center gap-4 bg-transparent rounded-lg p-2">
              <div className="w-10 h-10 rounded-full bg-[#F3EEFA] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#5A32A3]" />
              </div>
              <p className="text-lg text-[#2F3E66] font-medium">
                We are here to help you in this Journey
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3 font-medium">Start your journey now</p>
            <button
              onClick={() => navigate('/job-path')}
              className="bg-[#2D45BD] hover:bg-[#223595] text-white px-6 py-3.5 rounded-lg text-[15px] font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              Launch my first Job Path
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

        {/* Right Illustration Half */}
        <div className="w-full lg:w-1/2 bg-transparent flex items-center justify-center p-6 md:p-8 lg:p-16 relative">
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            <img src={welcomeImg} alt="Welcome Illustration" className="w-full h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Welcome;
