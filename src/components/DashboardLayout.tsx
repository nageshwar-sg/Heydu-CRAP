import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo-1.svg';

interface DashboardLayoutProps {
  children: React.ReactNode;
  hideSidebar?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, hideSidebar = false }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#FAFAFA] overflow-hidden">

      {/* Sidebar Overlay for mobile */}
      {!hideSidebar && isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {!hideSidebar && (
        <aside className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-[#E8ECEF] flex flex-col shrink-0 overflow-y-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          {/* Logo Area */}
          <div className="p-8 pb-12 flex justify-center relative">
            <button
              className="md:hidden absolute top-4 right-4 p-2 text-gray-400 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center">
              <img src={logo} alt="Heydu Logo" className="w-48 h-auto object-contain" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2">
            <Link
              to="/welcome"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                currentPath === '/welcome' || currentPath === '/job-path'
                  ? 'bg-purple-50 text-[#5A32A3] border-l-4 border-[#5A32A3]'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
              }`}
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
          </nav>
        </aside>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Header */}
        <header className="h-20 bg-white border-b border-[#E8ECEF] flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center md:hidden">
            {!hideSidebar && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            {hideSidebar && (
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => (window.location.href = '/welcome')}>
                <div className="w-8 h-8 bg-[#5A32A3] rounded text-white flex items-center justify-center font-bold italic text-lg shadow-sm">
                  H
                </div>
                <span className="text-[#5A32A3] font-bold italic text-xl tracking-tight">Heydu</span>
              </div>
            )}
          </div>

          {hideSidebar && (
             <div className="hidden md:flex items-center gap-2 cursor-pointer" onClick={() => (window.location.href = '/welcome')}>
                <div className="w-8 h-8 bg-[#5A32A3] rounded text-white flex items-center justify-center font-bold italic text-lg shadow-sm">
                  H
                </div>
                <span className="text-[#5A32A3] font-bold italic text-xl tracking-tight">Heydu</span>
             </div>
          )}
          <div className="flex items-center gap-4 ml-auto">
             <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 leading-snug">Vemulapalli Srinivas</p>
                <p className="text-[11px] text-gray-500">Student</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
               <User className="w-5 h-5 text-gray-500" />
             </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#F8F9FB] relative">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
