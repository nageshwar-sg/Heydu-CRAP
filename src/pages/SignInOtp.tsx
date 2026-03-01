import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import OTPInput from '../components/OTPInput';
import Button from '../components/Button';
import { Lock } from 'lucide-react';
import signInImg from '../assets/images/sign-in-1.svg';

const SignInOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'yourexample@gmail.com';
  const [otp, setOtp] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      // Mock successful verification
      navigate('/welcome');
    }
  };

  return (
    <AuthLayout
      leftPanelContent={{
        title: 'Welcome Back!',
        imagePlacholderText: 'Sign In Illustration',
        image: signInImg,
        features: [
          {
            title: 'Track Your Progress',
            description: 'Monitor your growth across multiple areas with detailed dashboards'
          },
          {
            title: 'Secure Access',
            description: 'OTP-based authentication keeps your data safe'
          },
          {
            title: 'Career Planning',
            description: 'Plan your 5-year career growth across different industries'
          }
        ]
      }}
    >
      <div className="flex flex-col h-full justify-center py-6">
        <h2 className="text-4xl font-bold text-[#2D2A6E] tracking-tight">Verify Email</h2>
        <p className="text-gray-500 text-lg mt-3 mb-10">Enter the 6-digit code sent to your email</p>

        <form onSubmit={handleVerify} className="space-y-8">
          <div className="bg-[#EFECFF] text-[#2D2A6E] rounded-2xl px-6 py-5 text-base text-center border border-[#DED4EE] font-medium leading-relaxed">
            We sent a 6-digit code to <br/> <span className="font-bold text-[#5A32A3]">{email}</span>
          </div>

          <div className="space-y-4">
            <label className="text-base font-bold text-gray-700 ml-1">Enter OTP</label>
            <div className="flex justify-center scale-110 origin-center py-2">
               <OTPInput value={otp} onChange={setOtp} />
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              showArrow
              className="w-full py-4 text-base shadow-lg shadow-purple-500/20"
              disabled={otp.length !== 6}
            >
              Verify & Sign In
            </Button>
          </div>

          <div className="flex justify-between items-center text-base mt-2 px-2">
            <button type="button" onClick={() => navigate('/signin')} className="text-gray-500 hover:text-gray-700 font-bold">
              Change email
            </button>
            <button type="button" className="text-[#5A32A3] hover:text-[#482685] font-bold">
              Resend OTP
            </button>
          </div>
        </form>

        <div className="mt-12 text-center text-base">
          <span className="text-gray-500">Don't have an account? </span>
          <Link to="/signup" className="text-[#5A32A3] font-bold hover:underline ml-1">
            Sign Up
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium">
          <Lock className="w-4 h-4" />
          <span>Your data is encrypted and secure</span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInOtp;
