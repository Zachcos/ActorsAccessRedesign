import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { CheckMark, Arrow } from '../styles/icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 72px;
  width: 100%;

  box-sizing: border-box;
  padding: 0 40px;
`;

const TableOptions = styled.div`
  align-items: end;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 0 24px;
  width: 100%;
  .submittedNote {
    ${font(12, 400, `${colors.neut_6}`)};
    align-items: center;
    display: flex;
    line-height: 0.9rem;
    width: 150px;
    svg {
      fill: ${colors.neut_6};
      margin-right: 12px;
      width: 24px;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .pageCount {
    ${font(12, 400, `${colors.neut_6}`)};
    margin-bottom: 8px;
    span {
      ${font(14, 500, `${colors.neut_8}`)};
    }
  }
  .paginationButtons {
    display: flex;
    a {
      ${font(16, 400, `${colors.neut_6}`)};
      text-decoration: none;
    }
    .prev svg {
      fill: ${colors.neut_6};
      margin-right: 4px;
      transform: rotate(90deg);
    }
    .next svg {
      fill: ${colors.neut_6};
      margin-left: 4px;
      transform: rotate(-90deg);
    }
    .divider {
      background: ${colors.neut_6};
      height: 18px;
      margin: 0 12px;
      width: 2px;
    }
  }
`;

const RegionSelect = styled.div`
  ${font(12, 400, `${colors.neut_6}`)};
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 8px;
  }
  select {
    ${font(14, 500, `${colors.neut_8}`)};
    background: ${colors.neut_2};
    border-radius: 8px;
    border: none;
    box-sizing: border-box;
    color: ${colors.neut_8};
    height: 42px;
    padding-left: 16px;
    width: 175px;
  }
`;

const Table = styled.table`
  thead {
    ${font(12, 500, `${colors.neut_2}`)};
    align-items: center;
    background: ${colors.neut_6};
    border-radius: 8px 8px 0 0;
    box-sizing: border-box;
    display: flex;
    height: 66px;
    padding: 0 24px;
    text-transform: uppercase;
    .heading {
      align-items: center;
      display: flex;
      height: 66px;
      text-align: left;
      width: 100%;
      &_date {
        flex-basis: 102px;
        svg {
          fill: ${colors.neut_2};
          margin-left: 8px;
        }
      }
      &_title {
        flex-basis: 400px;
      }
      &_type {
        width: 140px;
      }
      &_casting {
        width: 300px;
      }
      &_start {
        width: 110px;
      }
      &_union {
        width: 80px;
      }
    }
  }
  tbody {
    ${font(12, 400, `${colors.neut_8}`)};
    .item {
      align-items: center;
      display: flex;
      height: 66px;
      padding-left: 24px;
      text-align: left;
      width: 100%;
      &_date {
        flex-basis: 102px;
      }
      &_title {
        flex-basis: 400px;
      }
      &_type {
        width: 140px;
      }
      &_casting {
        width: 300px;
      }
      &_start {
        width: 110px;
      }
      &_union {
        width: 80px;
      }
    }
  }
`;

interface Props {
  breakdowns: BreakdownProps[];
}

const BreakdownTable = ({ breakdowns }: Props) => {
  return (
    <Wrapper>
      <TableOptions>
        <div className='submittedNote'>
          <CheckMark />
          Submitted On Project all times are Pacific
        </div>
        <Pagination>
          <div className='pageCount'>
            Page <span>1</span> of <span>30</span>
          </div>
          <div className='paginationButtons'>
            <a href='#' className='prev'>
              <Arrow /> Prev
            </a>
            <div className='divider' />
            <a href='#' className='next'>
              Next <Arrow />
            </a>
          </div>
        </Pagination>
        <RegionSelect>
          <label htmlFor='regionSelect'>Region:</label>
          <select name='regionSelect' id='regionSelect'>
            <option value='option1'>New York</option>
            <option value='option2'>Los Angeles</option>
            <option value='option3'>Chicago</option>
            <option value='option4'>San Francisco / NorCal</option>
          </select>
        </RegionSelect>
      </TableOptions>
      <Table>
        <thead>
          <tr className='heading'>
            <th className='heading_date'>
              Date <Arrow />
            </th>
            <th className='heading_title'>Title</th>
            <th className='heading_type'>Type</th>
            <th className='heading_casting'>Casting Director</th>
            <th className='heading_start'>Start Date</th>
            <th className='heading_union'>Union</th>
          </tr>
        </thead>
        <tbody>
          {breakdowns.map((item: BreakdownProps) => (
            <tr key={item.id} className='item'>
              <td className='item_date'>{item.dateTime}</td>
              <td className='item_title'>{item.title}</td>
              <td className='item_type'>{item.type}</td>
              <td className='item_casting'>{item.casting}</td>
              <td className='item_startDate'>{item.startDate}</td>
              <td className='item_union'>{item.union}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default BreakdownTable;
