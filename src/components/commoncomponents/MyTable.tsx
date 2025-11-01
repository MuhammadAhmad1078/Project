'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CustomPagination } from './CustomPagination';

interface Column<T> {
  title: string;
  dataIndex: keyof T | (string & {});
  key: string;
  width?: string | number;
  render?: (value: T[keyof T], record: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

interface PaginationProps {
  current?: number;
  pageSize?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
  showSizeChanger?: boolean;
  showTotal?: (total: number) => React.ReactNode;
  className?: string;
  perpageClass?: string;
}

interface MyTableProps<T> {
  columns: Column<T>[];
  dataSource: T[];
  scroll?: { x?: number | string; y?: number | string };
  pagination?: PaginationProps;
  className?: string;
  tablebody?: string;
  rowClass?: string;
  rowKey: keyof T | ((record: T) => string);
  onRow?: (record: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>;
}

function MyTable<T>({
  columns,
  dataSource,
  scroll,
  pagination,
  className = '',
  tablebody='',
  rowClass='',
  rowKey,
  onRow,
}: MyTableProps<T>) {
  const pageSize = pagination?.pageSize || 10;
  const total = pagination?.total ?? dataSource.length;
  const totalPages = Math.ceil(total / pageSize);
  const current = pagination?.current || 1;

  const getKey = (record: T): string => {
    if (typeof rowKey === 'function') return rowKey(record);
    return String(record[rowKey]);
  };

  const handlePageChange = (page: number) => {
    pagination?.onChange?.(page, pageSize);
  };

  const handlePageSizeChange = (size: number) => {
    pagination?.onChange?.(1, size);
  };

  return (
    <div className={`w-full overflow-x-auto rounded-md ${className}`}>
      <div style={scroll?.y ? { maxHeight: scroll.y, overflowY: 'auto' } : {}}>
        <Table className="min-w-[800px]" style={{ minWidth: scroll?.x }}>
          <TableHeader className="bg-[#0C666A]">
            <TableRow className="hover:bg-[#0C666A]" style={{ borderBottom: 0 }}>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className={`text-white p-3 px-4 ${col.align === 'right' ? 'text-right pr-4' : ''} ${col.className || ''}`}
                  style={{ width: col.width }}
                >
                  {col.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className={`bg-[#0E1414] ${tablebody}`}>
            {dataSource.map((record, index) => (
              <TableRow
                key={getKey(record)}
                className={`border-0 hover:bg-transparent ${rowClass}`}
                {...(onRow?.(record, index) || {})}
              >
                {columns.map((col) => {
                  const value = record[col.dataIndex as keyof T];
                  const content = col.render ? col.render(value, record, index) : String(value);
                  return (
                    <TableCell
                      key={col.key}
                      className={`px-4 ${col.align === 'right' ? 'text-right' : ''} ${col.className || ''}`}
                    >
                      {content}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {pagination && total > 5 && (
        <div className="mt-4">
          <CustomPagination
            currentPage={current}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onRowsPerPageChange={pagination.showSizeChanger ? handlePageSizeChange : undefined}
            rowsPerPage={pageSize}
            className={pagination.className}
            perpageClass={pagination.perpageClass}
          />
          {/* {pagination.showTotal && (
            <div className="mt-2 text-sm text-right">
              {pagination.showTotal(total)}
            </div>
          )} */}
        </div>
      )}
    </div>
  );
}

export { MyTable };
