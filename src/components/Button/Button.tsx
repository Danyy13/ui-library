import React from "react";

export interface ButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

/*
@param props - ButtonProps interface
@returns JSX.Element
 */
export const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    type = 'button',
    className = '',
}: ButtonProps) => {
    // Define base styles that apply to all buttons
    const baseStyles = 'font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Define variant-specific styles
    // Each variant has normal, hover, and disabled states
    const variantStyles = {
        primary: disabled
            ? 'bg-blue-300 text-white cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: disabled
            ? 'bg-gray-200 text-gray-400 border border-gray-200 cursor-not-allowed'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500',
        danger: disabled
            ? 'bg-red-300 text-white cursor-not-allowed'
            : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };

    // Define size-specific styles
    const sizeStyles = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const combinedStyles = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className, // Allow additional custom classes
    ].join(' ');

    return (
        <button
            type={type}
            className={combinedStyles}
            disabled={disabled}
            onClick={disabled ? undefined : onClick} // Don't call onClick if disabled
        >
            {children}
        </button>
    );
};