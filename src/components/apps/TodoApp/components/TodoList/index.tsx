import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';
import { Todo as TodoType } from '../Form';

type Props = {
  todos: Array<TodoType>;
  setTodos: (value: Array<TodoType>) => void;
};

const TodoList = ({ todos, setTodos }: Props) => {
  const refs = todos.map(() => React.createRef<HTMLInputElement>());

  const changeFocus = (index: number) => {
    const isNotLastInput = index < todos.length - 1;

    if (isNotLastInput) {
      if (refs[index + 1]) {
        refs[index + 1].current!.focus();
      }
    }
  };

  const onEnterPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Enter') {
      changeFocus(index);
    }
  };

  return (
    <TodoListWrapper>
      <StyledUl>
        {todos.map((todo, index) => (
          <TodoItem
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
            ref={refs[index]}
            onKeyPress={e => onEnterPress(e, index)}
          />
        ))}
      </StyledUl>
    </TodoListWrapper>
  );
};

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const TodoListWrapper = styled.div`
  margin: 25px 0;
  max-height: 300px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }
  ::-webkit-scrollbar-thumb {
    background: #1ccbb1;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1ccbb1;
  }
`;

export default TodoList;
