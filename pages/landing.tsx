import type { NextPage } from 'next';
import { colors, font } from '../styles/variables';
import { Facebook, Instagram, Twitter, Apple } from '../styles/icons';
import styled from 'styled-components';

const FullWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 64px;
  width: 100%;
  .heroText {
    ${font(72, 900)};
    color: ${colors.prim_5};
    margin-bottom: 36px;
  }
`;

const LoginCard = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  display: flex;
  box-shadow: 0 4px 12px rgba(121, 130, 145, 0.4);
  height: 425px;
  margin-bottom: 48px;
  width: 800px;
`;

const Login = styled.div`
  position: relative;
  width: 50%;
  .formWrap {
    padding-left: 32px;
    h2 {
      ${font(24, 900, `${colors.neut_8}`)};
      margin: 64px 0 32px 0;
    }
    .input {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      input {
        ${font(16, 400, `${colors.neut_8}`)};
        background: ${colors.neut_1};
        border-radius: 8px;
        border: none;
        height: 52px;
        margin-bottom: 8px;
        padding-left: 24px;
        width: 300px;
        &::placeholder {
          color: rgba(79, 90, 109, 0.5);
        }
        &:focus {
          //TODO - Remove browser default border and add custom focus styling
        }
      }
      a {
        ${font(12, 400, `${colors.neut_6}`, 'italic')};
        margin-left: 24px;
      }
    }
  }
  button {
    ${font(18, 900, `${colors.white}`)}
    background: ${colors.prim_5};
    border-radius: 0 0 0 8px;
    border: none;
    bottom: 0;
    cursor: pointer;
    height: 71px;
    position: absolute;
    width: 100%;
  }
`;

const Info = styled.div`
  ${font(16, 400, `${colors.neut_1}`)};
  background: ${colors.neut_8};
  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  .top {
    display: flex;
    justify-content: space-between;
    margin: 32px 32px 0 32px;
    .extras {
      width: 50%;
      li {
        cursor: pointer;
        margin-bottom: 12px;
      }
    }
    .social {
      display: flex;
      flex-direction: column;
      .icons {
        display: flex;
        justify-content: space-around;
        margin-bottom: 36px;
        width: 100%;
        svg {
          width: 20px;
          height: 20px;
        }
        svg g {
          fill: ${colors.neut_1};
        }
        svg:hover {
          cursor: pointer;
        }
      }
      .download {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          ${font(12, 400)}
          margin-bottom: 8px;
        }
        button {
          ${font(14, 500, `${colors.neut_1}`)}
          background: transparent;
          border-radius: 8px;
          border: 1px solid ${colors.neut_1};
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          height: 43px;
          width: 122px;
          svg {
            height: 16px;
            margin-right: 8px;
            margin-top: -3px;
            width: 16px;
            g {
              fill: ${colors.neut_1};
            }
          }
        }
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    width: 60%;
    h4 {
      ${font(18, 800)};
      margin-bottom: 12px;
    }
    p {
      ${font(14, 500, '', 'italic')};
      cursor: pointer;
      margin-bottom: 12px;
    }
    ul {
      ${font(12, 400)};
      display: flex;
      margin-bottom: 24px;
      li {
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
`;

const Register = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 500px;
  .divider {
    height: 2px;
    width: 100%;
    background: ${colors.neut_2};
    position: absolute;
    top: 6px;
  }
  p {
    ${font(14, 400, `${colors.neut_4}`)}
    background-color: ${colors.neut_1};
    height: 10px;
    padding: 0 10px;
    z-index: 100;
    margin-bottom: 24px;
  }
  button {
    ${font(18, 900, `${colors.prim_5}`)}
    border: none;
    border: 2px solid ${colors.prim_5};
    border-radius: 8px;
    width: 500px;
    height: 70px;
    background: transparent;
    cursor: pointer;
  }
`;

const Landing: NextPage = () => {
  return (
    <FullWrap>
      <h1 className='heroText'>Actors Access</h1>
      <LoginCard>
        <Login>
          <div className='formWrap'>
            <h2>Member sign in</h2>
            <div className='input input__user'>
              <input type='text' name='username' placeholder='Username' />
              <a href='#'>Forgot your username?</a>
            </div>
            <div className='input input__pass'>
              <input type='password' name='password' placeholder='Password' />
              <a href='#'>Forgot your password?</a>
            </div>
          </div>
          <button>LOG IN</button>
        </Login>
        <Info>
          <div className='top'>
            <ul className='extras'>
              <li>Extras</li>
              <li>Casting Directors</li>
              <li>Talent Reps</li>
              <li>Get sides</li>
            </ul>
            <div className='social'>
              <div className='icons'>
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
              <div className='download'>
                <p>Get the Actors Access app</p>
                <button>
                  <Apple />
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <h4>Breakdown Services Ltd.</h4>
            <p>Preview Recent Postings!</p>
            <ul>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Register</li>
            </ul>
          </div>
        </Info>
      </LoginCard>

      <Register>
        <div className='divider' />
        <p>New to Actors Access?</p>
        <button>SIGN UP</button>
      </Register>
    </FullWrap>
  );
};

export default Landing;
