import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          type="radio"
          className={cn(
            'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300',
            className
          )}
          ref={ref}
          {...props}
        />
        <label className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;