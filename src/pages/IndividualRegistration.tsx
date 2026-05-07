import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';
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

export default function IndividualRegistration() {
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="public" showSignupNav />

      <div className="max-w-xl mx-auto px-6 py-12">
        <Breadcrumbs
          items={[
            { label: 'Company Name', path: '/' },
            { label: 'Signup Home', path: '/signup' },
            { label: 'Individual Registration' },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Individual Assessment Registration</h2>

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
              placeholder="your@email.com"
            />
            <PhoneInput
              label="Phone Number"
              required
              prefix="+91"
              buttonLabel="Validate OTP"
              onButtonClick={() => setShowOtp(true)}
            />
            {showOtp && (
              <FormInput
                label="Enter OTP"
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
            )}

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
