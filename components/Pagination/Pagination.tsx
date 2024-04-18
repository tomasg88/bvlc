import * as React from 'react';
import { cn } from '../../utils/css';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center pt-10', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

export default Pagination;
