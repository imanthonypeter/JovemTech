import React from 'react';

export const Button = ({ children, onClick, className = '', type = 'button', disabled = false, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
