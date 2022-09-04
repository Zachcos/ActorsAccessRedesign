import { menuItems } from '../data/dropdownData';
import styled from 'styled-components';
import { colors, font } from '../styles/variables';

const NavLinksWrapper = styled.ul`
  ${font(14, 500, `${colors.neut_1}`)};
  margin: 0 24px 48px 0;
  text-align: right;
  li {
    cursor: pointer;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
    svg {
      margin-left: 4px;
      transform: rotate(-90deg);
    }
    svg g {
      fill: ${colors.neut_1};
    }
  }
`;
const NavLinks = () => {
  return (
    <NavLinksWrapper>
      {menuItems.map((item: MenuItemProps, index: number) => (
        <li key={index}>{item.title}</li>
      ))}
    </NavLinksWrapper>
  );
};

export default NavLinks;
