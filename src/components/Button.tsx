import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
  variant?: 'primary' | 'secondary' | 'text';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, showArrow = false, variant = 'primary', className = '', ...props }, ref) => {

    const baseStyles = "w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg transition-all active:scale-[0.98]";

    let variantStyles = "";
    if (variant === 'primary') {
      variantStyles = "bg-[#A799D1] hover:bg-[#9688C0] text-white shadow-sm";
    } else if (variant === 'secondary') {
      variantStyles = "bg-gray-100 hover:bg-gray-200 text-gray-[#2D2A6E]";
    } else if (variant === 'text') {
      variantStyles = "bg-transparent text-[#5A32A3] hover:text-[#482685] hover:bg-purple-50";
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      >
        {children}
        {showArrow && <ArrowRight className="w-4 h-4 ml-1" />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
