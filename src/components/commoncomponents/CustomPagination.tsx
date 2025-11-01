'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onRowsPerPageChange?: (value: number) => void;
  onPageChange?: (page: number) => void;
  rowsPerPage?: number;
  className?:string;
  perpageClass?: string;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ 
  currentPage, 
  totalPages,
  onRowsPerPageChange,
  onPageChange,
  rowsPerPage = 6,
  className,
  perpageClass,
}) => {
  const createPageArray = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        pages.push('...');
      }
    }

    return [...new Set(pages)];
  };

  const pages = createPageArray();

    return (
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 w-full ${className}`}>
          {
            onRowsPerPageChange&&
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium">Rows per page:</p>
                <Select
                    value={rowsPerPage.toString()}
                    onValueChange={(value) => onRowsPerPageChange?.(Number(value))}
                >
                    <SelectTrigger className={`h-8 w-[70px] bg-[#313237] border-0 focus:ring-0 focus-visible:ring-0 ${perpageClass}`}>
                        <SelectValue placeholder={rowsPerPage} />
                    </SelectTrigger>
                    <SelectContent side="top">
                        {[6, 10, 20, 30, 40, 50].map((pageSize) => (
                        <SelectItem key={pageSize} value={`${pageSize}`}>
                            {pageSize}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
          }
            <Pagination className="mx-0 w-auto">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                        onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
                        className={`cursor-pointer hover:bg-transparent bg-transparent hover:text-white ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
                        />
                    </PaginationItem>
                    {pages.map((page, index) => (
                        <PaginationItem key={index}>
                        {page === '...' ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                            onClick={() => onPageChange?.(Number(page))}
                            isActive={page === currentPage}
                            className={`cursor-pointer hover:bg-transparent hover:text-white ${page === currentPage ? 'bg-[#173D40]' : 'bg-transparent'}`}
                            >
                            {page}
                            </PaginationLink>
                        )}
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                        onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
                        className={`cursor-pointer hover:bg-transparent bg-transparent hover:text-white ${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export { CustomPagination };
