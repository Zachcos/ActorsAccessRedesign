import styled from 'styled-components';
import { colors, font } from '../styles/variables';

const CardWrapper = styled.div`
  //TODO - Adjust sizing to reduce oveall width
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(121, 130, 145, 0.4);
  box-sizing: border-box;
  display: flex;
  height: 280px;
  width: 900px;
`;

const Search = styled.div`
  background: ${colors.white};
  border-radius: 8px 0 0 8px;
  position: relative;
  width: 50%;
  .searchForm {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 0 0 32px;
    .searchItem {
      display: flex;
      flex-direction: column;
      margin: 0 24px 16px 0;
      label {
        ${font(12, 400, `${colors.neut_5}`)};
        margin-bottom: 8px;
      }
      select,
      input {
        //TODO - Style browser/OS default focus styling;
        ${font(12, 500, `${colors.neut_8}`)};
        background: ${colors.neut_1};
        border-radius: 8px;
        border: none;
        box-sizing: border-box;
        padding: 0 16px;
      }
      select,
      input[type='date'] {
        height: 42px;
        width: 140px;
      }
      input[type='text'] {
        // TODO - Change default date picker?
        border-radius: 8px;
        height: 42px;
        width: 200px;
      }
    }
  }
  button {
    ${font(16, 800, `${colors.prim_1}`)};
    background: ${colors.prim_5};
    border-radius: 0 0 0 8px;
    border: none;
    bottom: 0;
    cursor: pointer;
    height: 71px;
    position: absolute;
    text-transform: uppercase;
    width: 100%;
  }
`;

const Filter = styled.div`
  background: ${colors.neut_8};
  border-radius: 0 8px 8px 0;
  position: relative;
  width: 50%;
  .filterForm {
    padding: 24px 0 0 32px;
  }
  .filterItem {
    display: flex;
    flex-direction: column;
    label {
      ${font(12, 400, `${colors.neut_5}`)};
      margin-bottom: 8px;
    }
    select {
      ${font(12, 400, `${colors.neut_8}`)};
      background: ${colors.neut_1};
      border-radius: 8px;
      border: none;
      box-sizing: border-box;
      height: 42px;
      padding: 0 16px;
      width: 200px;
    }
  }
  .checkForm {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    .checkItem {
      width: 50%;
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      position: relative;
      label {
        ${font(12, 400, `${colors.neut_5}`)};
        margin-left: 28px;
      }
      input[type='checkbox'] {
        //TODO - Remove browser default styling
        appearance: none;
        &.checkbox {
          background: ${colors.neut_2};
          border-radius: 2px;
          height: 16px;
          left: 0;
          position: absolute;
          top: -5px;
          width: 16px;
          &:hover {
            background: ${colors.prim_3};
          }
          &:checked {
            background: ${colors.prim_5};
            &:hover {
              background: ${colors.prim_3};
            }
          }
        }
      }
    }
  }
  button {
    ${font(16, 800, `${colors.neut_5}`)};
    background: transparent;
    border-radius: 0 0 8px 0;
    border: none;
    border-top: 2px solid ${colors.neut_7};
    bottom: 0;
    cursor: pointer;
    height: 71px;
    position: absolute;
    text-transform: uppercase;
    width: 100%;
  }
`;

const SearchFilterCard = () => (
  <CardWrapper>
    <Search>
      <div className='searchForm'>
        <div className='searchItem'>
          <label htmlFor='searchBy'>Search by:</label>
          <select name='searchBy' id='searchBy'>
            <option value='option1'>Project title</option>
            <option value='option2'>Casting Director</option>
            <option value='option3'>test option 3</option>
            <option value='option4'>test option 4</option>
          </select>
        </div>
        <div className='searchItem'>
          <label htmlFor='searchFor'>Search for:</label>
          <input type='text' name='searchFor' />
        </div>
        <div className='searchItem'>
          <label htmlFor='include'>Include:</label>
          <select name='include' id='include'>
            <option value='option1'>test option 1</option>
            <option value='option2'>test option 2</option>
            <option value='option3'>test option 3</option>
            <option value='option4'>test option 4</option>
          </select>
        </div>
        <div className='searchItem'>
          <label htmlFor='releaseDate'>Release date:</label>
          <input type='date' name='releaseDate' />
        </div>
      </div>
      <button>Search</button>
    </Search>
    <Filter>
      <div className='filterForm'>
        <div className='filterItem'>
          <label htmlFor='filterBy'>Filter by:</label>
          <select name='filterBy' id='filterBy'>
            <option value='option1'>test option 1</option>
            <option value='option2'>test option 2</option>
            <option value='option3'>test option 3</option>
            <option value='option4'>test option 4</option>
          </select>
        </div>
        <div className='checkForm'>
          <div className='checkItem'>
            <input
              className='checkbox'
              type='checkbox'
              name='backgroundOnly'
              id='backgroundOnly'
            />
            <label htmlFor='backgroundOnly'>Show Background Roles only</label>
          </div>
          <div className='checkItem'>
            <input
              className='checkbox'
              type='checkbox'
              name='payingOnly'
              id='payingOnly'
            />
            <label htmlFor='payingOnly'>Show Paying Roles only</label>
          </div>
          <div className='checkItem'>
            <input
              className='checkbox'
              type='checkbox'
              name='kidsOnly'
              id='kidsOnly'
            />
            <label htmlFor='kidsOnly'>Show Kids Roles only</label>
          </div>
          <div className='checkItem'>
            <input
              className='checkbox'
              type='checkbox'
              name='hideReality'
              id='hideReality'
            />
            <label htmlFor='hideReality'>Show Background Roles only</label>
          </div>
        </div>
      </div>
      <button>Clear Filters</button>
    </Filter>
  </CardWrapper>
);

export default SearchFilterCard;
