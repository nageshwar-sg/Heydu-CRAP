import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import { User, Mail } from 'lucide-react';
import signUpImg from '../assets/images/sign-up-1.svg';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      navigate('/signup-otp', { state: { email } });
    }
  };

  return (
    <AuthLayout
      leftPanelContent={{
        title: 'Start Your Journey!',
        imagePlacholderText: 'Sign Up Illustration',
        image: signUpImg,
        features: [
          {
            title: 'Comprehensive Dashboard',
            description: 'Access detailed analytics on knowledge, projects, skills & more'
          },
          {
            title: 'Internship Tracking',
            description: 'Explore and track AI, GenAI, and Data Science internships'
          },
          {
            title: 'Career Growth Planning',
            description: 'Plan your 5-year journey across IT, E-commerce, Healthcare & Finance'
          },
          {
            title: 'Market Insights',
            description: 'Stay updated with the latest AI industry trends and opportunities'
          }
        ]
      }}
    >
      <div className="flex flex-col h-full justify-center py-6">
        <h2 className="text-4xl font-bold text-[#2D2A6E] tracking-tight">Create Account</h2>
        <p className="text-gray-500 text-lg mt-3 mb-10">Fill in your details to get started</p>

        <form onSubmit={handleContinue} className="space-y-6">
          <Input
            label="Full Name"
            placeholder="John Doe"
            icon={<User className="w-5 h-5 text-gray-400" />}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            <Button
              type="submit"
              showArrow
              className="w-full py-4 text-base shadow-lg shadow-purple-500/20"
              disabled={!name || !email}
            >
              Continue
            </Button>
          </div>
        </form>

        <div className="mt-10 text-center text-base">
          <span className="text-gray-500">Already have an account? </span>
          <Link to="/signin" className="text-[#5A32A3] font-bold hover:underline ml-1">
            Sign In
          </Link>
        </div>

        <div className="mt-12 text-center text-xs text-gray-400 font-medium leading-relaxed max-w-[280px] mx-auto">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-gray-500 hover:text-gray-700 underline font-semibold">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-gray-500 hover:text-gray-700 underline font-semibold">Privacy Policy</a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
