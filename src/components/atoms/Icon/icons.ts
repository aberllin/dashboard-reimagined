import {
  AiFillApple,
  AiFillStar,
  AiOutlineClose,
  AiOutlineStar,
} from 'react-icons/ai';
import { BiCircle } from 'react-icons/bi';
import { FiPlus, FiTrash } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoImageOutline } from 'react-icons/io5';
import { RiSendPlaneFill } from 'react-icons/ri';

const icons = {
  apple: AiFillApple,
  'outline-star': AiOutlineStar,
  'filled-star': AiFillStar,
  send: RiSendPlaneFill,
  trash: FiTrash,
  circle: BiCircle,
  'outline-close': AiOutlineClose,
  'dots-horizontal': HiDotsHorizontal,
  close: IoMdClose,
  image: IoImageOutline,
  plus: FiPlus,
};

export default icons;
