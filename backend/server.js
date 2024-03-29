
const express = require('express');
const cors = require('cors');

const connectToDb = require('./config/connectToDb');
const projectLogController = require("./controllers/projectLogController");
const corsOptions = require('./config/corsOptions');

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

connectToDb();

app.get("/projectlog", projectLogController.fetchProjectLogs)

app.get("/projectlog/:id", projectLogController.fetchProjectLog)

app.post ("/projectlog", projectLogController.createProjectLog)

app.put("/projectlog/:id", projectLogController.updateProjectLog)

app.listen(3001);