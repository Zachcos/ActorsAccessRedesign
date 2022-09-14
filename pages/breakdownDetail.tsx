import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import Layout from '../components/Layout';
import AlertCard from '../components/AlertCard';
import showData from '../data/showData';

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
  margin-top: 8px;
  max-width: 450px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0;
  .titleWrapper {
    width: 100%;
    .title {
      ${font(60, 900, `${colors.neut_8}`)};
      margin-bottom: 8px;
    }
    .datePosted {
      ${font(12, 400, `${colors.neut_6}`)};
      margin-bottom: 48px;
      i {
        font-weight: 900;
      }
    }
  }
  .primaryInfo {
    margin-right: 24px;
    min-width: 475px;
    .audition,
    .production {
      ${font(16, 400, `${colors.neut_6}`)};
      i {
        font-weight: 900;
      }
      p {
        margin-bottom: 12px;
      }
    }
    .audition {
      margin-bottom: 32px;
    }
  }
  .secondaryInfo {
    max-width: 500px;
    width: 100%;
    p {
      ${font(12, 400, `${colors.neut_6}`)};
      line-height: 1.05rem;
      margin-bottom: 8px;
      i {
        font-weight: 900;
      }
    }
  }
`;

const BreakdownWrapper = styled.div`
  margin-bottom: 100px;
  .bdItem {
    cursor: pointer;
    margin-bottom: 30px;
    max-width: 900px;
    .role {
      ${font(20, 900, `${colors.neut_8}`)};
      margin-bottom: 8px;
      text-transform: uppercase;
      transition: color 0.15s;
    }
    &:hover {
      .role {
        color: ${colors.prim_5};
      }
    }
    .description {
      ${font(14, 400, `${colors.neut_6}`)};
      box-sizing: border-box;
      line-height: 1.05rem;
      padding-left: 12px;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      gig: showData.gigInfo,
      creative: showData.creativeInfo,
      roles: showData.roles,
    },
  };
};

interface Props {
  gig: GigProps;
  creative: CreativeProps[];
  roles: RolesProps[];
}

const BreakdownDetail = ({ gig, creative, roles }: Props) => {
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
        <div className='titleWrapper'>
          <h2 className='title'>{gig.title}</h2>
          <p className='datePosted'>
            <i>Posted:</i> {gig.datePosted}
          </p>
        </div>
        <div className='primaryInfo'>
          <div className='audition'>
            <p className='audition-venue'>
              <i>Venue:</i> {gig.venue}
            </p>
            <p className='audition-union'>
              <i>Union:</i> {gig.union}
            </p>
            <p className='audition-dates'>
              <i>Audition Dates:</i> {gig.audDates}
            </p>
            <p className='audition-deadline'>
              <i>Audition Deadline:</i> {gig.audDeadline}
            </p>
          </div>
          <div className='production'>
            <p className='production-rehDates'>
              <i>Rehearsal Dates:</i> {gig.rehDates}
            </p>
            <p className='production-dates'>
              <i>Production Dates:</i> {gig.prodDates}
            </p>
            <p className='production-pay'>
              <i>Rate of pay:</i> {gig.prodPay}
            </p>
            <p className='production-location'>
              <i>Location:</i> {gig.prodLocation}
            </p>
          </div>
        </div>

        <div className='secondaryInfo'>
          {creative.map((item: CreativeProps, index: number) => (
            <p key={index}>
              <i>{item.label}:</i> {item.value}
            </p>
          ))}
        </div>
      </DetailWrapper>
      <BreakdownWrapper>
        {roles.map((item: RolesProps, index: number) => (
          <div className='bdItem' key={index}>
            <h3 className='role'>[ {item.role} ]</h3>
            <p className='description'>{item.description}</p>
          </div>
        ))}
      </BreakdownWrapper>
    </div>
  );
};

BreakdownDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BreakdownDetail;
