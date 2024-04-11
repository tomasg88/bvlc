import * as React from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import PaginationLink from './PaginationLink';

import { buttonVariants } from './ButtonPagination';
import { cn } from '../../utils/css';

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
    <SlArrowLeft className="h-3 w-4" />
    <span>Anterior</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

export default PaginationPrevious;
