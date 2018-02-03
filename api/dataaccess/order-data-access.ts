//const MongoClient = require('mongodb').MongoClient;

import * as mongoDB from "mongodb";
import { Order } from "../model/order";

const MongoClient = mongoDB.MongoClient;
const url = 'mongodb://localhost:27017';

const dbname = 'ShoppingApi';
let db: any;

export class OrderDataAccess{

    connect(){
        MongoClient.connect(url,function(err,client){
            console.log("Connected");
            return db = client.db(dbname);
        });
    }

    getOrders(){
        this.connect();
        db.collection('orders').find().toArray(function  (err,doc){
            return doc;
        });
    }

    saveOrders(order:Order){
        this.connect();
        return db.collection('order').insertOne(order);
    }
}