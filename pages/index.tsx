import type { NextPage } from 'next';
import { colors, font } from '../styles/variables';
import styled from 'styled-components';

const FullWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 96px;
  width: 100%;
`;

const HeroText = styled.h1`
  ${font(72, 900)};
  color: ${colors.prim_5};
  margin-bottom: 36px;
`;

const LoginCard = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  display: flex;
  height: 500px;
  width: 800px;
`;

const Login = styled.div`
  padding-left: 32px;
  width: 50%;
  h2 {
    ${font(24, 900, `${colors.neut_8}`)};
    margin: 92px 0 32px 0;
  }
  .input {
    display: flex;
    flex-direction: column;
    input {
      ${font(16, 400)};
      background: ${colors.neut_1};
      border: none;
      border-radius: 8px;
      height: 52px;
      width: 336px;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <FullWrap>
      <HeroText>Actors Access</HeroText>
      <LoginCard>
        <Login>
          <h2>Member sign in</h2>
          <div className='input input__user'>
            <input type='text' name='username' placeholder='Username' />
            <a href='#'>Forgot your username?</a>
          </div>
          <div className='input input__pass'>
            <input type='password' name='password' placeholder='Password' />
            <a href='#'>Forgot your password?</a>
          </div>
          <button>LOG IN</button>
        </Login>
        <div className='info'>
          <div className='top'>
            <div className='extras'>
              <ul>
                <li>Extras</li>
                <li>Casting Directors</li>
                <li>Talent Reps</li>
                <li>Get sides</li>
              </ul>
            </div>
            <div className='social'>
              <div className='icons'>
                <span>F</span>
                <span>I</span>
                <span>T</span>
              </div>
              <div className='download'>
                <p>Get the Actors Access app</p>
                <button>download</button>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <h4>Breakdown Services Ltd.</h4>
            <p>Preview Recent Postings</p>
            <ul>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </LoginCard>

      <div className='divider'>--- new to actors access? ---</div>
      <button>SIGN UP</button>
    </FullWrap>
  );
};

export default Home;
