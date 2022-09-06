import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Arrow } from '../styles/icons';
import Dropdown from './Dropdown';

const ListItem = styled.li`
  ${font(14, 500, `${colors.neut_1}`)};
  cursor: pointer;
  margin-bottom: 36px;
  position: relative;
  text-align: right;
  svg {
    margin-left: 4px;
    transform: rotate(-90deg);
  }
  svg g {
    fill: ${colors.neut_1};
  }
  .dropdown {
    li {
      margin-bottom: 0;
    }
    svg g {
      fill: ${colors.neut_8};
    }
  }
`;

//! FIX PROP TYPE

const MenuItems = ({ items, depthLevel }: any) => {
  return (
    <ListItem>
      {!items.url && items.submenu ? (
        <>
          {items.title}
          <Arrow />
          <Dropdown submenu={items.submenu} depthLevel={depthLevel} />
        </>
      ) : (
        items.title
      )}
    </ListItem>
  );
};

export default MenuItems;
