import styled from 'styled-components';
import { colors, font } from '../styles/variables';
import { Warning, Info } from '../styles/icons';

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(121, 130, 145, 0.4);
  display: flex;
  height: 100%;
  min-width: 466px;
  width: 466px;
  .sidebar {
    background: ${colors.neut_8};
    border-radius: 8px 0 0 8px;
    width: 64px;
    .iconContainer {
      display: flex;
      justify-content: center;
      width: 64px;
    }
    svg {
      fill: ${colors.dang_4};
      margin-top: 32px;
      width: 16px;
    }
  }
  .main {
    box-sizing: border-box;
    padding: 32px 24px 32px 24px;
  }
  &.danger {
    .sidebar {
      border-right: 6px solid ${colors.dang_5};
      svg {
        fill: ${colors.dang_5};
      }
    }
  }
  &.warn {
    .sidebar {
      border-right: 6px solid ${colors.warn_6};
      svg {
        fill: ${colors.warn_6};
      }
    }
  }
  &.success {
    .sidebar {
      border-right: 6px solid ${colors.succ_4};
      svg {
        fill: ${colors.succ_4};
      }
    }
  }
`;

interface Props extends React.PropsWithChildren {
  type: string;
}

const AlertCard = ({ type, children }: Props) => (
  <Card className={type}>
    <div className='sidebar'>
      <div className='iconContainer'>
        {type === 'danger' ? <Warning /> : <Info />}
      </div>
    </div>
    <div className='main'>{children}</div>
  </Card>
);

export default AlertCard;
