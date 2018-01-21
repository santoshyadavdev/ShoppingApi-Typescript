import {Order}from '../model/order'
export class OrderService{
    orders: Order[]=[];
    constructor(){

    }

    getOrders(){
        this.orders.push(
            {id : 1, orderDate:new Date('12-Jan-2017'), customerName: 'Swapnil', qty:10},
            {id : 2, orderDate:new Date('12-Jan-2016'), customerName: 'amit', qty:10},
            {id : 3, orderDate:new Date('12-Jan-2015'), customerName: 'sumit', qty:10}
        )
        return this.orders;
    }
}