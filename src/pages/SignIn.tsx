import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import { Mail, Lock } from 'lucide-react';
import signInImg from '../assets/images/sign-in-1.svg';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate('/signin-otp', { state: { email } });
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
      <div className="flex flex-col h-full justify-center py-10">
        <h2 className="text-4xl font-bold text-[#2D2A6E] tracking-tight">Sign In</h2>
        <p className="text-gray-500 text-lg mt-3 mb-10">Enter your email to receive a one-time password</p>

        <form onSubmit={handleSendOTP} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            icon={<Mail className="w-5 h-5 text-gray-400" />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="pt-4">
            <Button type="submit" showArrow className="w-full py-4 text-base shadow-lg shadow-purple-500/20">
              Send OTP
            </Button>
          </div>
        </form>

        <div className="mt-10 text-center text-base">
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

export default SignIn;
