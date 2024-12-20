import React from 'react';
import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';

export type Todo = {
  text: string;
  id: number;
  complete: boolean;
};

type Props = {
  inputText: string;
  setInputText: (value: string) => void;
  todos: Array<Todo>;
  setTodos: (value: Array<Todo>) => void;
};

const Form = ({ inputText, setInputText, todos, setTodos }: Props) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputText && e.target.value === ' ') {
      return false;
    } else {
      setInputText(e.target.value);
    }
  };

  const submitTodoHandler = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    if (inputText === '') {
      return '';
    } else {
      setTodos([
        ...todos,
        { text: inputText, id: Date.now(), complete: false },
      ]);
    }
    setInputText('');
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitTodoHandler(e);
    }
  };
  return (
    <FormWrapper>
      <StyledInput
        value={inputText}
        type="text"
        placeholder="Enter your note here..."
        autoFocus
        onChange={inputTextHandler}
        onKeyPress={keyPressHandler}
      />
      <SubmitButton onClick={submitTodoHandler} type="submit">
        <AddIcon />
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const StyledInput = styled.input`
  outline: 0;
  background: #c4c4c4;
  width: 80%;
  border: 0;
  height: 52px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
  border-radius: 20px 0 0 20px;
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.text};
  color: ${({ theme }) => theme.colors.primary.base};
  cursor: pointer;
  display: flex;
  height: 52px;
  justify-content: center;
  align-items: center;
  width: 20%;
  outline: 0;
  border: 0;
  border-radius: 0 20px 20px 0;
  box-sizing: border-box;

  &:hover {
    opacity: 0.5;
  }
`;

const AddIcon = styled(FiPlus)`
  font-size: 25px;
`;
export default Form;
