import { useNavigate } from 'react-router-dom';
import { Plus, FileText, Users } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { RecruiterSidebar } from '../components/layout/Sidebar';
import { MetricCard } from '../components/ui/MetricCard';
import { PrimaryButton } from '../components/ui/Button';

const pendingStats = [
  { label: 'Pending Test', count: 35, color: '#F59E0B' },
  { label: 'Test For Approval', count: 40, color: '#A78BFA' },
  { label: 'Recruitment Done', count: 80, color: '#10B981' },
];

export default function RecruiterDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="dashboard" dashboardLabel="Recruiter ▾" />
      <RecruiterSidebar activePage="dashboard" />

      <main className="ml-60 pt-6 px-8 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
          <div className="flex gap-3">
            <PrimaryButton size="sm" onClick={() => navigate('/recruiter/jd/new')}>
              <Plus size={14} /> Create JD
            </PrimaryButton>
            <PrimaryButton size="sm" onClick={() => navigate('/recruiter/candidates/new')}>
              <Users size={14} /> Add Candidate
            </PrimaryButton>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          <MetricCard value="40" label="JD (Job Descriptions)" bgColor="#4F8BF9" />
          <MetricCard value="67" label="CV (Resumes)" bgColor="#F59E0B" />
          <MetricCard value="35" label="Assessment Tests" bgColor="#A78BFA" />
        </div>

        {/* Pending Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-base font-bold text-slate-800 mb-5">Pending Stats</h3>
            <div className="space-y-4">
              {pendingStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stat.color }}></span>
                    <span className="text-sm text-slate-600">{stat.label}</span>
                  </div>
                  <span className="text-base font-bold text-slate-800">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-base font-bold text-slate-800 mb-5">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'New JD', icon: FileText, color: '#4F8BF9', path: '/recruiter/jd/new' },
                { label: 'Add Candidate', icon: Users, color: '#F59E0B', path: '/recruiter/candidates/new' },
                { label: 'Map CV to JD', icon: FileText, color: '#A78BFA', path: '/recruiter/map-cv' },
                { label: 'View Reports', icon: FileText, color: '#10B981', path: '/reports/final/1' },
              ].map((action) => (
                <button
                  key={action.label}
                  onClick={() => navigate(action.path)}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: action.color + '20' }}
                  >
                    <action.icon size={18} style={{ color: action.color }} />
                  </div>
                  <span className="text-xs font-medium text-slate-600">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent JDs */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-bold text-slate-800">Recent Job Descriptions</h3>
            <button onClick={() => navigate('/recruiter/jd/new')} className="text-sm text-[#4F8BF9] font-medium hover:underline">
              View All →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">Position</th>
                  <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">Department</th>
                  <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">CVs</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: 'Software Engineer', dept: 'Engineering', status: 'Active', cvs: 12 },
                  { pos: 'Backend Developer', dept: 'Tech', status: 'Pending', cvs: 8 },
                  { pos: 'Full Stack Dev', dept: 'Engineering', status: 'Active', cvs: 15 },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{row.dept}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        row.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">{row.cvs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
