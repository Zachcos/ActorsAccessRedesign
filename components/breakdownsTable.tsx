import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import BreakdownsTableOptions from './breakdownsTableOptions';
import breakdownData from '../data/breakdownData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 72px;
  width: 100%;

  box-sizing: border-box;
  padding: 0 40px;
`;

const Table = styled.table`
  width: 100%;
  thead {
    ${font(12, 500, `${colors.neut_2}`)};
    background: ${colors.neut_6};
    height: 66px;
    text-transform: uppercase;
    th {
      padding-top: 28px;
      text-align: left;
      &:first-child {
        padding-left: 24px;
      }
    }
  }
  tbody {
    ${font(12, 400, `${colors.neut_8}`)};
    tr {
      height: 66px;
      background: ${colors.neut_4};
      &:nth-child(odd) {
        background: ${colors.neut_2};
      }
      td {
        padding-top: 28px;
      }
    }
  }
`;

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
    <Wrapper>
      <BreakdownsTableOptions />
      <div className='breakdownTable'>
        <Table>
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
        </Table>
      </div>
    </Wrapper>
  );
};

export default BreakdownsTable;
