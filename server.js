const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("cities.json");
const middlewares = jsonServer.defaults();
// s
server.use(middlewares);
server.use("/api", router);
server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running");
});
