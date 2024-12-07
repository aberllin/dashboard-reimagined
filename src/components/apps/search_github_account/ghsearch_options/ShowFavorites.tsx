import styled from 'styled-components';
import { GHUserType } from '../types';
import Modal from 'src/components/templates/Modal';

const text = {
  noUsers: 'You don"t have any fav users',
};

type Props = {
  onClose: () => void;
};

export const ShowFavorites = ({ onClose }: Props) => {
  const favoriteUsers = localStorage.getItem('favorites');
  const parsedFavorites: Array<GHUserType> = favoriteUsers
    ? JSON.parse(favoriteUsers)
    : [];

  return (
    <Modal
      onClose={onClose}
      title="Your favorite users"
      width="500"
      height="700"
      top="5"
      left="30"
    >
      <div>
        {parsedFavorites.length > 0 ? (
          parsedFavorites.map(favUser => (
            <FavUserWrapper key={favUser.id}>
              <Image $background={favUser.avatar_url} />
              <LinktoUser href={`https://github.com/${favUser.login}`}>
                {favUser.login}
              </LinktoUser>
            </FavUserWrapper>
          ))
        ) : (
          <div style={{ color: 'red' }}>{text.noUsers}</div>
        )}
      </div>
    </Modal>
  );
};

const FavUserWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const Image = styled.div<{ $background: string }>`
  background: url(${props => props.$background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #faf4f4;
  width: 80px;
  height: 80px;
`;
const LinktoUser = styled.a`
  padding: 25px;
  color: #ffe227;
`;
