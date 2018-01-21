import {OrderService} from './service/order-service';


let orderService =new OrderService();
export function orderApi(app) {
    app.get('/api/order', (req,res) => {
        res.send(orderService.getOrders());
    });

    app.post('/api/order', (req, res) => {
        res.send('post method from order API')
    });
}