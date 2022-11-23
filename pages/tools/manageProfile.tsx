import { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { colors, font } from '../../styles/variables';
import { Arrow } from '../../styles/icons';

const Wrapper = styled.div`
  display: flex;
`;
const Main = styled.div`
  width: 60%;
  section {
    margin-bottom: 48px;
    h3 {
      ${font(36, 800, `${colors.neut_8}`)};
      margin-bottom: 16px;
      transition: color 0.08s;
      &:hover {
        color: ${colors.prim_5};
        cursor: pointer;
      }
    }
    p {
      ${font(16, 400, `${colors.neut_7}`)};
      box-sizing: border-box;
      line-height: 1.2rem;
      max-width: 600px;
      padding-left: 24px;
      a {
        color: ${colors.neut_7};
        text-decoration: underline;
        transition: color 0.08s;
        &:hover {
          color: ${colors.prim_5};
        }
      }
    }
  }
`;
const SideNav = styled.div`
  margin-left: 10%;
  width: 30%;
  ul {
    li {
      ${font(24, 500, `${colors.neut_7}`)};
      margin: 24px 0;
      svg {
        transform: rotate(-90deg);
        fill: ${colors.neut_7};
      }
    }
  }
`;

const ManageProfile = () => {
  return (
    <Wrapper>
      <Main>
        <section>
          <h3>About Me</h3>
          <p>
            Here you have the control to edit/add content such as: Fluent
            languages, accents. performance skills, athletic endeavors, ethnic
            appearance, union status and additional skills.
          </p>
        </section>
        <section>
          <h3>Resume</h3>
          <p>
            Keeping vour résumé up to date is simple. We've made it easy for you
            to update it in a similar fashion as it is displayed.{' '}
            <a href='#'>Click here</a> if you'd like to view an Example Resume.
          </p>
        </section>
        <section>
          <h3>Photos</h3>
          <p>
            Here is where vou can add new photos to vour Actors Access account,
            as well as manage existing photos already in your Actors Access
            account.
          </p>
        </section>
        <section>
          <h3>Videos</h3>
          <p>
            The video section allows you to attach your videos to our Actor
            Slate feature, select who has access to vour videos. Talent
            Agency's, etc. It also allows you to add a descriptions to the
            videos.
          </p>
        </section>
      </Main>
      <SideNav>
        <ul>
          <li>
            <Arrow />
            About Me
          </li>
          <li>
            <Arrow />
            Resume
          </li>
          <li>
            <Arrow />
            Photos
          </li>
          <li>
            <Arrow />
            Videos
          </li>
          <li>
            <Arrow />
            Size Card
          </li>
        </ul>
      </SideNav>
    </Wrapper>
  );
};

ManageProfile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ManageProfile;
