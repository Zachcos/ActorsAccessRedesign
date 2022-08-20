import type { NextPage } from 'next';
import SideBar from '../components/sideBar';

const Home: NextPage = () => {
  return (
    <>
      <SideBar />
      <div style={{ marginLeft: '180px' }}>
        <h1>this is the home page</h1>
      </div>
    </>
  );
};

export default Home;
