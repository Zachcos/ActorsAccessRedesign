import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import {
  MailEmpty,
  Cart,
  Profile,
  Resume,
  SizeCard,
  Media,
  Photo,
  SlateShot,
  Gear,
  Representation,
  Contact,
  SignOut,
} from '../styles/icons';

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(121, 130, 145, 0.4);
  height: 456px;
  width: 466px;
  .top {
    background: ${colors.neut_8};
    border-radius: 8px 8px 0 0;
    height: 114px;
    width: 100%;
    h2 {
      ${font(30, 800, `${colors.neut_2}`)};
      margin-bottom: 24px;
      padding: 24px 0 0 24px;
    }
    .statusLinks {
      display: flex;
      margin-left: 24px;
      a {
        ${font(14, 400, `${colors.neut_5}`)};
        text-decoration: none;
        &:first-child {
          margin-right: 32px;
        }
        svg {
          fill: ${colors.neut_5};
          height: 16px;
          margin-right: 12px;
        }
      }
    }
  }
  .main {
    background: ${colors.white};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 205px;
    padding: 48px 0 0 24px;
    a {
      ${font(16, 400, `${colors.neut_8}`)};
      margin-bottom: 24px;
      text-decoration: none;
      svg {
        fill: ${colors.neut_8};
        margin-right: 12px;
        width: 16px;
      }
    }
  }
  .footer {
    background: ${colors.neut_1};
    border-radius: 0 0 8px 8px;
    box-sizing: border-box;
    display: flex;
    height: 138px;
    justify-content: space-between;
    padding: 24px;
    .footerLinks {
      display: flex;
      flex-direction: column;
      a {
        ${font(14, 400, `${colors.neut_6}`)}
        margin-bottom: 18px;
        text-decoration: none;
        svg {
          fill: ${colors.neut_6};
          width: 16px;
          margin-right: 12px;
        }
      }
    }
    .signOut {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      a {
        ${font(14, 400, `${colors.neut_5}`)}
        text-decoration: none;
        svg {
          fill: ${colors.neut_5};
          margin-right: 8px;
          width: 14px;
        }
      }
    }
  }
`;

const UserCard = () => (
  <Card>
    <div className='top'>
      <h2>Zach Cossman</h2>
      <div className='statusLinks'>
        <a href='#' className='link_mail'>
          <MailEmpty />
          cMail (0)
        </a>
        <a href='#' className='card'>
          <Cart />
          Cart (0)
        </a>
      </div>
    </div>
    <div className='main'>
      <a href='#'>
        <Profile /> Manage Profile
      </a>
      <a href='#'>
        <Resume />
        Manage Resume
      </a>
      <a href='#'>
        <SizeCard />
        Manage Size Card
      </a>
      <a href='#'>
        <Media />
        Manage Media
      </a>
      <a href='#'>
        <Photo />
        Manage Photos
      </a>
      <a href='#'>
        <SlateShot />
        Manage SlateShots
      </a>
    </div>
    <div className='footer'>
      <div className='footerLinks'>
        <a href='#'>
          <Gear />
          View your account
        </a>
        <a href='#'>
          <Representation />
          Manage Representation
        </a>
        <a href='#'>
          <Contact />
          Manage contact info
        </a>
      </div>
      <div className='signOut'>
        <a href='#'>
          <SignOut />
          Sign out
        </a>
      </div>
    </div>
  </Card>
);

export default UserCard;
