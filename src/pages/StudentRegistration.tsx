import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, GraduationCap, ChevronRight } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { FormInput, PhoneInput } from '../components/ui/FormInput';
import { PrimaryButton } from '../components/ui/Button';

function Breadcrumbs({ items }: { items: { label: string; path?: string }[] }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-1 text-sm text-slate-500 mb-6">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1">
          {idx > 0 && <ChevronRight size={14} />}
          {item.path ? (
            <button onClick={() => navigate(item.path!)} className="hover:text-[#4F8BF9] transition-colors">{item.label}</button>
          ) : (
            <span className="text-slate-800 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function StudentRegistration() {
  const navigate = useNavigate();
  const [otpValidated, setOtpValidated] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="public" showSignupNav />

      <div className="max-w-xl mx-auto px-6 py-12">
        <Breadcrumbs
          items={[
            { label: 'Company Name', path: '/' },
            { label: 'Signup Home', path: '/signup' },
            { label: 'Student Registration' },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Student Assessment Registration</h2>
          <p className="text-sm text-slate-500 text-center mb-8">Create your student account to access tailored assessments</p>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <FormInput label="First Name" required placeholder="First Name" />
              <FormInput label="Last Name" required placeholder="Last Name" />
            </div>
            <FormInput
              label="Email"
              required
              type="email"
              leftIcon={<Mail size={16} />}
              placeholder="student@email.com"
            />
            <PhoneInput
              label="Phone Number"
              required
              prefix="+1"
              buttonLabel="Generate OTP"
              onButtonClick={() => setOtpValidated(true)}
              showSuccess={otpValidated}
            />
            <FormInput
              label="School Name"
              required
              leftIcon={<GraduationCap size={16} />}
              placeholder="Your school or university"
            />
            <FormInput
              label="Set Password"
              required
              type="password"
              placeholder="Create a password"
            />
            <FormInput
              label="Confirm Password"
              required
              type="password"
              placeholder="Confirm your password"
            />

            <PrimaryButton className="w-full mt-4" size="lg">
              Register
            </PrimaryButton>
          </div>

          <p className="text-center mt-6 text-sm text-slate-500">
            Already registered?{' '}
            <button onClick={() => navigate('/login')} className="text-[#4F8BF9] font-medium hover:underline">
              Go to Login →
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
