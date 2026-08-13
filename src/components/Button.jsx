import React from 'react';

export function Button({
  children,
  variant = 'primary', // primary | secondary | outline | icon
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseClass = `btn btn-${variant} ${className}`;

  return (
    <button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </button>
  );
}
