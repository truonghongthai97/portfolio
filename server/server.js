/* eslint-disable no-undef */
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, "db.json"));

// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  //   res.jsonp({
  //     record: res.locals.data,
  //   });
};

// // In this example we simulate a server side error response
// router.render = (req, res) => {
//   res.status(500).jsonp({
//     error: "error message here",
//   });
// };

server.use(middlewares);
server.use((req, res, next) => {
  const isAuthorized = (req) => {
    return true;
  };

  if (isAuthorized(req)) {
    // add your authorization logic here
    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});
server.use("/api", router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
