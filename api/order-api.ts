import { OrderService } from './service/order-service';


let orderService = new OrderService();
export function orderApi(app) {
    app.get('/api/order', (req, res) => {
        try {
            res.send(orderService.getOrders());
        }
        catch (e) {
            res.status(500).send(e);
        }
    });

    app.post('/api/order', (req, res) => {
        console.log(req.body);
        orderService.saveOrders(req.body).then((result) => {
            res.status(201).send(result);
        }).catch((err)=> {
            res.status(500).send(err)
        }); 
        res.status(201).send(req.body)
    });
}