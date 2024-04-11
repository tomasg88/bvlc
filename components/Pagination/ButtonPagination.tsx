import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/css';

// TODO - move this to CSS modules
export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variants: {
        command: 'bg-red-600 text-white hover:bg-red-700 cursor-pointer select-none',
        pageNumber: 'bg-gray-300 text-black hover:bg-gray-400 cursor-pointer select-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : 'button';
      return <Comp className={cn(buttonVariants({ size, className }))} ref={ref} {...props} />;
    }
  )
);
Button.displayName = 'Button';
