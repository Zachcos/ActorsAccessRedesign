import type { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SearchFilterCard from '../components/SearchFilterCard';
import BreakdownsTable from '../components/breakdownsTable';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -32px;
`;

const Breakdowns = () => {
  return (
    <Wrapper>
      <SearchFilterCard />
      <BreakdownsTable />
    </Wrapper>
  );
};

Breakdowns.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Breakdowns;
