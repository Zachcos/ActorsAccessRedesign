import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { CheckMark, Arrow } from '../styles/icons';
import PaginationButtons from './PaginationButtons';

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

const BreakdownsTableOptions = () => {
  return (
    <TableOptions>
      <div className='submittedNote'>
        <CheckMark />
        Submitted On Project all times are Pacific
      </div>
      <PaginationButtons />
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
  );
};

export default BreakdownsTableOptions;
