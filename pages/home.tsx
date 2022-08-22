import type { NextPage } from 'next';
import SideBar from '../components/sideBar';
import UserCard from '../components/userCard';
import ReminderCard from '../components/reminderCard';

const Home: NextPage = () => {
  return (
    <>
      <SideBar />
      <div style={{ marginLeft: '180px', padding: '24px 0 0 32px' }}>
        <UserCard />
        <ReminderCard />
      </div>
    </>
  );
};

export default Home;
