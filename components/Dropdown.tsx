import styled from 'styled-components';
import { colors, font } from '../styles/variables';

const DropdownWrapper = styled.div`
  background: ${colors.neut_2};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(121, 130, 145, 0.4);
  display: none;
  left: 175px;
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
    margin-bottom: 12px;
    text-align: left;
    &:hover {
      color: ${colors.neut_2};
      background: ${colors.neut_7};
    }
  }
`;

interface DropdownProps extends JSX.IntrinsicAttributes {
  submenu: MenuItemProps[] | undefined;
  show: boolean;
}

//! - Check if bang is needed after submenu

const Dropdown = ({ submenu, show }: DropdownProps) => {
  return (
    <DropdownWrapper className={show ? 'show' : ''}>
      {submenu!.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </DropdownWrapper>
  );
};

export default Dropdown;
