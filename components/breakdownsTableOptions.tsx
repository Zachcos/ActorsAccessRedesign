import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { CheckMark, Arrow } from '../styles/icons';

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

const BreakdownsTableOptions = () => {
  return (
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
  );
};

export default BreakdownsTableOptions;
