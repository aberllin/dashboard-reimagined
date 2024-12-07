import { useEffect, useState, createRef, type JSX } from 'react';
import styled, { css } from 'styled-components';
import { GiPlainCircle } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Resizer } from 'src/components/hooks/Resizer';
import { useDrag } from 'src/components/hooks/useDrag';
import { useWindows } from 'src/providers/WindowsProvider';
import OptionsBar from 'src/components/organisms/OptionsBar';
import type { AppOption } from 'src/constants/appsData';

type Props = {
  id: string;
  isCollapsed: boolean;
  children: JSX.Element;
  options?: Array<AppOption>;
  optionModal?: string | null;
  coordinates: { left: number; top: number };
  onCollapse: (id: string) => void;
  setOptionModal?: (title: string) => void;
  onClose: (id: string) => void;
};

const AppWindow = ({
  id,
  isCollapsed,
  onCollapse,
  onClose,
  children,
  options,
  setOptionModal,
  optionModal,
  coordinates,
}: Props) => {
  const { dragWindow } = useWindows();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const navRef = createRef<HTMLDivElement>();
  const drag = useDrag(navRef);

  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const handleFullScreen = () => {
    setFullScreen(prev => !prev);
  };

  const handleHideScreen = () => {
    onCollapse(id);
  };

  const onCloseWindow = () => {
    onClose(id);
  };

  const [isOptionBarOpen, setIsOptionBarOpen] = useState<boolean>(false);
  const currentOpenedOption =
    options && options.find(opt => opt.title === optionModal);

  return (
    <Container
      $coordinates={drag.coordinates ?? coordinates}
      $isFullScreen={fullScreen}
      $isScreenCollapsed={isCollapsed}
      ref={navRef}
      onClick={() => {
        dragWindow(
          id,
          drag.coordinates?.left ?? coordinates.left,
          drag.coordinates?.top ?? coordinates.top,
        );
      }}
    >
      <Resizer ref={navRef} />
      <AppCardNav
        onMouseDown={() => {
          drag.callback();
        }}
      >
        <NavButtons>
          <div
            onClick={e => {
              e.stopPropagation();
              onCloseWindow();
            }}
          >
            <CloseButton />
          </div>
          <div
            onClick={e => {
              e.stopPropagation();
              handleHideScreen();
            }}
          >
            <HideButton />
          </div>
          <div
            onClick={e => {
              e.stopPropagation();
              handleFullScreen();
            }}
          >
            <FullScreenButton />
          </div>
        </NavButtons>
        {options && (
          <>
            <div
              onClick={e => {
                e.stopPropagation();
                setIsOptionBarOpen(prev => !prev);
              }}
            >
              <MenuButton />
            </div>
            {isOptionBarOpen && (
              <OptionsBar
                setIsOptionBarOpen={setIsOptionBarOpen}
                setOptionModal={setOptionModal}
                options={options}
              />
            )}
            {currentOpenedOption && currentOpenedOption.component}
          </>
        )}
      </AppCardNav>
      <App>{children}</App>
    </Container>
  );
};

const MenuButton = styled(HiMenuAlt3)`
  color: ${({ theme }) => theme.colors.primary.base};
  font-size: 20px;
  cursor: pointer;
`;

const FullScreenButton = styled(GiPlainCircle)`
  color: #46cb17;
  font-size: 20px;
  padding-right: 6px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const HideButton = styled(GiPlainCircle)`
  color: #cba317;
  font-size: 20px;
  padding-right: 6px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const CloseButton = styled(GiPlainCircle)`
  color: #cb1717;
  font-size: 20px;
  padding-right: 6px;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AppCardNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: ${({ theme }) => theme.colors.primary.text};
`;
const App = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: auto;
`;

const Container = styled.div<{
  $isFullScreen: boolean;
  $isScreenCollapsed: boolean;
  $coordinates: { top: number; left: number };
}>(
  ({ $coordinates, $isFullScreen, $isScreenCollapsed, theme }) => css`
    position: fixed;
    overflow: hidden;

    box-shadow: ${theme.boxShadow.card};
    font-size: 35px;
    color: ${({ theme }) => theme.colors.primary.text};
    background-color: ${({ theme }) => theme.colors.primary.base};

    @media screen and (min-width: 480px) {
      ${$isScreenCollapsed
        ? css`
            opacity: 0;
            z-index: -1000;
          `
        : css`
            opacity: 1;
          `}

      ${$isFullScreen
        ? css`
            width: 100% !important;
            height: 100% !important;
            left: 0 !important;
            top: 0 !important;
          `
        : css`
            min-width: 600px;
            min-height: 400px;
            left: ${$coordinates.left}px;
            top: ${$coordinates.top}px;
            border-radius: 20px;
          `}
    }

    @media screen and (max-width: 480px) {
      width: 100% !important;
      height: 100% !important;
      left: 0 !important;
      top: 0 !important;
    }
  `,
);

export default AppWindow;
