import type { NextPage } from 'next';
import SideBar from '../components/sideBar';
import UserCard from '../components/userCard';
import ReminderCard from '../components/reminderCard';
import UsBreakdowns from '../components/usBreakdowns';
import YoutubePlaceholder from '../components/youtubePlaceholder';

const Home: NextPage = () => {
  return (
    <>
      <SideBar />
      <div
        style={{
          marginLeft: '180px',
          padding: '24px 0 0 32px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          maxHeight: '100vh',
        }}
      >
        <UserCard />
        <ReminderCard />
        <UsBreakdowns />
        <YoutubePlaceholder />
      </div>
    </>
  );
};

export default Home;
