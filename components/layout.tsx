import SideBar from './SideBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 180px;
  padding: 24px 0 0 32px;
`;

interface ChildElementProp {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ChildElementProp) => (
  <>
    <SideBar />
    <Wrapper>{children}</Wrapper>
  </>
);

export default Layout;
