import React, { ButtonHTMLAttributes } from "react";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`border-2 border-[#713085]  py-3 min-w-[180px] rounded-4xl font-bold  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
