import type { NextPage } from 'next';
import styled from 'styled-components';
import SideBar from '../components/sideBar';
import UserCard from '../components/userCard';
import ReminderCard from '../components/reminderCard';
import UsBreakdowns from '../components/usBreakdowns';
import YoutubePlaceholder from '../components/youtubePlaceholder';

const HomeWrapper = styled.div`
  display: flex;
  margin-left: 180px;
  padding: 24px 0 0 32px;
  .one {
    margin-right: 48px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <SideBar />
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
    </>
  );
};

export default Home;
