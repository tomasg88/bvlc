import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, onChange, ...props }, ref) => {
    return (
      <input
        type={type}
        className={
          'flex w-full px-3 py-4 bg-transparent text-2xl text-gray-700 border-b-2 border-yellow-400 outline-none'
        }
        ref={ref}
        onChange={onChange}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
