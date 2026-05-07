import { Header } from '../components/layout/Header';
import { AdminSidebar } from '../components/layout/Sidebar';
import { MetricCard } from '../components/ui/MetricCard';

const pendingStats = [
  { color: '#4F8BF9', label: 'Total Assessment Tests', count: 150 },
  { color: '#F59E0B', label: 'Pending Tests', count: 35 },
  { color: '#A78BFA', label: 'For Approval', count: 40 },
  { color: '#10B981', label: 'Test Completed', count: 80 },
  { color: '#6366F1', label: 'Active Recruiters', count: 12 },
  { color: '#EC4899', label: 'New Registrations', count: 24 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="dashboard" dashboardLabel="Hi Admin" />
      <AdminSidebar activePage="dashboard" />

      <main className="ml-60 pt-6 px-8 pb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h2>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          <MetricCard value="150" label="Assessment Tests" bgColor="#4F8BF9" />
          <MetricCard value="35" label="Pending" bgColor="#F59E0B" />
          <MetricCard value="40" label="For Approval" bgColor="#A78BFA" />
          <MetricCard value="80" label="Test Completed" bgColor="#6366F1" />
        </div>

        {/* Pending Stats Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 max-w-lg">
          <h3 className="text-base font-bold text-slate-800 mb-5">Pending Stats</h3>
          <div className="space-y-4">
            {pendingStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: stat.color }}></span>
                  <span className="text-sm text-slate-600">{stat.label}</span>
                </div>
                <span className="text-sm font-bold text-slate-800">{stat.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-800 mb-5">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'New company registered: Infosys Solutions', time: '2 hours ago', color: '#4F8BF9' },
              { action: 'Assessment test completed by 5 candidates', time: '4 hours ago', color: '#10B981' },
              { action: 'New JD posted for Backend Developer role', time: '6 hours ago', color: '#F59E0B' },
              { action: '3 candidates approved for final round', time: '1 day ago', color: '#A78BFA' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 py-2 border-b border-slate-50 last:border-0">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700">{item.action}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
