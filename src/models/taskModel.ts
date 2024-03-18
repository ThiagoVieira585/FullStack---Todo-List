import connection from './connection';
import { OkPacket } from 'mysql2';

interface Task {
  title: string;
  status: string;
}

const getAll = async () => {
  const [task] = await connection.execute('SELECT * FROM tasks');
  return task;
};
const createTask = async (task: Task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks(title,status, created_at) VALUES (?,?,?)';

  const [createdTask] = await connection.execute<OkPacket>(query, [
    title,
    'pendente',
    dateUTC,
  ]);

  return { insertId: createdTask.insertId };
};
const deleteTask = async (id: string) => {
  const removedTask = await connection.execute('DELETE FROM tasks WHERE id=?', [
    id,
  ]);
  return removedTask;
};
const updateTask = async (id: string, task: Task) => {
  const { title, status } = task;

  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const updatedTask = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

export default { getAll, createTask, deleteTask, updateTask };
