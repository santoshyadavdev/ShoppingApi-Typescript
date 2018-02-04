import { OrderService } from './service/order-service';



export function orderApi(app, db) {
    let orderService = new OrderService(db);
    app.get('/api/order', (req, res) => {
        console.log('api request received');
        try {
            console.log(orderService.getOrders());
            orderService.getOrders().toArray((err, doc) => {
                console.log(doc);
                res.send(doc);
            })
        } 
        catch (e) {
            res.status(500).send(e);
        }
    });

    app.post('/api/order', (req, res) => {
        console.log(req.body);
        orderService.saveOrders(req.body).then((result) => {
            res.status(201).send(result);
        }).catch((err) => {
            res.status(500).send(err)
        });
    });
}