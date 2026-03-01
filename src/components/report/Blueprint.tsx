import { GradientBackground } from './GradientBackground';
import { ArrowUpRight } from 'lucide-react';
import blueprintBg from '../../assets/images/blueprint-bg-1.jpg';

const steps = [
  'About Yourself',
  'Latest Tech',
  'Projects & internships',
  'Career Growth',
  'Certification',
  'Abroad',
];

const SIDE_IMAGE_URL = blueprintBg;

export const Blueprint: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 w-full relative h-full min-h-screen md:min-h-[1000px] overflow-hidden">
      {/* Background Layers */}
      <GradientBackground
        centerPosition="top left"
        stops={[
          { color: '#EFECFF', opacity: 0.8, position: '0%' },
          { color: '#FFFFFF', opacity: 0.5, position: '40%' },
          { color: '#FFFFFF', opacity: 0, position: '100%' }
        ]}
      />

      {/* Left Visual Panel - Purple tinted image with curved bottom-right */}
      <div className="w-full md:w-[35%] bg-[#3A338A] relative flex flex-col overflow-hidden rounded-br-[180px] md:rounded-br-[220px]">
        {/* Background Image with Grayscale + Purple Overlay */}
        <div
          className="absolute inset-0 grayscale contrast-125 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: `url('${SIDE_IMAGE_URL}')` }}
        />
        <div className="absolute inset-0 bg-[#3A338A]/70 mix-blend-multiply" />


        {/* Persona Portrait Spacer - Ensures the image area has presence */}
        <div className="flex-1 relative z-10 p-12" />
      </div>

      {/* Right Content Panel - Pure White with Typography */}
      <div className="flex-1 bg-white p-12 md:p-20 lg:p-24 flex flex-col relative">

        {/* Header with Arrow Icon */}
        <div className="flex items-start gap-6 mb-16">
            <ArrowUpRight className="w-20 h-20 text-[#3A338A] -mt-2" strokeWidth={2.5} />
            <h2 className="text-[54px] md:text-[64px] font-black text-[#3A338A] tracking-tighter leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
              The Blueprint
            </h2>
        </div>

        {/* Numbered List / Timeline */}
        <div className="relative space-y-10 pl-6">
          {/* Vertical Timeline Line - Centered at 50px (24px padding + 26px half-circle) */}
          <div className="absolute left-[50px] top-6 bottom-6 w-[3px] bg-[#3A338A] opacity-80" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center group relative z-10 transition-transform hover:translate-x-1 duration-300">
              <div className="w-[52px] h-[52px] rounded-full bg-white border-[2px] border-[#3A338A] flex items-center justify-center text-[#3A338A] font-bold text-xl shadow-sm z-20" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {idx + 1}
              </div>
              <span className="ml-8 text-[22px] md:text-[26px] font-bold text-gray-900 tracking-tight group-hover:text-[#3A338A] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {step}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
