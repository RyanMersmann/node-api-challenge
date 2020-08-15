const express = require('express');
const ProjectsRouter = require('./routers/projectRouter');
const ActionsRouter = require('./routers/actionsRouter');
const logger = require("./middleware/logger")

//Create Server
const server = express();
server.use(express.json());

// Logger just for fun!
server.use(logger())

//Routers
server.use('/projects', ProjectsRouter);
server.use('/actions', ActionsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to my Sprint Challenge API, if you are seeing this, it works</h2>`);
});

module.exports = server;