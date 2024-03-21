const mysql = require("mysql");
const syncMysql = require("sync-mysql");
const CONFIG = require("./config");

//асинхронный вывод
function t01() {
  const connection = mysql.createConnection(CONFIG);
  connection.connect();
  let query = "SELECT * FROM `cars`";
  connection.query(query, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
  connection.end();
}
//синхронный вывод
function t02() {
  const connection = new syncMysql(CONFIG);
  let query = "SELECT * FROM `cars` WHERE id = 1";
  const result = connection.query(query);
  console.log(result);
}
t02();
