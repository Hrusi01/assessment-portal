import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ClipboardList } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';

interface HeaderProps {
  variant?: 'public' | 'auth' | 'dashboard';
  dashboardLabel?: string;
  showSignupNav?: boolean;
}

export function Header({ variant = 'public', dashboardLabel, showSignupNav }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  if (variant === 'dashboard') {
    return (
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#4F8BF9] rounded-lg flex items-center justify-center">
            <ClipboardList size={18} className="text-white" />
          </div>
          <span className="font-bold text-slate-800 text-base">AssessPortal</span>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900">
          {dashboardLabel || 'Hi Admin'}
          <ChevronDown size={16} />
        </button>
      </header>
    );
  }

  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 md:px-12 sticky top-0 z-40">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-9 h-9 bg-[#4F8BF9] rounded-lg flex items-center justify-center">
          <ClipboardList size={18} className="text-white" />
        </div>
        <span className="font-bold text-slate-800 text-base">Company Name</span>
      </div>

      {!showSignupNav && (
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Assessments', 'Resources', 'About Us'].map((item) => (
            <button
              key={item}
              className="text-sm text-slate-600 hover:text-[#4F8BF9] transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      )}

      {showSignupNav ? (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/signup')}
            className={`text-sm font-medium transition-colors ${location.pathname === '/signup' ? 'text-[#4F8BF9] border-b-2 border-[#4F8BF9] pb-0.5' : 'text-slate-600 hover:text-[#4F8BF9]'}`}
          >
            Signup Home
          </button>
          <button
            onClick={() => navigate('/login')}
            className="text-sm font-medium text-slate-600 hover:text-[#4F8BF9] transition-colors"
          >
            Go to Login
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="text-sm font-medium text-slate-600 hover:text-[#4F8BF9] transition-colors"
          >
            Login
          </button>
          <PrimaryButton size="sm" onClick={() => navigate('/signup')}>
            Sign Up
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}
