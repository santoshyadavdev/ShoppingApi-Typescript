import { Order } from '../model/order'

import { OrderDataAccess } from '../dataaccess/order-data-access';

export class OrderService {
    orders: Order[] = [];
    private orderdataaccess;

    constructor(db: any) {
         this.orderdataaccess = new OrderDataAccess(db);
    }

    getOrders() {
        // this.orders.push(
        //     {id : 1, orderDate:new Date('12-Jan-2017'), customerName: 'Swapnil', qty:10},
        //     {id : 2, orderDate:new Date('12-Jan-2016'), customerName: 'amit', qty:10},
        //     {id : 3, orderDate:new Date('12-Jan-2015'), customerName: 'sumit', qty:10}
        // )
        // return this.orders;

        return this.orderdataaccess.getOrders();
    }

    saveOrders(order: Order) {
        return this.orderdataaccess.saveOrders(order);
        // this.orders.push(order);
    }

}