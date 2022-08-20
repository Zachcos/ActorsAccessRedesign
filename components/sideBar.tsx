import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Arrow, Cart, MailEmpty } from '../styles/icons';

const SideBarWrapper = styled.div`
  background-color: ${colors.neut_8};
  height: 100vh;
  width: 180px;
  position: fixed;
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <h1 className='heroText'>Actors Access</h1>
      <div className='statusLinks'>
        <div className='link_mail'>
          <MailEmpty /> cMail (0)
        </div>
        <div className='link_cart'>
          <Cart /> Cart (0)
        </div>
        <ul className='navLinks'>
          <li>home</li>
          <li>
            breakdowns <Arrow />
          </li>
          <li>
            my tools <Arrow />
          </li>
          <li>submissions</li>
          <li>
            auditions <Arrow />
          </li>
          <li>
            services <Arrow />
          </li>
          <li>
            contact us <Arrow />
          </li>
        </ul>
        <div className='buttons'>
          <button className='ecoCast'>Eco Cast Live</button>
          <button className='upgrade'>Upgrade to Plus</button>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
