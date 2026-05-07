import React from 'react';
import { X } from 'lucide-react';

interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'gray';
  className?: string;
}

const colorMap = {
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
  red: 'bg-red-100 text-red-700',
  gray: 'bg-slate-100 text-slate-700',
};

export function Tag({ children, onRemove, color = 'gray', className = '' }: TagProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${colorMap[color]} ${className}`}>
      {children}
      {onRemove && (
        <button onClick={onRemove} className="hover:opacity-70 transition-opacity">
          <X size={10} />
        </button>
      )}
    </span>
  );
}

interface StatusChipProps {
  status: 'passed' | 'failed' | 'pending' | 'approved' | 'rejected' | 'recommended';
  className?: string;
}

const statusConfig = {
  passed: { label: 'Passed', classes: 'bg-green-100 text-green-700' },
  failed: { label: 'Failed', classes: 'bg-red-100 text-red-700' },
  pending: { label: 'Pending', classes: 'bg-orange-100 text-orange-700' },
  approved: { label: 'Approved', classes: 'bg-blue-100 text-blue-700' },
  rejected: { label: 'Rejected', classes: 'bg-red-100 text-red-700' },
  recommended: { label: 'Recommended', classes: 'bg-green-100 text-green-700' },
};

export function StatusChip({ status, className = '' }: StatusChipProps) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${config.classes} ${className}`}>
      {config.label}
    </span>
  );
}
