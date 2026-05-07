import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
  error?: string;
}

export function FormInput({ label, required, leftIcon, rightElement, error, className = '', type, ...props }: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className={`relative flex items-center h-12 rounded-md border ${error ? 'border-red-400' : 'border-slate-200'} bg-white overflow-hidden focus-within:border-[#4F8BF9] focus-within:ring-2 focus-within:ring-[#4F8BF9]/20 transition-all ${className}`}>
        {leftIcon && (
          <span className="pl-3 pr-2 text-slate-400 flex-shrink-0">{leftIcon}</span>
        )}
        <input
          type={inputType}
          {...props}
          className="flex-1 h-full bg-transparent px-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
          style={{ paddingLeft: leftIcon ? '0' : undefined }}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="px-3 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
        {rightElement && !isPassword && (
          <div className="flex-shrink-0">{rightElement}</div>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

interface PhoneInputProps {
  label?: string;
  required?: boolean;
  prefix?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  placeholder?: string;
  showSuccess?: boolean;
}

export function PhoneInput({ label, required, prefix = '+91', buttonLabel = 'Generate OTP', onButtonClick, placeholder = 'Phone Number', showSuccess }: PhoneInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="flex h-12 rounded-md border border-slate-200 overflow-hidden focus-within:border-[#4F8BF9] focus-within:ring-2 focus-within:ring-[#4F8BF9]/20 transition-all">
        <span className="flex items-center px-3 bg-slate-100 border-r border-slate-200 text-sm text-slate-600 font-medium">{prefix}</span>
        <input
          type="tel"
          placeholder={placeholder}
          className="flex-1 px-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none bg-white"
        />
        {showSuccess && (
          <span className="flex items-center px-3 text-xs text-green-600 font-medium bg-green-50 border-l border-slate-200">
            ✓ Valid
          </span>
        )}
        {buttonLabel && (
          <button
            type="button"
            onClick={onButtonClick}
            className="px-4 text-xs font-medium bg-[#4F8BF9] hover:bg-[#3B6FD1] text-white transition-colors whitespace-nowrap"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export function FormTextarea({ label, required, className = '', ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <textarea
        {...props}
        className={`rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#4F8BF9] focus:ring-2 focus:ring-[#4F8BF9]/20 transition-all resize-none ${className}`}
      />
    </div>
  );
}

export function FormSelect({ label, required, className = '', children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <select
        {...props}
        className={`h-12 rounded-md border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-[#4F8BF9] focus:ring-2 focus:ring-[#4F8BF9]/20 transition-all bg-white appearance-none ${className}`}
      >
        {children}
      </select>
    </div>
  );
}
