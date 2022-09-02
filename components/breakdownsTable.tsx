import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import breakdownData from '../data/breakdownData';

const columnHelper = createColumnHelper<BreakdownProps>();

const columns = [
  columnHelper.accessor('dateTime', {
    cell: (info) => info.getValue(),
    header: () => 'Date',
  }),
  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
    header: () => 'Title',
  }),
  columnHelper.accessor('type', {
    cell: (info) => info.getValue(),
    header: () => 'Type',
  }),
  columnHelper.accessor('casting', {
    cell: (info) => info.getValue(),
    header: () => 'Casting Director',
  }),
  columnHelper.accessor('startDate', {
    cell: (info) => info.getValue(),
    header: () => 'Start Date',
  }),
  columnHelper.accessor('union', {
    cell: (info) => info.getValue(),
    header: () => 'Union',
  }),
];

const BreakdownsTable = () => {
  const [data, setData] = useState([...breakdownData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='breakdownTable'>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BreakdownsTable;
