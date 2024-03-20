import * as React from 'react';
import { IoIosMore } from 'react-icons/io';

import { cn } from '../../utils/utils';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <IoIosMore className="h-4 w-4" />
    <span className="sr-only">Mas Páginas</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
