import "dotenv/config";
import { runQuery } from "./DB/DB.js";
export const insert = () => {
  const query = `select * from user`;
  // const query = `INSERT INTO ${process.env.DB_NAME}.user(id,fName,password,email) values (?,?,?,?)`;
  return runQuery(query, [1, "asaf", "secretcode", "asaf@gmail.com"], { codeInstedOfError: true });
};
insert();
