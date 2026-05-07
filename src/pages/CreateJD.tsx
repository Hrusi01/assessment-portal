import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, ChevronRight, Minus } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { RecruiterSidebar } from '../components/layout/Sidebar';
import { FormInput, FormTextarea, FormSelect } from '../components/ui/FormInput';
import { PrimaryButton, OutlineButton } from '../components/ui/Button';

export default function CreateJD() {
  const navigate = useNavigate();
  const [responsibilities, setResponsibilities] = useState(['', '']);
  const [technologies, setTechnologies] = useState(['']);
  const [mandatorySkills, setMandatorySkills] = useState(['Java', 'Spring Boot']);
  const [secondarySkills, setSecondarySkills] = useState(['REST APIs']);
  const [newSkill, setNewSkill] = useState('');
  const [newSecSkill, setNewSecSkill] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#E0F2FE]">
      <Header variant="dashboard" dashboardLabel="Recruiter ▾" />
      <RecruiterSidebar activePage="dashboard" />

      <main className="ml-60 pt-6 px-8 pb-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <button onClick={() => navigate('/recruiter/dashboard')} className="hover:text-[#4F8BF9]">JD Upload</button>
            <ChevronRight size={14} />
            <span className="text-slate-800 font-medium">Create New JD</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/recruiter/dashboard')}
              className="px-3 py-1.5 text-xs text-slate-600 border border-slate-200 rounded-md hover:bg-slate-50"
            >
              Uploaded Documents
            </button>
            <button
              onClick={() => navigate('/recruiter/dashboard')}
              className="px-3 py-1.5 text-xs text-slate-600 border border-slate-200 rounded-md hover:bg-slate-50"
            >
              Dashboard
            </button>
            <button className="w-7 h-7 flex items-center justify-center border border-slate-200 rounded-md hover:bg-slate-50 text-slate-500">
              <Plus size={14} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center border border-slate-200 rounded-md hover:bg-slate-50 text-slate-500">
              <Minus size={14} />
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-md bg-white text-sm text-slate-600">
              <FileText size={14} />
              Word Document ▾
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-8">Create New Job Description</h2>

          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-5">
              <FormInput label="Position Title" placeholder="e.g. Software Engineer" />
              <FormSelect label="Department">
                <option value="">Select Department</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Operations</option>
              </FormSelect>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-5">
              <FormSelect label="Work Type">
                <option value="">Select Work Type</option>
                <option>On-site</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </FormSelect>
              <FormSelect label="City">
                <option value="">Select City</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Delhi</option>
                <option>Pune</option>
              </FormSelect>
            </div>

            {/* Employment Type */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-3">Employment Type</label>
              <div className="flex gap-6">
                {['Full Time', 'Contract', 'Intern'].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded accent-[#4F8BF9]" defaultChecked={type === 'Full Time'} />
                    <span className="text-sm text-slate-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-5">
              <FormSelect label="Qualification">
                <option value="">Select Qualification</option>
                <option>B.Tech / B.E.</option>
                <option>MCA</option>
                <option>MBA</option>
                <option>BSc</option>
                <option>MSc</option>
              </FormSelect>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">Experience</label>
                <div className="grid grid-cols-2 gap-2">
                  <FormSelect>
                    <option>Min: 0 yrs</option>
                    <option>Min: 1 yr</option>
                    <option>Min: 2 yrs</option>
                    <option>Min: 3 yrs</option>
                    <option>Min: 5 yrs</option>
                  </FormSelect>
                  <FormSelect>
                    <option>Max: 3 yrs</option>
                    <option>Max: 5 yrs</option>
                    <option>Max: 7 yrs</option>
                    <option>Max: 10 yrs</option>
                  </FormSelect>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-2 gap-5">
              <FormTextarea
                label="Role Summary"
                placeholder="Describe the role and its key responsibilities..."
                rows={4}
              />
              <FormSelect label="Team Size">
                <option value="">Select Team Size</option>
                <option>1-5</option>
                <option>5-10</option>
                <option>10-20</option>
                <option>20-50</option>
                <option>50+</option>
              </FormSelect>
            </div>

            {/* Key Responsibilities */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-3">Key Responsibilities</label>
              <div className="space-y-2">
                {responsibilities.map((_, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 w-5 flex-shrink-0">{idx + 1}.</span>
                    <input
                      type="text"
                      placeholder={`Responsibility ${idx + 1}`}
                      className="flex-1 h-10 rounded-md border border-slate-200 px-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#4F8BF9] focus:ring-2 focus:ring-[#4F8BF9]/20 transition-all"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setResponsibilities([...responsibilities, ''])}
                className="mt-2 flex items-center gap-1.5 text-sm text-[#4F8BF9] hover:text-[#3B6FD1] font-medium"
              >
                <Plus size={14} /> Add
              </button>
            </div>

            {/* Technologies */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-3">Technologies</label>
              <div className="space-y-2">
                {technologies.map((_, idx) => (
                  <input
                    key={idx}
                    type="text"
                    placeholder={`Technology ${idx + 1}`}
                    className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#4F8BF9] focus:ring-2 focus:ring-[#4F8BF9]/20 transition-all"
                  />
                ))}
              </div>
              <button
                onClick={() => setTechnologies([...technologies, ''])}
                className="mt-2 flex items-center gap-1.5 text-sm text-[#4F8BF9] hover:text-[#3B6FD1] font-medium"
              >
                <Plus size={14} /> Add
              </button>
            </div>

            {/* Mandatory & Secondary Skills */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-3">Mandatory Skills</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {mandatorySkills.map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {skill}
                      <button onClick={() => setMandatorySkills(mandatorySkills.filter(s => s !== skill))}>
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={e => setNewSkill(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && newSkill) { setMandatorySkills([...mandatorySkills, newSkill]); setNewSkill(''); } }}
                    placeholder="Add skill..."
                    className="flex-1 h-10 rounded-md border border-slate-200 px-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#4F8BF9]"
                  />
                  <button
                    onClick={() => { if (newSkill) { setMandatorySkills([...mandatorySkills, newSkill]); setNewSkill(''); } }}
                    className="w-10 h-10 flex items-center justify-center bg-[#4F8BF9] text-white rounded-md hover:bg-[#3B6FD1]"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-3">Secondary Skills</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {secondarySkills.map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                      {skill}
                      <button onClick={() => setSecondarySkills(secondarySkills.filter(s => s !== skill))}>
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newSecSkill}
                    onChange={e => setNewSecSkill(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && newSecSkill) { setSecondarySkills([...secondarySkills, newSecSkill]); setNewSecSkill(''); } }}
                    placeholder="Add skill..."
                    className="flex-1 h-10 rounded-md border border-slate-200 px-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#4F8BF9]"
                  />
                  <button
                    onClick={() => { if (newSecSkill) { setSecondarySkills([...secondarySkills, newSecSkill]); setNewSecSkill(''); } }}
                    className="w-10 h-10 flex items-center justify-center bg-[#4F8BF9] text-white rounded-md hover:bg-[#3B6FD1]"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Domain Knowledge & Certification */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-3">Domain Knowledge</label>
                <div className="flex flex-col gap-2">
                  {['Teamwork', 'Leadership', 'Project Management', 'Agile/Scrum'].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#4F8BF9]" defaultChecked={item === 'Teamwork' || item === 'Leadership'} />
                      <span className="text-sm text-slate-600">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-3">Certification</label>
                <div className="flex flex-col gap-2">
                  {['Adaptability', 'Analytical Thinking', 'Problem Solving', 'Communication'].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#4F8BF9]" defaultChecked={item === 'Adaptability' || item === 'Analytical Thinking'} />
                      <span className="text-sm text-slate-600">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <OutlineButton onClick={() => navigate('/recruiter/dashboard')}>Cancel</OutlineButton>
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
