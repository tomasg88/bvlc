import * as React from 'react';
import { MoreHorizontal } from 'lucide-react';

import { cn } from '../../utils/utils';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Mas Páginas</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';