import type React from 'react';
import icons from './icons';
export type IconType = keyof typeof icons;

type Props = { name: IconType };

const Icon: React.FC<Props> = ({ name }) => {
  const IconSvg = icons[name];

  return (
    <span>
      <IconSvg />
    </span>
  );
};

export default Icon;
