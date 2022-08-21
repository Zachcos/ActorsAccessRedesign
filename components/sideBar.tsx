import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Arrow, Cart, MailEmpty } from '../styles/icons';

const SideBarWrapper = styled.div`
  background-color: ${colors.neut_8};
  box-shadow: 4px 0 12px rgba(121, 130, 145, 0.4);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 180px;
  .heroText {
    ${font(36, 900, `${colors.prim_5}`)};
    margin: 24px 0 32px 0;
    text-align: center;
  }
  .statusLinks {
    display: flex;
    flex-direction: column;
    margin: 0 24px 48px 0;
    text-align: right;
    svg {
      margin-right: 8px;
    }
    a {
      ${font(12, 400, `${colors.neut_5}`)};
      text-decoration: none;
    }
    a:first-child {
      margin-bottom: 12px;
    }
    svg {
      width: 16px;
    }
    .link_cart svg g,
    .link_mail svg g {
      fill: ${colors.neut_5};
    }
  }
  .navLinks {
    ${font(16, 500, `${colors.neut_1}`)};
    margin-right: 24px;
    text-align: right;
    li {
      cursor: pointer;
      margin-bottom: 36px;
      &:last-child {
        margin-bottom: 48px;
      }
      svg {
        margin-left: 4px;
        transform: rotate(-90deg);
      }
      svg g {
        fill: ${colors.neut_1};
      }
    }
  }
  .buttons {
    align-items: center;
    display: flex;
    flex-direction: column;
    button {
      ${font(14, 500)};
      border-radius: 8px;
      cursor: pointer;
      height: 42px;
      width: 132px;
      &.ecoCast {
        background: transparent;
        border: 1px solid ${colors.prim_5};
        color: ${colors.prim_5};
      }
      &.upgrade {
        background: ${colors.prim_5};
        border: none;
        color: ${colors.neut_8};
      }
      &:first-child {
        margin-bottom: 12px;
      }
    }
  }
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <h1 className='heroText'>Actors Access</h1>
      <div className='statusLinks'>
        <a href='#' className='link_mail'>
          <MailEmpty /> cMail (0)
        </a>
        <a href='#' className='link_cart'>
          <Cart /> Cart (0)
        </a>
      </div>
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
      <div className='buttons'>
        <button className='ecoCast'>Eco Cast Live</button>
        <button className='upgrade'>Upgrade to Plus</button>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
