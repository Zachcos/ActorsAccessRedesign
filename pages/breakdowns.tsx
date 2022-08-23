import type { ReactElement } from 'react';
import Layout from '../components/layout';

export default function Breakdowns() {
  return <h1>This is the breakdowns component</h1>;
}

Breakdowns.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
