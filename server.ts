import * as express from "express";
var app = express();

import { employeeApi,orderApi } from './api';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, newToken");
    next();
  });
 
employeeApi(app);
orderApi(app);

app.listen(3000, () => console.log('App running on 3000 port'));