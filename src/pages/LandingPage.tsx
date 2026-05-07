import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, Building2, User, GraduationCap, Heart, MessageCircle,
  ChevronDown, BarChart3, TrendingUp, Briefcase
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { PrimaryButton, SecondaryButton } from '../components/ui/Button';
import { FeatureCard } from '../components/ui/MetricCard';
import { Avatar } from '../components/ui/Avatar';
import { feedPosts, companies } from '../lib/mock-data';

const tabs = ['Home', 'Assessments', 'Individual Assessments', 'Student Assessments'];

export default function LandingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-white">
      <Header variant="public" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Assessment Portal
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Effortlessly manage assessments for companies, individuals and students with our efficient assessment platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton size="lg" onClick={() => navigate('/signup')}>
                Get Started
              </PrimaryButton>
              <SecondaryButton size="lg">
                Learn More
              </SecondaryButton>
            </div>
          </div>
          {/* Hero Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#4F8BF9]/20 flex items-center justify-center">
                    <User size={24} className="text-[#4F8BF9]" />
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-slate-200 rounded mb-1.5"></div>
                    <div className="h-2 w-16 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="h-2 w-4/5 bg-slate-100 rounded"></div>
                  <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[['#4F8BF9', '85%', 'Score'], ['#10B981', '42', 'Tests'], ['#F59E0B', '12', 'Pending']].map(([color, val, lbl]) => (
                    <div key={lbl} className="rounded-xl p-2 text-center" style={{ backgroundColor: color + '20' }}>
                      <div className="text-base font-bold" style={{ color }}>{val}</div>
                      <div className="text-xs text-slate-500">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 z-20">
                <BarChart3 size={16} className="text-[#4F8BF9]" />
                <span className="text-xs font-medium text-slate-700">Live Analytics</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 z-20">
                <TrendingUp size={16} className="text-[#10B981]" />
                <span className="text-xs font-medium text-slate-700">98% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto -mt-6 px-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center gap-3">
          <Search size={18} className="text-slate-400 ml-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search assessments, companies, positions..."
            className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 outline-none"
          />
          <PrimaryButton size="md">Post</PrimaryButton>
        </div>
      </div>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">Assessment Portal</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Building2 size={28} className="text-[#4F8BF9]" />}
            iconBg="#4F8BF9/20"
            title="Company Assessment"
            description="Register your company and manage employee assessments effectively with our powerful tools."
            linkText="Get Started"
            onLink={() => navigate('/signup/company')}
          />
          <FeatureCard
            icon={<User size={28} className="text-[#F59E0B]" />}
            iconBg="#F59E0B/20"
            title="Individual Assessment"
            description="Take individual assessments to evaluate and improve your skills at your own pace."
            linkText="Get Started"
            onLink={() => navigate('/signup/individual')}
          />
          <FeatureCard
            icon={<GraduationCap size={28} className="text-[#A78BFA]" />}
            iconBg="#A78BFA/20"
            title="Student Assessment"
            description="Access and participate in assessments tailored for students to boost your career."
            linkText="Join Community"
            onLink={() => navigate('/signup/student')}
          />
        </div>
      </section>

      {/* Tab Bar */}
      <div className="border-b border-slate-200 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-[#4F8BF9] text-[#4F8BF9]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 flex items-center gap-1 whitespace-nowrap">
            Browse More <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Left/Main Feed */}
        <div className="md:col-span-2 space-y-8">
          {/* Featured Companies */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-slate-800">Featured Companies</h3>
              <button className="text-sm text-[#4F8BF9] hover:text-[#3B6FD1] font-medium">View All →</button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {companies.map((company) => (
                <div key={company.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-14 h-14 bg-slate-100 group-hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors">
                    <span className="text-sm font-bold text-slate-500">{company.logo}</span>
                  </div>
                  <span className="text-xs text-slate-500 text-center">{company.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Feed */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-5">Recent Feed</h3>
            <div className="space-y-4">
              {feedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar initials={post.initials} bgColor={post.bgColor} size="md" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{post.name}</p>
                        <p className="text-xs text-slate-500">{post.title}</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 rounded-full border border-[#4F8BF9] text-xs text-[#4F8BF9] hover:bg-[#4F8BF9]/10 transition-colors font-medium">
                      Follow
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.text}</p>
                  <div className="flex items-center gap-5 pt-3 border-t border-slate-100">
                    <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-400 transition-colors text-xs">
                      <Heart size={14} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-slate-400 hover:text-[#4F8BF9] transition-colors text-xs">
                      <MessageCircle size={14} />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="text-base font-bold text-slate-800 mb-5">Platform Stats</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4F8BF9]/10 rounded-xl flex items-center justify-center">
                  <Building2 size={22} className="text-[#4F8BF9]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-800">10K+</p>
                  <p className="text-xs text-slate-500">Companies Registered</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                  <Briefcase size={22} className="text-[#10B981]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-800">15K+</p>
                  <p className="text-xs text-slate-500">Open Positions</p>
                </div>
              </div>
            </div>
            <PrimaryButton className="w-full mt-6" onClick={() => navigate('/signup')}>
              Find Jobs
            </PrimaryButton>
          </div>

          <div className="bg-gradient-to-br from-[#4F8BF9] to-[#A78BFA] rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-2">Start Your Journey</h3>
            <p className="text-xs opacity-90 mb-4 leading-relaxed">Join thousands of professionals advancing their careers through assessments.</p>
            <button
              onClick={() => navigate('/signup')}
              className="w-full bg-white text-[#4F8BF9] rounded-lg py-2 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#EDE9FE] to-[#E0F2FE] border-t border-slate-200 py-6 px-6 text-center">
        <p className="text-sm text-slate-500">
          © 2024 Company Name. All rights reserved |{' '}
          <a href="#" className="hover:text-[#4F8BF9]">Privacy Policy</a> |{' '}
          <a href="#" className="hover:text-[#4F8BF9]">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
