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
  line-height: 1.05rem;
  margin-left: 48px;
  margin-top: 8px;
  max-width: 450px;
`;

const BreakdownDetail = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
      <DetailWrapper>
        <h2 className='title'>A Wonderful World</h2>
        <span className='datePosted'>
          <i>Posted:</i> Monday, Aug 1, 2022, 2:24pm Pacific
        </span>
        <div className='primaryInfo'>
          <div className='audition'>
            <span className='audition-venue'>
              <i>Venue:</i> Pearl Studios
            </span>
            <span className='audition-dates'>
              <i>Audition Dates:</i> Immediate Virtual Submissons via Eco Cast
            </span>
            <span className='audition-deadline'>
              <i>Audition Deadline:</i> August 11, 2022
            </span>
          </div>
          <div className='production'>
            <span className='production-rehDates'>
              <i>Rehearsal Dates:</i> September 6-20, 2022
            </span>
            <span className='production-dates'>
              <i>Production Dates:</i> September 21 - November 12, 2022
            </span>
            <span className='production-pay'>
              <i>Rate of pay:</i> $1000/wk
            </span>
            <span className='production-location'>
              <i>Location:</i> New York, NY
            </span>
          </div>

          <div className='secondaryInfo'>
            <p>INFO COMING SOON</p>
          </div>
        </div>
      </DetailWrapper>
      <BreakdownWrapper>
        <div className='bdItem'>
          <h3 className='role'>[ LOUIS ARMSTRONG ]</h3>
          <p className='description'>
            30s-40s, male-identifying, Black. American Icon and International
            Music Legend. The father of Jazz. Born in the most impoverished and
            violent part of New Orleans at the beginning of the 20th Century,
            his mother was a sex-worker, and he never knew his father. He grew
            up hiding under the pianos in the brothels of Storyville. He wasn't
            a typically "handsome' man. But had huge charisma, warmth and wit
            and lived only for his music and blowing his horn. His music was the
            child he was always longing for.
          </p>
        </div>
      </BreakdownWrapper>
    </div>
  );
};

BreakdownDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BreakdownDetail;
