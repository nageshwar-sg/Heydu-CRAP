import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Paperclip } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

interface CRapReport {
  id: string;
  course: string;
  jobRole: string;
  date: string;
}

const mockReports: CRapReport[] = [
  {
    id: '16CS1A1003',
    course: 'Artificial Intelligence',
    jobRole: 'AI Engineer',
    date: '12/10/2025'
  },
  {
    id: '16CS1A1004',
    course: 'Robotics and Automation',
    jobRole: 'Robotics Engineer',
    date: '10/01/2026'
  },
  {
    id: '16CS1A1005',
    course: 'Machine Learning',
    jobRole: 'ML Engineer',
    date: '08/02/2026'
  }
];

const JobPath: React.FC = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-8 lg:p-12 h-full flex flex-col max-w-6xl mx-auto w-full">

        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">

          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A32A3]/20 focus:border-[#5A32A3] sm:text-sm transition-all shadow-sm"
              placeholder="Search"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={() => navigate('/survey')}
            className="w-full sm:w-auto bg-[#5A32A3] hover:bg-[#4B2A8B] text-white px-5 py-3 rounded-xl text-[15px] font-medium flex items-center justify-center gap-2 transition-colors shadow-sm whitespace-nowrap"
          >
            Generate C-RAP
            <Plus className="w-5 h-5 ml-1" />
          </button>
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-1">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#FAFBFD]">
              <tr>
                <th scope="col" className="px-8 py-5 text-left text-sm font-semibold text-gray-700">ID</th>
                <th scope="col" className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Course</th>
                <th scope="col" className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Job Role</th>
                <th scope="col" className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Date</th>
                <th scope="col" className="px-8 py-5 text-center text-sm font-semibold text-gray-700">Report</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {mockReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-900">{report.id}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-900">{report.course}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-900">{report.jobRole}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-900">{report.date}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm flex justify-center">
                    <button
                      onClick={() => window.open(`/report/${report.id}`, '_blank')}
                      className="flex items-center gap-2 text-[#5A32A3] border border-[#5A32A3] hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Paperclip className="w-4 h-4" />
                      View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (Hidden on desktop) */}
        <div className="md:hidden space-y-4">
          {mockReports.map((report) => (
            <div key={report.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                  <div>
                     <p className="text-xs text-gray-500 font-medium mb-1">ID</p>
                     <p className="font-semibold text-gray-900">{report.id}</p>
                  </div>
                  <div className="text-right">
                     <p className="text-xs text-gray-500 font-medium mb-1">Date</p>
                     <p className="text-sm text-gray-900">{report.date}</p>
                  </div>
              </div>
              <div>
                 <p className="text-xs text-gray-500 font-medium mb-1">Course</p>
                 <p className="text-sm text-gray-900">{report.course}</p>
              </div>
              <div>
                 <p className="text-xs text-gray-500 font-medium mb-1">Job Role</p>
                 <p className="text-sm text-gray-900">{report.jobRole}</p>
              </div>
              <button
                onClick={() => window.open(`/report/${report.id}`, '_blank')}
                className="mt-2 w-full flex items-center justify-center gap-2 text-[#5A32A3] border border-[#5A32A3] hover:bg-purple-50 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                  <Paperclip className="w-4 h-4" />
                  View Report
              </button>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
};

export default JobPath;
