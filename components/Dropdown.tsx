import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import MenuItems from './MenuItems';

const Wrapper = styled.ul`
  background: ${colors.neut_2};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(121, 130, 145, 0.4);
  /* display: none; */
  left: 170px;
  right: 0;
  top: -36px;
  padding: 24px 0;
  position: absolute;
  width: 200px;
  z-index: 100;
  &.show {
    display: block;
  }
  li {
    ${font(14, 500, `${colors.neut_7}`)};
    display: flex;
    align-items: center;
    height: 34px;
    padding-left: 24px;
    margin-bottom: 8px;
    text-align: left;
    &:hover {
      color: ${colors.neut_2};
      background: ${colors.neut_7};
    }
  }
  .dropdown {
    position: absolute;
    li {
      margin-bottom: 0;
    }
    &.dropdownSubmenu {
      top: -24px;
    }
  }
`;

const Dropdown = ({ submenu, depthLevel }: any) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdownSubmenu' : '';
  return (
    <Wrapper className={`dropdown ${dropdownClass}`}>
      {submenu.map((submenu: any, index: number) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </Wrapper>
  );
};

export default Dropdown;
