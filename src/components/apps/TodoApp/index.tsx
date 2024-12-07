import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppWindow from 'src/components/templates/AppWindow';
import type { AppOption } from 'src/constants/appsData';
import type { Todo as TodoType } from './components/Form';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ShareOption from './components/ShareOption';

type Props = {
  id: string;
  isCollapsed: boolean;
  onCollapse: (id: string) => void;
  onClose: (id: string) => void;
  coordinates: { left: number; top: number };
};

export const ToDoApp = ({
  isCollapsed,
  onCollapse,
  id,
  onClose,
  coordinates,
}: Props) => {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [optionModal, setOptionModal] = useState<null | string>(null);

  useEffect(() => {
    const inStorage = localStorage.getItem('todos');
    const initialValue = inStorage ? JSON.parse(inStorage) : [];
    setTodos(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const options: Array<AppOption> = [
    {
      title: 'Share',
      component: <ShareOption onClose={() => setOptionModal(null)} />,
    },
    {
      title: 'Clean Todo List',
      callback: () => {
        setTodos([]);
      },
    },
  ];

  return (
    <AppWindow
      id={id}
      isCollapsed={isCollapsed}
      onCollapse={onCollapse}
      onClose={onClose}
      options={options}
      optionModal={optionModal}
      setOptionModal={setOptionModal}
      coordinates={coordinates}
    >
      <AppWrapper>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </AppWrapper>
    </AppWindow>
  );
};

const AppWrapper = styled.div`
  padding: 6% 0 0;
  margin: auto;
  width: 500px;

  @media screen and (max-width: 820px) {
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export default ToDoApp;
