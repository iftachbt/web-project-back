import "dotenv/config";
import mysql from "mysql";
import session from "express-session";
import mysqlSession from "express-mysql-session";
import { InternalServerError } from "../error_handling/error.class.js";

const dbConfig = {
  host: "54.162.25.97",
  user: "admin",
  password: "mysqlhp,j13531",
  database: "web_project_db",
};
console.log("dbConfig", dbConfig);

const con = null;
const getCon = () => {
  return con ? con : mysql.createConnection(dbConfig);
};

export const runQuery = (query, values, op) => {
  console.log("query", query);
  if (op?.log) console.log(query, values);
  return new Promise((resolve) => {
    const connection = getCon();
    connection.connect(function (err) {
      if (err) throw new InternalServerError(err.code);
      connection.query(query, values, function (err, result) {
        connection.end();
        let res = result;
        console.log("????????????????res???????????", res);
        if (err) {
          if (op?.codeInstedOfError) res = err.code;
          else throw new InternalServerError(err.code);
          console.log("err", err.code);
        }
        resolve(res);
      });
    });
  });
};

const MySQLStore = mysqlSession(session);

export const sessionStore = new MySQLStore(dbConfig);
