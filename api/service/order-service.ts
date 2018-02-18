import { Order } from '../model/order'

import { OrderDataAccess } from '../dataaccess/order-data-access';

export class OrderService {
    orders: Order[] = [];
    private orderdataaccess;

    constructor(db: any) {
         this.orderdataaccess = new OrderDataAccess(db);
    }

    getOrders() {
        return this.orderdataaccess.getOrders();
    }

    getOrderById(id:number){
        return this.orderdataaccess.getOrderById(id);
    }

    getOrderByName(name :string){
        return this.orderdataaccess.getOrderByName(name);

    }

    saveOrders(order: Order) {
        return this.orderdataaccess.saveOrders(order);
    }

}