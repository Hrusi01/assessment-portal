import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function PrimaryButton({ children, className = '', size = 'md', ...props }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 bg-[#4F8BF9] hover:bg-[#3B6FD1] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = '', size = 'md', ...props }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 bg-transparent border border-[#4F8BF9] text-[#4F8BF9] hover:bg-[#4F8BF9]/10 font-medium rounded-lg transition-colors ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = '', size = 'md', ...props }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium rounded-lg transition-colors ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function DangerButton({ children, className = '', size = 'md', ...props }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 bg-transparent border border-red-400 text-red-500 hover:bg-red-50 font-medium rounded-lg transition-colors ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function IconButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
