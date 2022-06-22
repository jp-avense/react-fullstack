import axios, { AxiosResponse } from 'axios';

const baseUrl = 'http://localhost:8080';

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/todos/get-all`
    );
    // console.log(todos);
    return todos;
  } catch (error) {
    // console.log(error);
    throw new Error();
  }
};

export const addTodo = async (
  formData: Todos
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<Todos, 'id'> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/todos/add-todo`,
      todo
    );
    return saveTodo;
  } catch (error) {
    throw new Error();
  }
};

export const updateTodo = async (
  todo: Todos
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<Todos, 'status'> = {
      status: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/todos/edit-todo/${todo.id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw new Error();
  }
};

export const deleteTodo = async (
  id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/todos/delete-todo/${id}`
    );
    return deletedTodo;
  } catch (error) {
    throw new Error();
  }
};
