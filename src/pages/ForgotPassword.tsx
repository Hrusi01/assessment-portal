import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { FormInput } from '../components/ui/FormInput';
import { PrimaryButton } from '../components/ui/Button';

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE] flex flex-col">
      <Header variant="public" showSignupNav />

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Reset Password</h2>
          <p className="text-sm text-slate-500 text-center mb-8">Enter your email to receive a reset OTP</p>

          <div className="space-y-5">
            {/* Email + Send OTP */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700">Email / Phone</label>
              <div className="flex h-12 rounded-md border border-slate-200 overflow-hidden focus-within:border-[#4F8BF9] focus-within:ring-2 focus-within:ring-[#4F8BF9]/20 transition-all">
                <span className="flex items-center pl-3 pr-2 text-slate-400">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  placeholder="Enter email or phone"
                  className="flex-1 px-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                />
                <button className="px-4 text-xs font-medium bg-[#4F8BF9] hover:bg-[#3B6FD1] text-white transition-colors whitespace-nowrap">
                  Send OTP
                </button>
              </div>
            </div>

            {/* OTP + Validate */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700">Enter OTP</label>
              <div className="flex h-12 rounded-md border border-slate-200 overflow-hidden focus-within:border-[#4F8BF9] focus-within:ring-2 focus-within:ring-[#4F8BF9]/20 transition-all">
                <input
                  type="text"
                  placeholder="6-digit OTP"
                  className="flex-1 px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                  maxLength={6}
                />
                <button className="px-4 text-xs font-medium bg-[#4F8BF9] hover:bg-[#3B6FD1] text-white transition-colors whitespace-nowrap">
                  Validate
                </button>
              </div>
            </div>

            <FormInput
              label="New Password"
              type="password"
              placeholder="Enter new password"
            />
            <FormInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm new password"
            />

            <PrimaryButton className="w-full mt-4" size="lg">
              Submit
            </PrimaryButton>
          </div>

          <p className="text-center mt-6 text-sm text-slate-500">
            Remember your password?{' '}
            <button onClick={() => navigate('/login')} className="text-[#4F8BF9] font-medium hover:underline">
              Back to Login →
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
