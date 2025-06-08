// userModel.js
import db from '../config/db.js';

export const findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

export const createUser = async (email, hashedPassword, firstName, lastName) => {
  const [result] = await db.execute(
    'INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)',
    [email, hashedPassword, firstName, lastName]
  );
  return result.insertId;
};
