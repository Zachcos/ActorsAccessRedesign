import type { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SearchFilterCard from '../components/seachFilterCard';
import BreakdownTable from '../components/breakdownsTable';

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
      <BreakdownTable />
    </Wrapper>
  );
}

Breakdowns.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
