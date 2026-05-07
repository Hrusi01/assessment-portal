import { useNavigate } from 'react-router-dom';
import { Building2, User, GraduationCap } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { PrimaryButton } from '../components/ui/Button';

const signupOptions = [
  {
    icon: Building2,
    iconBg: '#4F8BF9',
    title: 'Company Registration',
    description: 'Register your company and manage employee assessments. Get access to powerful tools for your organization.',
    path: '/signup/company',
  },
  {
    icon: User,
    iconBg: '#F59E0B',
    title: 'Individual Assessment',
    description: 'Take individual assessments to evaluate and improve your skills. Track your progress over time.',
    path: '/signup/individual',
  },
  {
    icon: GraduationCap,
    iconBg: '#A78BFA',
    title: 'Student Assessment',
    description: 'Access tailored assessments for students to boost your academic and professional career.',
    path: '/signup/student',
  },
];

export default function SignupHub() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="public" showSignupNav />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Company Name</h1>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
            Join our platform to access powerful assessment tools. Choose the option that best describes you to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {signupOptions.map((option) => (
            <div key={option.path} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-5 hover:shadow-xl transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: option.iconBg + '20' }}
              >
                <option.icon size={28} style={{ color: option.iconBg }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{option.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{option.description}</p>
              </div>
              <PrimaryButton className="w-full mt-auto" onClick={() => navigate(option.path)}>
                Signup
              </PrimaryButton>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-[#4F8BF9] font-medium hover:underline">
            Go to Login →
          </button>
        </p>
      </div>
    </div>
  );
}
