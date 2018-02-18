//const MongoClient = require('mongodb').MongoClient;

// import * as mongoDB from "mongodb";
import { Order } from "../model/order";

// const MongoClient = mongoDB.MongoClient;
// const url = 'mongodb://localhost:27017';

// const dbname = 'ShoppingApi';
// let db: any;

export class OrderDataAccess {

    constructor(private db: any) {

    }
   

    getOrders() {
        return this.db.collection('order').find({},{"sort":[['id','asc']], "limit":2,"skip":0});
    }

    getOrderById(id: number) {
        return this.db.collection('order').find({ id: id });
    }

    getOrderByName(name: string) {
        return this.db.collection('order').find({ customerName: name });
    }

    saveOrders(order: Order) {
        return this.db.collection('order').insertOne(order);
    }
}