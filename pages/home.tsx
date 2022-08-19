import type { NextPage } from 'next';
import NavBar from '../components/navBar';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1>this is the home page</h1>
      </div>
    </>
  );
};

export default Home;
