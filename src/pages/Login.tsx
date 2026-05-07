import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Shield } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { FormInput } from '../components/ui/FormInput';
import { PrimaryButton } from '../components/ui/Button';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE] flex flex-col">
      <Header variant="public" showSignupNav />

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#4F8BF9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield size={28} className="text-[#4F8BF9]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Login</h2>
            <p className="text-sm text-slate-500 mt-1">Welcome back! Sign in to your account.</p>
          </div>

          <div className="space-y-5">
            <FormInput
              label="Email / Phone"
              type="email"
              leftIcon={<Mail size={16} />}
              placeholder="Email or phone number"
            />
            <FormInput
              label="Password"
              type="password"
              leftIcon={<Lock size={16} />}
              placeholder="Enter your password"
            />
            <FormInput
              label="OTP"
              leftIcon={<Shield size={16} />}
              placeholder="Enter OTP (if required)"
            />

            <PrimaryButton className="w-full" size="lg" onClick={handleLogin}>
              Login
            </PrimaryButton>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/forgot-password')}
              className="text-sm text-[#4F8BF9] hover:text-[#3B6FD1] font-medium"
            >
              Forgot Password? →
            </button>
          </div>

          <p className="text-center mt-4 text-sm text-slate-500">
            Don't have an account?{' '}
            <button onClick={() => navigate('/signup')} className="text-[#4F8BF9] font-medium hover:underline">
              Sign Up
            </button>
          </p>

          {/* Quick navigation for demo */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center mb-3">Quick Demo Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Admin Dashboard', path: '/admin/dashboard' },
                { label: 'Recruiter', path: '/recruiter/dashboard' },
                { label: 'Senior Recruiter', path: '/senior/dashboard' },
                { label: 'Assessment', path: '/assessment/1' },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="text-xs text-slate-500 hover:text-[#4F8BF9] border border-slate-200 rounded-md py-1.5 px-2 hover:border-[#4F8BF9] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
