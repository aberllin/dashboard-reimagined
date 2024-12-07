import { useState, useEffect } from 'react';
import axios from 'axios';
import { GHUser } from './GHUser';
import { GHUserType } from './types';
import styled from 'styled-components';

type Props = {
  searchInput: string;
};

export const GHDataFetching = ({ searchInput }: Props) => {
  const [user, setUser] = useState<GHUserType | null>(null);
  const [errors, setErrors] = useState('');

  const { REACT_APP_TOKEN } = process.env;

  useEffect(() => {
    if (searchInput) {
      axios
        .get(`https://api.github.com/users/${searchInput}`, {
          headers: {
            Authorization: `token ${REACT_APP_TOKEN}`,
          },
        })
        .then(res => {
          setErrors('');
          setUser(res.data);
        })
        .catch(err => setErrors(err.message));
    } else {
      setUser(null);
    }
  }, [REACT_APP_TOKEN, searchInput]);

  return (
    <Div>
      <GHUser user={user} searchInput={searchInput} errors={errors} />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  max-width: 80%;
`;
