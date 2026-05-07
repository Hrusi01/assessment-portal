import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { RecruiterSidebar } from '../components/layout/Sidebar';
import { FormInput, FormTextarea } from '../components/ui/FormInput';
import { PrimaryButton, OutlineButton } from '../components/ui/Button';

const skillsList = ['Java', 'Spring Boot', 'SQL', 'Javascript', 'React', 'Node.js'];
const languagesList = ['English', 'Hindi', 'Marathi', 'Tamil', 'Telugu'];

export default function CandidateInfo() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(['Java', 'Spring Boot', 'SQL', 'Javascript']);
  const [languages, setLanguages] = useState(['English', 'Hindi', 'Marathi']);

  const toggleSkill = (skill: string) => {
    setSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };
  const removeSkill = (skill: string) => setSkills(prev => prev.filter(s => s !== skill));
  const toggleLanguage = (lang: string) => {
    setLanguages(prev => prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="dashboard" dashboardLabel="Recruiter ▾" />
      <RecruiterSidebar activePage="dashboard" />

      <main className="ml-60 pt-6 px-8 pb-12">
        {/* Modal-style card */}
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl mx-auto overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-800">Candidate Information Form</h2>
              <p className="text-sm text-slate-500 mt-0.5">Position: Software Engineer | JD: Backend Development</p>
            </div>
            <button
              onClick={() => navigate('/recruiter/dashboard')}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-8 space-y-8">
            {/* Candidate Details */}
            <section>
              <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b-2 border-[#4F8BF9]">
                Candidate Details
              </h3>
              <div className="grid grid-cols-2 gap-5">
                <FormInput label="Full Name" required placeholder="Enter full name" />
                <FormInput label="Mobile Number" required placeholder="Enter mobile number" />
                <FormInput label="Email" required type="email" placeholder="Enter email address" />
                <FormInput label="Date of Birth" type="date" />
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-slate-700 block mb-3">Languages Known</label>
                <div className="flex flex-wrap gap-3">
                  {languagesList.map((lang) => (
                    <label key={lang} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={languages.includes(lang)}
                        onChange={() => toggleLanguage(lang)}
                        className="w-4 h-4 accent-[#4F8BF9]"
                      />
                      <span className="text-sm text-slate-700">{lang}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Educational Qualifications */}
            <section>
              <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b-2 border-[#4F8BF9]">
                Educational Qualifications
              </h3>
              <div className="grid grid-cols-2 gap-5">
                <FormInput label="10th SSC School" placeholder="School name" />
                <FormInput label="12th HSC College" placeholder="College name" />
                <FormInput label="Graduation Degree" placeholder="e.g. B.Tech Computer Science" />
                <FormInput label="Post-Graduation" placeholder="e.g. M.Tech, MBA (if applicable)" />
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b-2 border-[#4F8BF9]">
                Work Experience
              </h3>
              <div className="grid grid-cols-3 gap-5">
                <FormInput label="Total Experience" placeholder="e.g. 3 years" />
                <FormInput label="Last Company" placeholder="Company name" />
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-700">Last Job Title</label>
                  <select className="h-12 rounded-md border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-[#4F8BF9] bg-white appearance-none">
                    <option value="">Select Title</option>
                    <option>Junior Developer</option>
                    <option>Senior Developer</option>
                    <option>Tech Lead</option>
                    <option>Manager</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b-2 border-[#4F8BF9]">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="hover:opacity-70">
                      <X size={10} />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsList.filter(s => !skills.includes(s)).map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-dashed border-slate-300 text-slate-500 hover:border-[#4F8BF9] hover:text-[#4F8BF9] transition-colors"
                  >
                    + {skill}
                  </button>
                ))}
              </div>
            </section>

            {/* Additional Notes */}
            <section>
              <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b-2 border-[#4F8BF9]">
                Additional Notes
              </h3>
              <FormTextarea
                placeholder="Any additional notes about the candidate..."
                rows={4}
              />
            </section>

            {/* Footer */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <OutlineButton onClick={() => navigate('/recruiter/dashboard')}>Save</OutlineButton>
              <PrimaryButton>Save & Add Next</PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
