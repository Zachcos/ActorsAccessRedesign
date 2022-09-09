import { ReactElement } from 'react';
import Layout from '../components/Layout';
import AlertCard from '../components/AlertCard';

const BreakdownDetail = () => {
  return (
    <>
      <AlertCard type={'warn'} />
      <h1>this is the breakdown details page</h1>
    </>
  );
};

BreakdownDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BreakdownDetail;
