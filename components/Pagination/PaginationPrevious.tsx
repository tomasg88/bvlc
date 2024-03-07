import * as React from 'react';
import { ChevronLeft } from 'lucide-react';
import PaginationLink from './PaginationLink';

import { buttonVariants } from './ButtonPagination';
import { cn } from '../../utils/utils';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir a la página anterior"
    size="default"
    className={cn(
      buttonVariants({
        variants: 'command',
      }),
      'gap-1 pl-2.5 mr-3',
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Anterior</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

export default PaginationPrevious;