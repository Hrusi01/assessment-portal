interface AvatarProps {
  initials: string;
  bgColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
};

export function Avatar({ initials, bgColor = '#4F8BF9', size = 'md', className = '' }: AvatarProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0 ${sizeMap[size]} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {initials}
    </div>
  );
}
