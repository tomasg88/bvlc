import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import PaginationLink from './PaginationLink';

import { cn } from '../../utils/utils';
import { buttonVariants } from './ButtonPagination';

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir a la siguiente página"
    size="default"
    className={cn(
      buttonVariants({
        variants: 'command',
      }),
      'gap-1 pr-2.5 ml-3',
      className
    )}
    {...props}
  >
    <span>Siguiente</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

export default PaginationNext;