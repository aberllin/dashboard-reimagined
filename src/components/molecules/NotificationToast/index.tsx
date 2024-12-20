import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import {
  type NotificationState,
  NotificationTypes,
} from 'src/providers/NotificationProvider';

type Props = {
  notification: NotificationState;
  onClose: () => void;
};

const NotificationToast = ({ notification, onClose }: Props) => (
  <Background type={notification.type}>
    {notification.text}
    <CloseIcon onClick={onClose} />
  </Background>
);

const Background = styled.div<{ type: NotificationTypes }>`
  color: white;
  position: relative;
  left: 30px;
  bottom: -680px;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 20px;
  z-index: 100;

  background: ${props =>
    props.type === NotificationTypes.Error ? 'red' : 'green'};
  transition: bottom 0.2s ease-in-out;
`;

const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
`;

export default NotificationToast;
