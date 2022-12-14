import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Cart, MailEmpty } from '../styles/icons';
import MenuItems from './MenuItems';
import { menuItems } from '../data/menuItems';

const SideBarWrapper = styled.div`
  background-color: ${colors.neut_8};
  box-shadow: 4px 0 12px rgba(121, 130, 145, 0.4);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 180px;
  z-index: 1;
  .heroText {
    ${font(24, 900, `${colors.prim_5}`)};
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
      width: 14px;
    }
    .link_cart svg g,
    .link_mail svg g {
      fill: ${colors.neut_5};
    }
  }
  .navLinks {
    li {
      padding-right: 24px;
    }
  }
  .buttons {
    align-items: center;
    display: flex;
    flex-direction: column;
    button {
      ${font(12, 500)};
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
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      <div className='buttons'>
        <button className='ecoCast'>Eco Cast Live</button>
        <button className='upgrade'>Upgrade to Plus</button>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
