import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CurrentDay = () => {
  const [day, setDay] = useState({ date: new Date() });

  const changeDay = () => {
    setInterval(() => {
      setDay({ date: new Date() });
    }, 1);
  };

  useEffect(() => {
    changeDay();
  }, []);

  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDay = days[day.date.getDay()];

  return <Day>{currentDay}</Day>;
};

const Day = styled.div`
  padding-right: 5px;
`;

export default CurrentDay;
