import styled from 'styled-components';
import { colors, font } from '../styles/variables';

const Wrapper = styled.ul`
  ${font(14, 500, `${colors.neut_1}`)};
  margin: 0 24px 48px 0;
  text-align: right;
  li {
    cursor: pointer;
    margin-bottom: 24px;
    position: relative;
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

interface ItemProps {
  title: string;
  url?: string;
  submenu?: ItemProps[];
}

interface ItemsProps {
  items: ItemProps[];
}

const MenuItems = ({ items }: ItemsProps) => {
  return (
    <Wrapper>
      {items.map((item: ItemProps, index: number) => (
        <li key={index}>{item.title}</li>
      ))}
    </Wrapper>
  );
};

export default MenuItems;
