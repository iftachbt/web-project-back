import { runQuery } from "../../DB/DB.js";

export const insert = (user) => {
  const query = `INSERT INTO web_project_db.user(email,fName,password,id) values (?,?,?,?)`;
  return runQuery(query, [...user], { codeInstedOfError: true });
};
export const getUserByEmail = (email) => {
  const query = `SELECT fName,email,id FROM web_project_db.user WHERE email = ?`;
  return runQuery(query, [email], { codeInstedOfError: true });
};
export const getPassByEmail = (email) => {
  const query = `SELECT password FROM web_project_db.user WHERE email = ?`;
  return runQuery(query, [email], { codeInstedOfError: true });
};
export const getUserById = (userId) => {
  const query = `SELECT fName,email,id FROM web_project_db.user WHERE id = ?`;
  return runQuery(query, [userId], { codeInstedOfError: true });
};
