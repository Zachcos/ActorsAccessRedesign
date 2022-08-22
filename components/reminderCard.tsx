import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Warning } from '../styles/icons';

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(121, 130, 145, 0.4);
  display: flex;
  height: 246px;
  width: 466px;
  .sidebar {
    background: ${colors.neut_8};
    border-radius: 8px 0 0 8px;
    width: 64px;
    height: 100%;
    .iconContainer {
      display: flex;
      justify-content: center;
      width: 64px;
    }
    svg {
      fill: ${colors.prim_5};
      margin-top: 32px;
      width: 16px;
    }
  }
  .main {
    ${font(12, 400, `${colors.neut_6}`, 'italic')};
    box-sizing: border-box;
    padding: 32px 24px 0 24px;
    p {
      line-height: 1.2rem;
      margin-bottom: 1.8rem;
    }
  }
`;

const ReminderCard = () => (
  <Card>
    <div className='sidebar'>
      <div className='iconContainer'>
        <Warning />
      </div>
    </div>
    <div className='main'>
      <p>
        Be sure to keep your profile and résumé up-to-date, and upload your
        current photos so you and your representatives have access to the most
        current and accurate information about you.
      </p>
      <p>
        <span className='emphasis'>Actors Access</span> uses your information to
        alert vou via email when new Breakdowns on actors access match your
        profile. PLEASE NOTE, if vou do not wish to receive information about
        certain types of roles, or if vou do not wish to receive ANY
        notifications, vou may update vour preferences on the{' '}
        <a href='#'>My Account</a> page.
      </p>
    </div>
  </Card>
);

export default ReminderCard;
