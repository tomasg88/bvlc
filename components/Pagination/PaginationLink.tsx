import * as React from 'react';

import { cn } from '../../utils/css';
import { ButtonProps, buttonVariants } from './ButtonPagination';

type PaginationLinkProps = {
  isCurrentPage?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isCurrentPage,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isCurrentPage ? 'page' : undefined}
    className={cn(
      buttonVariants({
        size,
        variants: 'pageNumber',
      }),
      isCurrentPage ? 'bg-gray-400 text-white' : '',
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

export default PaginationLink;
