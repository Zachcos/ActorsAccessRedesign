import { ReactElement } from 'react';
import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import Layout from '../components/Layout';
import AlertCard from '../components/AlertCard';

const CardCopy = styled.div`
  .title {
    ${font(16, 800, `${colors.neut_8}`)};
    margin-bottom: 24px;
  }
  .subtitle {
    ${font(14, 500, `${colors.neut_6}`, 'italic')};
    margin-bottom: 24px;
  }
  .copy {
    ${font(12, 400, `${colors.neut_6}`)};
    line-height: 1.05rem;
  }
`;

const FinePrint = styled.div`
  ${font(12, 400, `${colors.neut_5}`)};
  max-width: 400px;
  line-height: 1.05rem;
  margin-top: 8px;
  margin-left: 48px;
`;

const BreakdownDetail = () => {
  return (
    <div style={{ display: 'flex' }}>
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
      <FinePrint>
        Casting information and descriptions listed below are the proprietary
        property of Breakdown Services, Ltd. Descriptions created and or
        published are confidential and copyright protected. No part of this
        Breakdown may be posted on social media or published OR SHARED in any
        manner without the prior and express written consent of Breakdown
        Services, Ltd. Approved Talent Representatives are restricted to using
        information contained in this Breakdown for the specific purpose of
        submitting talent for available roles. Copyright © 2022 Breakdown
        Services, Ltd. All Rights reserved.
      </FinePrint>
    </div>
  );
};

BreakdownDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BreakdownDetail;
