import { join } from 'path';
import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync(join(__dirname, '/database.json'));
const DB = lowdb(adapter);

DB.defaults({ users: {} }).write();

export default DB;
