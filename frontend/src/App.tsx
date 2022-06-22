import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { getTodos, addTodo, updateTodo, deleteTodo } from './API';

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const fetchTodos = () => {
    getTodos()
      .then(({ data: { data } }: Todos[] | any) => setTodos(data))
      .catch((err: Error) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const handleSaveTodo = (e: React.FormEvent, formData: Todos): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        // console.log(data.todos);
        if (status !== 201) {
          throw new Error('Error! Todo not saved');
        }
        setTodos(data.todos);
      })
      .catch(err => console.log(err));
  };

  const handleUpdateTodo = (todo: Todos): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated');
        }
        setTodos(data.todos);
      })
      .catch(err => console.log(err));
  };

  const handleDeleteTodo = (id: string): void => {
    deleteTodo(id)
      .then(({ status, data }) => {
        // console.log(data);
        if (status !== 200) {
          throw new Error('Error! Todo not deleted');
        }
        // console.log(data);
        setTodos(data.todos);
      })
      .catch(err => console.log(err));
  };

  return (
    <main className="App">
      <h1 className="text-6xl font-bold">My Todos</h1>
      <div className="bg-white px-3 py-2 mt-4 rounded-lg">
        <div>
          <AddTodo saveTodo={handleSaveTodo} />
        </div>
        <div className="bg-white w-full py-2 mb-10 w-full mt-4">
          {todos &&
            todos.length > 0 &&
            todos.map((todo: Todos) => (
              <TodoItem
                key={todo.id}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
                todo={todo}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default App;
