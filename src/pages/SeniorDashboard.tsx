import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Check } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { SeniorSidebar } from '../components/layout/Sidebar';
import { MetricCard } from '../components/ui/MetricCard';
import { Avatar } from '../components/ui/Avatar';
import { Modal } from '../components/ui/Modal';
import { PrimaryButton, OutlineButton, DangerButton } from '../components/ui/Button';
import { pendingPositions, pendingCandidates, comments } from '../lib/mock-data';

function ApprovePositionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'details' | 'jd'>('details');
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState(comments);

  const sendComment = () => {
    if (!commentText.trim()) return;
    setCommentsList([
      { id: Date.now(), initials: 'YOU', name: 'You', bgColor: '#10B981', timestamp: 'Just now', text: commentText },
      ...commentsList,
    ]);
    setCommentText('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <div className="-mt-6 -mx-6">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 mb-6 px-6">
          {(['details', 'jd'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab ? 'border-[#4F8BF9] text-[#4F8BF9]' : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab === 'details' ? 'Position Details' : 'JD Content'}
            </button>
          ))}
        </div>

        <div className="px-6 pb-6">
          {activeTab === 'details' ? (
            <div className="space-y-3">
              {[
                ['Position ID', 'POS-001'],
                ['Position Title', 'Software Engineer'],
                ['Department', 'Engineering'],
                ['Work Type', 'Hybrid'],
                ['Experience', '3–7 years'],
                ['Qualification', 'B.Tech / B.E.'],
                ['Team Size', '10–20'],
                ['Submitted By', 'John Smith'],
                ['Submission Date', '2024-01-15'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4 py-2 border-b border-slate-50">
                  <span className="text-sm text-slate-500 w-40 flex-shrink-0">{label}</span>
                  <span className="text-sm font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Role Summary</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are looking for a skilled Software Engineer to join our engineering team. You will be responsible for developing and maintaining backend services using Python and Django.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Key Responsibilities</h4>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {['Design and develop RESTful APIs', 'Collaborate with frontend team on integration', 'Optimize database queries for performance', 'Write unit and integration tests'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8BF9] mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'REST APIs', 'SQL', 'Redis', 'Docker'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-[#4F8BF9]/10 text-[#4F8BF9] text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Comments */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h4 className="text-sm font-bold text-slate-800 mb-4">Reviewer Comments (History)</h4>
            <div className="flex gap-3 mb-4">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value.slice(0, 500))}
                placeholder="Add a comment..."
                rows={2}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#4F8BF9] resize-none"
              />
              <div className="flex flex-col justify-between">
                <span className="text-xs text-slate-400 text-right">{commentText.length}/500</span>
                <PrimaryButton size="sm" onClick={sendComment}>Send</PrimaryButton>
              </div>
            </div>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {commentsList.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar initials={comment.initials} bgColor={comment.bgColor} size="sm" />
                  <div className="flex-1 bg-slate-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-800">{comment.name}</span>
                      <span className="text-xs text-slate-400">{comment.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-600">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <PrimaryButton className="w-full" size="lg">
              <Check size={16} /> Final Approval
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function SeniorDashboard() {
  const navigate = useNavigate();
  const [activeReportTab, setActiveReportTab] = useState<'interim' | 'final'>('interim');
  const [approveModal, setApproveModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="dashboard" dashboardLabel="Senior Recruiter / TL – Ops Head | Hi Admin ▾" />
      <SeniorSidebar activePage="dashboard" />

      <main className="ml-60 pt-6 px-8 pb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h2>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          <MetricCard value="8" label="Total Position Approvals" bgColor="#4F8BF9" />
          <MetricCard value="5" label="Total Candidate Approvals" bgColor="#F59E0B" />
          <MetricCard value="3" label="Interim Reports Pending" bgColor="#A78BFA" />
          <MetricCard value="2" label="Final Reports Pending" bgColor="#6366F1" />
        </div>

        {/* Pending Position Approvals */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800">Pending Position Approvals</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-3 h-8 rounded-md border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#4F8BF9]"
                />
              </div>
              <button className="text-sm text-[#4F8BF9] font-medium hover:underline">View All →</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  {['Position ID', 'Position', 'Submission Date', 'Recruiter', 'Actions'].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pendingPositions.map((pos) => (
                  <tr key={pos.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 text-sm font-medium text-[#4F8BF9]">{pos.id}</td>
                    <td className="px-4 py-3.5 text-sm text-slate-800">{pos.position}</td>
                    <td className="px-4 py-3.5 text-sm text-slate-600">{pos.submissionDate}</td>
                    <td className="px-4 py-3.5 text-sm text-slate-600">{pos.recruiter}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex gap-2">
                        <PrimaryButton size="sm" onClick={() => setApproveModal(true)}>Approve</PrimaryButton>
                        <OutlineButton size="sm">Send Back</OutlineButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Candidate Approvals */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800">Pending Candidate Approvals</h3>
            <button className="text-sm text-[#4F8BF9] font-medium hover:underline">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  {['Candidate Name', 'Position', 'Submission Date', 'Recruiter', 'Actions'].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pendingCandidates.map((cand, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 text-sm font-medium text-slate-800">{cand.name}</td>
                    <td className="px-4 py-3.5 text-sm text-slate-600">{cand.position}</td>
                    <td className="px-4 py-3.5 text-sm text-slate-600">{cand.submissionDate}</td>
                    <td className="px-4 py-3.5 text-sm text-slate-600">{cand.recruiter}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex gap-2">
                        <PrimaryButton size="sm" onClick={() => navigate('/reports/final/1')}>Approve</PrimaryButton>
                        <OutlineButton size="sm">Send Back</OutlineButton>
                        <button className="text-sm text-[#4F8BF9] font-medium hover:underline px-2">View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assessment Reports */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800">Assessment Reports</h3>
          </div>
          <div className="flex gap-0 border-b border-slate-200 mb-4">
            <button
              onClick={() => setActiveReportTab('interim')}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeReportTab === 'interim' ? 'border-[#4F8BF9] text-[#4F8BF9]' : 'border-transparent text-slate-500'
              }`}
            >
              Interim Reports (2)
            </button>
            <button
              onClick={() => setActiveReportTab('final')}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeReportTab === 'final' ? 'border-[#4F8BF9] text-[#4F8BF9]' : 'border-transparent text-slate-500'
              }`}
            >
              Final Reports (2)
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  {['Report ID', 'Candidate', 'Position', 'Score', 'Actions'].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'RPT-001', candidate: 'Arjun Sharma', position: 'Software Engineer', score: 87 },
                  { id: 'RPT-002', candidate: 'Priya Mehta', position: 'Backend Developer', score: 92 },
                ].map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 text-sm font-medium text-[#4F8BF9]">{row.id}</td>
                    <td className="px-4 py-3.5 text-sm font-medium text-slate-800">{row.candidate}</td>
                    <td className="px-4 py-3.5 text-sm text-slate-600">{row.position}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {row.score}/100
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex gap-2">
                        <PrimaryButton size="sm" onClick={() => navigate('/reports/final/1')}>Approve</PrimaryButton>
                        <OutlineButton size="sm">Send Back</OutlineButton>
                        <button className="text-sm text-[#4F8BF9] font-medium hover:underline px-2">View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <ApprovePositionModal isOpen={approveModal} onClose={() => setApproveModal(false)} />
    </div>
  );
}
