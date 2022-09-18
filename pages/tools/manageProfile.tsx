import { ReactElement } from 'react';
import Layout from '../../components/Layout';

const ManageProfile = () => <h1>This is the manage profile page</h1>;

ManageProfile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ManageProfile;
