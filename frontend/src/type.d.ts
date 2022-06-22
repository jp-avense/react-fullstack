interface Todos {
  id: string;
  name: string;
  description: string;
  status: boolean;
}

interface TodoProps {
  todo: Todos;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: Todos[];
  newTodo: Todos;
  todo?: Todos;
};
