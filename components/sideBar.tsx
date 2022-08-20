import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Arrow, Cart, MailEmpty } from '../styles/icons';

const NavBarWrapper = styled.div`
  background: ${colors.neut_8};
  display: flex;
  height: 84px;
  justify-content: center;
  width: 100%;
  .navInner {
    align-items: center;
    display: flex;
    max-width: 1425px;
  }
  h1 {
    ${font(36, 900, `${colors.prim_5}`)};
    margin-right: 48px;
  }
  .navLinks {
    ${font(16, 500, `${colors.neut_1}`)};
    display: flex;
    li {
      cursor: pointer;
      margin-right: 32px;
      &:last-child {
        margin-right: 48px;
      }
      svg {
        margin-left: 4px;
      }
    }
  }
  .navButtons {
    display: flex;
    margin-right: 48px;
    button {
      border: none;
      border-radius: 8px;
      cursor: pointer;
      height: 42px;
      width: 138px;
      &:first-child {
        margin-right: 24px;
      }
      &.ecoCast {
        ${font(14, 500, `${colors.prim_5}`)};
        background: transparent;
        border: 1px solid ${colors.prim_5};
      }
      &.upgrade {
        ${font(14, 500, `${colors.neut_8}`)};
        background: ${colors.prim_5};
      }
    }
  }
  .userLinks {
    display: flex;
    flex-direction: column;
    svg {
      margin-right: 8px;
    }
    a {
      ${font(14, 400, `${colors.neut_1}`)};
      text-decoration: none;
      &:first-child {
        margin-bottom: 12px;
      }
    }
  }
`;

const SideBar = () => {
  return (
    <NavBarWrapper>
      <div className='navInner'>
        <h1>AA</h1>
        <ul className='navLinks'>
          <li>home</li>
          <li>
            breakdowns <Arrow />
          </li>
          <li>
            my tools <Arrow />
          </li>
          <li>submissions</li>
          <li>
            auditions <Arrow />
          </li>
          <li>
            services <Arrow />
          </li>
          <li>
            contact us <Arrow />
          </li>
        </ul>
        <div className='navButtons'>
          <button className='ecoCast'>Eco Cast Live</button>
          <button className='upgrade'>Upgrade to Plus</button>
        </div>
        <div className='userLinks'>
          <a href='#'>
            <MailEmpty /> Cmail (0)
          </a>
          <a href='#'>
            <Cart />
            Cart (0)
          </a>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default SideBar;
