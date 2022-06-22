import { Router } from 'express';

import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
  getTodoById,
} from '../controller/Todo';

const router = Router();

router.post('/add-todo', addTodo);
router.get('/get-all', getTodos);
router.get('/get/todo/:id', getTodoById);
router.put('/edit-todo/:id', updateTodo);
router.delete('/delete-todo/:id', deleteTodo);

export default router;
