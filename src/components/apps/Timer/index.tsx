import AppWindow from 'src/components/templates/AppWindow';

type Props = {
  id: string;
  isCollapsed: boolean;
  onCollapse: (id: string) => void;
  onClose: (id: string) => void;
  coordinates: { left: number; top: number };
};

const Timer = ({
  isCollapsed,
  onCollapse,
  id,
  onClose,
  coordinates,
}: Props) => (
  <AppWindow
    id={id}
    isCollapsed={isCollapsed}
    onCollapse={onCollapse}
    onClose={onClose}
    coordinates={coordinates}
  >
    <div>Cooming soon...</div>
  </AppWindow>
);

export default Timer;
