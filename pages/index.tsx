import type { ReactElement } from 'react';
import styled from 'styled-components';
import UserCard from '../components/userCard';
import ReminderCard from '../components/reminderCard';
import UsBreakdowns from '../components/usBreakdowns';
import YoutubePlaceholder from '../components/youtubePlaceholder';
import Layout from '../components/layout';

const HomeWrapper = styled.div`
  display: flex;
  .one {
    margin-right: 48px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className='one'>
        <UserCard />
        <ReminderCard />
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
