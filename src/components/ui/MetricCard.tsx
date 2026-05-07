interface MetricCardProps {
  value: string | number;
  label: string;
  bgColor: string;
  className?: string;
}

export function MetricCard({ value, label, bgColor, className = '' }: MetricCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 text-white flex flex-col gap-2 shadow-md ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm font-medium opacity-90">{label}</span>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  linkText?: string;
  onLink?: () => void;
}

import React from 'react';

export function FeatureCard({ icon, iconBg, title, description, linkText, onLink }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow flex flex-col items-center text-center gap-4">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      {linkText && (
        <button
          onClick={onLink}
          className="text-sm font-medium text-[#4F8BF9] hover:text-[#3B6FD1] transition-colors"
        >
          {linkText} →
        </button>
      )}
    </div>
  );
}
