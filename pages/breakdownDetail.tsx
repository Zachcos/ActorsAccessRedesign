import { ReactElement } from 'react';
import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import Layout from '../components/Layout';
import AlertCard from '../components/AlertCard';

const CardCopy = styled.div`
  .title {
    ${font(20, 800, `${colors.neut_8}`)};
    margin-bottom: 24px;
  }
  .subtitle {
    ${font(16, 500, `${colors.neut_6}`, 'italic')};
    margin-bottom: 24px;
  }
  .copy {
    ${font(14, 400, `${colors.neut_6}`)};
    line-height: 1.05rem;
  }
`;

const BreakdownDetail = () => {
  return (
    <>
      <AlertCard type={'warn'}>
        <CardCopy>
          <p className='title'>Submission Instructions</p>
          <p className='subtitle'>Always submit ASAP!</p>
          <p className='copy'>
            Submitting within the first day of Breakdown publication is highly
            recommended
          </p>
        </CardCopy>
      </AlertCard>
    </>
  );
};

BreakdownDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BreakdownDetail;
