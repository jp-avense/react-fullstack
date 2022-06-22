import React from 'react';

type Props = TodoProps & {
  updateTodo: (todo: Todos) => void;
  deleteTodo: (id: string) => void;
};

function Todo({ todo, updateTodo, deleteTodo }: Props) {
  const checkTodo: string = todo.status ? `line-through` : '';
  return (
    <div className="flex justify-between items-center text-gray-900 bg-gray-100 px-2 py-1 my-2">
      <div className="flex flex-col">
        <h1 className={checkTodo}>Name {todo.name}</h1>
        <span className={checkTodo}>Description {todo.description}</span>
      </div>
      <div className="space-x-4">
        <button
          type="submit"
          onClick={() => updateTodo(todo)}
          className={
            todo.status
              ? `hide-button`
              : 'bg-green-500 px-3 py-2 rounded-md text-gray-50 font-bold hover:bg-green-600 transition duration-300'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <button
          type="submit"
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 px-3 py-2 rounded-md text-gray-50 font-bold hover:bg-red-600 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Todo;
