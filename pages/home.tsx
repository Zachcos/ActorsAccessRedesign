import type { NextPage } from 'next';
import SideBar from '../components/sideBar';
import UserCard from '../components/userCard';

const Home: NextPage = () => {
  return (
    <>
      <SideBar />
      <div style={{ marginLeft: '180px' }}>
        <UserCard />
      </div>
    </>
  );
};

export default Home;
