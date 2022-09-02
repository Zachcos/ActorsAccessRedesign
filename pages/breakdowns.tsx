import type { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SearchFilterCard from '../components/seachFilterCard';
import BreakdownsTableOptions from '../components/breakdownsTableOptions';
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
      <BreakdownsTableOptions />
      <BreakdownsTable />
    </Wrapper>
  );
};

Breakdowns.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Breakdowns;
