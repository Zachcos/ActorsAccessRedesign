import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import PaginationButtons from './paginationButtons';
import BreakdownsTableOptions from './breakdownsTableOptions';
import breakdownData from '../data/breakdownData';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 72px;
  padding: 0 40px 100px 40px;
  width: 100%;
`;

const Table = styled.table`
  margin-bottom: 32px;
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
        .dateTime {
          margin-left: 24px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

const columnHelper = createColumnHelper<BreakdownProps>();

const columns = [
  columnHelper.accessor('dateTime', {
    cell: (info) => {
      const dateStr = info.getValue();
      const [yyyy, mm, dd, hh, mi] = dateStr.split(/[/:\-T]/);
      return (
        <div className='dateTime'>
          <span>
            {dd}-{mm}-{yyyy}
          </span>
          <span>
            {hh}:{mi}
          </span>
        </div>
      );
    },
    header: () => <div style={{ marginLeft: '12px' }}>Date</div>,
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
  const [data] = useState([...breakdownData]);
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
        <PaginationButtons />
      </div>
    </Wrapper>
  );
};

export default BreakdownsTable;
