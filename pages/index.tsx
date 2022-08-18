import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Actors Access</h1>
      <div className='card'>
        <div className='login'>
          <h2>Member sign in</h2>
          <div>
            <input type='text' name='username' placeholder='Username' />
            <a href='#'>Forgot your username?</a>
          </div>
          <div>
            <input type='password' name='password' placeholder='Password' />
            <a href='#'>Forgot your password?</a>
          </div>
          <button>LOG IN</button>
        </div>
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
      </div>

      <div className='divider'>--- new to actors access? ---</div>
      <button>SIGN UP</button>
    </div>
  );
};

export default Home;
