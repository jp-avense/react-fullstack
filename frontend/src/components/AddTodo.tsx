import React, { useState } from 'react';

type Props = {
  saveTodo: (e: React.FormEvent, formData: Todos | any) => void;
};

function AddTodo({ saveTodo }: Props) {
  //   const { saveTodo } = props;
  const [formData, setFormData] = useState<Todos | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={e => saveTodo(e, formData)}>
      <div className="flex justify-center mt-4 gap-4 items-center">
        <div>
          <label htmlFor="name">
            {' '}
            <span className="text-gray-900 mr-4">Name</span>
            <input
              onChange={handleForm}
              type="text"
              id="name"
              className="border-2 border-gray-800 rounded-md text-gray-900 p-1"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            <span className="text-gray-900 mr-4">Description</span>
            <input
              onChange={handleForm}
              type="text"
              id="description"
              className="border-2 border-gray-800 rounded-md text-gray-900 p-1"
            />
          </label>
        </div>
        <button
          className="bg-gray-700 px-3 py-2 rounded-lg text-gray-50 font-bold hover:bg-gray-800 transition duration-300"
          type="submit"
          disabled={formData === undefined}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
