import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Arrow } from '../styles/icons';

const PaginationWrapper = styled.div`
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

const PaginationButtons = () => (
  <PaginationWrapper>
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
  </PaginationWrapper>
);

export default PaginationButtons;
