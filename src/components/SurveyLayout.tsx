import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo-1.svg';

interface SurveyLayoutProps {
  children: React.ReactNode;
}

const SurveyLayout: React.FC<SurveyLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFEFE] flex flex-col relative">

      {/* Top Navigation */}
      <header className="h-20 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between xl:justify-start px-4 md:px-8 lg:px-12 shrink-0 z-10 relative">

        {/* Logo container */}
        <div className="flex-1 flex items-center xl:flex-none">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/welcome')}>
             <div className="flex items-center gap-2">
               <img src={logo} alt="Heydu Logo" className="w-10 h-auto object-contain" />
               <span className="text-[#5A32A3] font-black text-2xl tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>Heydu</span>
             </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#5A32A3] ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Center Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-500 absolute left-1/2 -translate-x-1/2">
          <Link to="#" className="hover:text-[#5A32A3] transition-colors">Heydu</Link>
          <Link to="#" className="text-[#5A32A3] border-b-2 border-[#5A32A3] pb-1">C-RAP</Link>
          <Link to="#" className="hover:text-[#5A32A3] transition-colors">Contact</Link>
        </nav>

        {/* Right Action (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end xl:flex-none xl:ml-auto">
          <button className="bg-[#26328C] hover:bg-[#1E287A] text-white px-7 py-2.5 rounded-lg text-[15px] font-bold flex items-center gap-2 transition-all shadow-sm">
            Download
            <ArrowRight className="w-4 h-4 ml-1 rotate-[-45deg]" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden py-4 px-6 flex flex-col gap-4 font-medium text-gray-600 z-50">
            <Link to="#" onClick={() => setIsMenuOpen(false)}>Heydu</Link>
            <Link to="#" className="text-[#5A32A3]" onClick={() => setIsMenuOpen(false)}>C-RAP</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}

      </header>

      {/* Main Content */}
      <main className="flex-1 w-full relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1FD] via-[#FDFEFE] to-[#FDFEFE] pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
};

export default SurveyLayout;
