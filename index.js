const express = require("express");
const router = requier("./src/routes");
const app = express();

app.use(express.json());
app.use(router);

app.listen(8080, () => console.log("server listening on port 8080"));

// const knex = require("knex")({
//   client: "mysql",
//   connection: {
//     host: "127.0.0.1",
//     port: 3306,
//     user: "abo",
//     password: "abo",
//     database: "movie_db",
//   },
// });
