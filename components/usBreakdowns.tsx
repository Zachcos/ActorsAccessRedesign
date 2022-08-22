import styled from 'styled-components';
import { colors, font } from '../styles/variables';

const Wrapper = styled.div`
  height: 430px;
  width: 340px;
  h3 {
    ${font(20, 900, `${colors.neut_7}`)};
    margin-bottom: 16px;
  }
  .primaryMarkets {
    display: flex;
    flex-wrap: wrap;
    width: 338px;
    a {
      ${font(14, 500, `${colors.neut_7}`)};
      margin-bottom: 16px;
      text-decoration: none;
      width: 50%;
    }
  }
  .divider {
    background: ${colors.neut_3};
    height: 2px;
    margin-bottom: 16px;
    width: 100%;
  }
  .secondaryMarkets {
    display: flex;
    flex-direction: column;
    a {
      ${font(12, 400, `${colors.neut_7}`)};
      margin-bottom: 16px;
      text-decoration: none;
    }
  }
`;

const UsBreakdowns = () => (
  <Wrapper>
    <h3>US Breakdowns</h3>
    <div className='primaryMarkets'>
      <a href='#'>Los Angeles</a>
      <a href='#'>New York</a>
      <a href='#'>Chicago</a>
      <a href='#'>San Francisco / NorCal</a>
    </div>
    <div className='divider'></div>
    <div className='secondaryMarkets'>
      <a href='#'>Central Atlantic (DC, DE, MD, PA, VA, WV)</a>
      <a href='#'>Midwest (IA, IL, IN, MI, MN, OH, WI)</a>
      <a href='#'>New England (CT, MA, NE, NH, NJ, NY, RI, VT)</a>
      <a href='#'>North Central (MT, ND, NE, SD, WY)</a>
      <a href='#'>Northwest (ID, OR, WA)</a>
      <a href='#'>Pacific (HI)</a>
      <a href='#'>Rocky Mountains (AZ, CO, NM, NV, UT)</a>
      <a href='#'>South Central (AR, KS, LA, NM, OK, TX)</a>
      <a href='#'>Southeast (AL, FL, GA, KY, LA, MS, NC, SC, TN, VA)</a>
    </div>
  </Wrapper>
);

export default UsBreakdowns;
