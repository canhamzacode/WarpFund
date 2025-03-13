import React, { ReactNode } from 'react';
import { type ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right'; // New prop to control icon placement
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'left', // Default to left
  className = '',
  onClick,
  ...props
}) => {
  // Define button styles
  const baseStyles =
    'flex items-center justify-center cursor-pointer font-medium rounded-md transition duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed gap-2 h-[46px]';
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg'
  };
  const variantStyles = {
    default: 'bg-primary text-white hover:bg-primary/80',
    primary: 'bg-primary text-white hover:bg-primary/800',
    secondary: 'bg-primary text-white hover:bg-primary/800', // Updated secondary to use bg-primary
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${variantStyles[variant] || variantStyles.default} 
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {iconPosition === 'left' && icon && icon}
      {children}
      {iconPosition === 'right' && icon && icon}
    </button>
  );
};

export default Button;
