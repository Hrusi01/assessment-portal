import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, ClipboardList, BarChart3, Settings,
  CheckSquare, UserCheck, FileText
} from 'lucide-react';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  path?: string;
  active?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
}

import React from 'react';

export function Sidebar({ items }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="w-60 min-h-screen bg-white border-r border-slate-200 flex flex-col py-6 fixed left-0 top-16 bottom-0 z-30 overflow-y-auto">
      <nav className="flex flex-col gap-1 px-3">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => item.path && navigate(item.path)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left w-full ${
              item.active
                ? 'bg-[#4F8BF9]/10 text-[#4F8BF9]'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
            }`}
          >
            <span className={item.active ? 'text-[#4F8BF9]' : 'text-slate-400'}>
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export function AdminSidebar({ activePage = 'dashboard' }: { activePage?: string }) {
  const items = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/admin/dashboard', active: activePage === 'dashboard' },
    { icon: <Users size={18} />, label: 'Users', active: activePage === 'users' },
    { icon: <ClipboardList size={18} />, label: 'Assessments', active: activePage === 'assessments' },
    { icon: <BarChart3 size={18} />, label: 'Reports', active: activePage === 'reports' },
    { icon: <Settings size={18} />, label: 'Settings', active: activePage === 'settings' },
  ];
  return <Sidebar items={items} />;
}

export function RecruiterSidebar({ activePage = 'dashboard' }: { activePage?: string }) {
  const items = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/recruiter/dashboard', active: activePage === 'dashboard' },
    { icon: <Users size={18} />, label: 'Users', active: activePage === 'users' },
    { icon: <ClipboardList size={18} />, label: 'Assessments', active: activePage === 'assessments' },
    { icon: <BarChart3 size={18} />, label: 'Reports', active: activePage === 'reports' },
    { icon: <Settings size={18} />, label: 'Settings', active: activePage === 'settings' },
  ];
  return <Sidebar items={items} />;
}

export function SeniorSidebar({ activePage = 'dashboard' }: { activePage?: string }) {
  const items = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/senior/dashboard', active: activePage === 'dashboard' },
    { icon: <CheckSquare size={18} />, label: 'Position Approvals', active: activePage === 'positions' },
    { icon: <UserCheck size={18} />, label: 'Candidate Approvals', active: activePage === 'candidates' },
    { icon: <FileText size={18} />, label: 'Interim Test Reports', active: activePage === 'interim' },
    { icon: <BarChart3 size={18} />, label: 'Final Reports', active: activePage === 'final' },
    { icon: <Settings size={18} />, label: 'Settings', active: activePage === 'settings' },
  ];
  return <Sidebar items={items} />;
}
