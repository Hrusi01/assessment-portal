import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, FileText, Plus, ChevronRight } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { RecruiterSidebar } from '../components/layout/Sidebar';
import { PrimaryButton, OutlineButton } from '../components/ui/Button';
import { candidates } from '../lib/mock-data';

export default function MapCV() {
  const navigate = useNavigate();
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCandidate = (id: number) => {
    setSelectedCandidates(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedCandidates.length === candidates.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(candidates.map(c => c.id));
    }
  };

  const metricColor = (m: number) => m >= 90 ? 'bg-green-100 text-green-700' : m >= 80 ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="dashboard" dashboardLabel="Recruiter ▾" />
      <RecruiterSidebar activePage="dashboard" />

      <main className="ml-60 pt-6 px-8 pb-12">
        <div className="bg-white rounded-2xl shadow-lg max-w-5xl mx-auto overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800">Map JD with CVs</h2>
            <button
              onClick={() => navigate('/recruiter/dashboard')}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-8">
            {/* JD Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium text-slate-700 mb-3">Select a Job Description (JD)…</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:border-[#4F8BF9] cursor-pointer transition-colors flex-1 mr-4">
                  <div className="w-10 h-10 bg-[#4F8BF9]/10 rounded-lg flex items-center justify-center">
                    <FileText size={18} className="text-[#4F8BF9]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">Software Engineer</p>
                    <p className="text-xs text-slate-500">JD: Backend Development</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </div>
                <PrimaryButton size="sm">
                  <Plus size={14} /> Create New Position
                </PrimaryButton>
              </div>
            </div>

            {/* Candidates Table */}
            <div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Candidates</h3>
              <p className="text-sm text-slate-500 mb-4">Select candidates to map with this Job Description</p>

              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 w-10">
                        <input
                          type="checkbox"
                          checked={selectedCandidates.length === candidates.length}
                          onChange={toggleAll}
                          className="w-4 h-4 accent-[#4F8BF9]"
                        />
                      </th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">Candidate Name</th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">Metrics</th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase">Years of Exp.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((candidate) => (
                      <tr
                        key={candidate.id}
                        className={`border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer ${
                          selectedCandidates.includes(candidate.id) ? 'bg-[#4F8BF9]/5' : ''
                        }`}
                        onClick={() => toggleCandidate(candidate.id)}
                      >
                        <td className="px-4 py-3.5">
                          <input
                            type="checkbox"
                            checked={selectedCandidates.includes(candidate.id)}
                            onChange={() => toggleCandidate(candidate.id)}
                            className="w-4 h-4 accent-[#4F8BF9]"
                            onClick={e => e.stopPropagation()}
                          />
                        </td>
                        <td className="px-4 py-3.5">
                          <p className="text-sm font-semibold text-slate-800">{candidate.name}</p>
                          <p className="text-xs text-slate-500">{candidate.email}</p>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${metricColor(candidate.metric)}`}>
                            {candidate.metric}%
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-sm text-slate-600">{candidate.experience} yrs</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 bg-slate-50">
                  <span className="text-xs text-slate-500">Showing 5 of 25 candidates</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-[#4F8BF9] text-white'
                            : 'text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button className="w-7 h-7 rounded text-xs text-slate-600 hover:bg-slate-200">›</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
              <OutlineButton onClick={() => navigate('/recruiter/dashboard')}>Cancel</OutlineButton>
              <PrimaryButton disabled={selectedCandidates.length === 0}>
                Map CVs {selectedCandidates.length > 0 && `(${selectedCandidates.length})`}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
