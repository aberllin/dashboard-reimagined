import catSentMessage from 'src/images/catSentMessage.gif';
import styled from 'styled-components';

const FormSuccess = () => (
  <div>
    <Image src={catSentMessage} alt="cat sent message" />
  </div>
);

const Image = styled.img`
  height: 170px;
  width: 300px;
`;

export default FormSuccess;
