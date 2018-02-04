//const MongoClient = require('mongodb').MongoClient;

// import * as mongoDB from "mongodb";
import { Order } from "../model/order";

// const MongoClient = mongoDB.MongoClient;
// const url = 'mongodb://localhost:27017';

// const dbname = 'ShoppingApi';
// let db: any;

export class OrderDataAccess {

    constructor(private db: any) {
        // console.log(db);
    }
    // connect(){
    //     MongoClient.connect(url,function(err,client){
    //         console.log("Connected");
    //         return db = client.db(dbname);
    //     });
    // }

    getOrders() {
        // this.connect();
        return this.db.collection('order').find({});
    }

    saveOrders(order: Order) {
        //this.connect();
        return this.db.collection('order').insertOne(order);
    }
}