import connection from './connection';
import { OkPacket } from 'mysql2';

interface Task {
 title: string;
}


const getAll = async () => {
  const [task] = await connection.execute('SELECT * FROM tasks');
  return task;
};
const createTask = async (task: Task) => {

  const {title} = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks(title,status, created_at) VALUES (?,?,?)';

  const [createdTask] = await connection.execute<OkPacket>(query,[title,'pendente',dateUTC]);

  return {insertId: createdTask.insertId};
};


export default {getAll,createTask};