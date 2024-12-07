import { useState, useEffect } from 'react';
import styled from 'styled-components';
import background_img from 'src/images/background_img.jpeg';
import { AiFillApple } from 'react-icons/ai';
import { useWindows } from 'src/providers/WindowsProvider';
import CurrentDay from 'src/components/atoms/CurrentDay';
import CurrentTime from 'src/components/atoms/CurrentTime';
import AppCard from 'src/components/molecules/AppCard';
import DashboardMenu from 'src/components/organisms/DashboardMenu';
import { appDataIds, appDataMap } from 'src/constants/appsData';
import ToggleTheme from 'src/components/atoms/ToggleTheme';

type DashboardProps = {
  theme: string;
  changeTheme: () => void;
};

const Dashboard = ({ changeTheme, theme }: DashboardProps) => {
  const [background, setBackground] = useState<string>(background_img);
  const { onCloseWindow, setWindows, windows, collapseWindow } = useWindows();

  useEffect(() => {
    const inStorage = localStorage.getItem('background');
    const initialValue = inStorage ? inStorage : background_img;
    setBackground(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('background', background);
  }, [background]);

  const openWindow = (id: string) => {
    if (windows.find(window => window.id === id)) {
      const newOpenedWindows = windows.map(window =>
        window.id === id ? { ...window, isCollapsed: false } : { ...window },
      );

      setWindows(newOpenedWindows);
    } else {
      setWindows(prevState => [
        ...prevState.map(window => ({ ...window })),
        {
          id,
          isCollapsed: false,
          coordinates: {
            left: 150 + windows.length * 20,
            top: 100 + windows.length * 20,
          },
        },
      ]);
    }
  };

  return (
    <Container $background={background}>
      <Header>
        <Title>
          <AiFillApple /> Apps Dashboard
        </Title>
        <Date>
          <CurrentDay />
          <CurrentTime />
        </Date>
      </Header>
      <AppCardsWrapper>
        {appDataIds.map((id: string) => {
          const app = appDataMap[id];
          return (
            <div key={id} onClick={() => openWindow(id)}>
              <AppCard title={app.title} image={app.image} />
            </div>
          );
        })}
      </AppCardsWrapper>
      <DashboardMenu setBackground={setBackground} />
      <ToggleTheme onClick={changeTheme} theme={theme} />
      {windows &&
        windows.map(({ id, isCollapsed, coordinates }) => {
          const app = appDataMap[id];
          if (app.app) {
            return app.app(
              isCollapsed,
              onCloseWindow,
              collapseWindow,
              id,
              coordinates,
            );
          }
          return null;
        })}
    </Container>
  );
};

const Container = styled.div<{ $background: string }>`
  height: 100%;
  position: fixed;
  width: 100%;
  background: url(${props => props.$background}) no-repeat center fixed;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  padding: 0 15px;
`;

const Date = styled.div`
  display: flex;
  font-size: 18px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
`;

const AppCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.16);
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 95px;
  border-radius: 20px;
  position: absolute;
  bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  @media screen and (max-width: 834px) {
    max-width: 450px;
    max-height: 70px;
  }

  @media screen and (max-width: 480px) {
    max-width: 450px;
    max-height: 70px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-flow: wrap;
    top: 40px;
    background: none;
    width: 100%;
  }
`;

export default Dashboard;
