import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Arrow } from '../styles/icons';
import Dropdown from './Dropdown';
import { useState } from 'react';

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

interface Props {
  items: ItemProps;
  depthLevel: number;
}

const MenuItems = ({ items, depthLevel }: Props) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <ListItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {!items.url && items.submenu ? (
        <>
          {items.title}
          <Arrow />
          <Dropdown
            submenu={items.submenu}
            depthLevel={depthLevel}
            dropdown={dropdown}
          />
        </>
      ) : (
        items.title
      )}
    </ListItem>
  );
};

export default MenuItems;
