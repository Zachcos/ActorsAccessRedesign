import type { ReactElement } from 'react';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import AlertCard from '../components/AlertCard';
import UsBreakdowns from '../components/UsBreakdowns';
import YoutubePlaceholder from '../components/YoutubePlaceholder';
import Layout from '../components/Layout';

const HomeWrapper = styled.div`
  display: flex;
  .one {
    height: 100%;
    margin-right: 48px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className='one'>
        <UserCard />
        <AlertCard type={'danger'} />
      </div>
      <div className='two'>
        <UsBreakdowns />
        <YoutubePlaceholder />
      </div>
    </HomeWrapper>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
