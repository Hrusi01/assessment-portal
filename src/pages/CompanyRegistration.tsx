import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
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
            <button
              onClick={() => navigate(item.path!)}
              className="hover:text-[#4F8BF9] transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-slate-800 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function CompanyRegistration() {
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
            { label: 'Company Registration' },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Company Registration</h2>

          <div className="space-y-5">
            <FormInput
              label="Company Name"
              required
              leftIcon={<Building2 size={16} />}
              placeholder="Enter company name"
            />
            <FormInput
              label="Company Location"
              leftIcon={<MapPin size={16} />}
              placeholder="City, State, Country"
            />
            <FormInput
              label="Admin Email"
              required
              type="email"
              leftIcon={<Mail size={16} />}
              placeholder="admin@company.com"
            />
            <PhoneInput
              label="Contact Number"
              required
              prefix="+91"
              buttonLabel="Generate OTP"
              onButtonClick={() => setShowOtp(true)}
            />
            {showOtp && (
              <FormInput
                label="Enter OTP"
                leftIcon={<Phone size={16} />}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
            )}

            <PrimaryButton className="w-full mt-4" size="lg">
              Register Company
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
