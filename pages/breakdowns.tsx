import type { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import Layout from '../components/layout';
import SearchFilterCard from '../components/seachFilterCard';
import BreakdownTable from '../components/breakdownsTable';
import breakdownData from '../data/breakdownData';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -32px;
`;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: breakdownData,
    },
  };
};

interface Props {
  data: BreakdownProps[];
}

const Breakdowns = ({ data }: Props) => {
  return (
    <Wrapper>
      <SearchFilterCard />
      <BreakdownTable breakdowns={data} />
    </Wrapper>
  );
};

Breakdowns.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Breakdowns;
