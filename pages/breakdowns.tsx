import type { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SearchFilterCard from '../components/seachFilterCard';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -32px;
`;

export default function Breakdowns() {
  return (
    <Wrapper>
      <SearchFilterCard />
      <h1 style={{ marginTop: '100px' }}>This will be a list of breakdowns</h1>
    </Wrapper>
  );
}

Breakdowns.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
