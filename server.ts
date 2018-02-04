import * as express from "express";
import * as bodyparser from "body-parser";
var app = express();

import * as mongoDB from "mongodb";
const MongoClient = mongoDB.MongoClient;
const url = 'mongodb://localhost:27017';

const dbname = 'ShoppingApi';
let db: any;

import { employeeApi, orderApi } from './api';

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, newToken");
  next();
});



MongoClient.connect(url, function (err, client) {
  // console.log("Connected");
  db = client.db(dbname);
  employeeApi(app, db);
  orderApi(app, db);
});



app.listen(3000, () => console.log('App running on 3000 port'));