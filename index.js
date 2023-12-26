import express from 'express';
import {variable, config, connect} from "./src/configuration/index.js";
import routes from "./routes.js";
import Table from 'ascii-table';
const table = new Table('App Configuration');

const app = express();

const COLUMNS_NAME = ['Status', 'Message'];
table.setHeading(...COLUMNS_NAME);
table.setHeading(...COLUMNS_NAME);

const resourceConfigStatus = config(app);
const dbConnectStatus = await connect();

table.addRow(resourceConfigStatus.status, resourceConfigStatus.message);
table.addRow(dbConnectStatus.status, dbConnectStatus.message);
// table.addRow(passwordConfigStatus.status, passwordConfigStatus.message);
routes(app);
app.listen(variable.PORT, () => {
    console.log(table.toString());
    console.log(`Server is listening on port ${variable.URL}:${variable.PORT}`);
});