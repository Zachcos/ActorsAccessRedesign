import type { ReactElement } from 'react';
import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import UserCard from '../components/UserCard';
import AlertCard from '../components/AlertCard';
import UsBreakdowns from '../components/UsBreakdowns';
import YoutubePlaceholder from '../components/YoutubePlaceholder';
import Layout from '../components/Layout';

const HomeWrapper = styled.div`
  display: flex;
  .one {
    height: 100%;
    margin-right: 48px;
  }
`;

const CardCopy = styled.div`
  ${font(12, 400, `${colors.neut_6}`, 'italic')};
  p {
    line-height: 1.2rem;
    margin-bottom: 1.8rem;
    &:last-child {
      margin-bottom: 0;
    }
    i {
      ${font(12, 800)};
    }
    a {
      color: ${colors.neut_6};
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className='one'>
        <UserCard />
        <AlertCard type={'danger'}>
          <CardCopy>
            <p>
              Be sure to keep your profile and résumé up-to-date, and upload
              your current photos so you and your representatives have access to
              the most current and accurate information about you.
            </p>
            <p>
              <i>Actors Access</i> uses your information to alert vou via email
              when new Breakdowns on actors access match your profile. PLEASE
              NOTE, if vou do not wish to receive information about certain
              types of roles, or if vou do not wish to receive ANY
              notifications, vou may update vour preferences on the{' '}
              <a href='#'>My Account</a> page.
            </p>
          </CardCopy>
        </AlertCard>
      </div>
      <div className='two'>
        <UsBreakdowns />
        <YoutubePlaceholder />
      </div>
    </HomeWrapper>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
