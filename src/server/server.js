const port = 3003

const express = require('express')
const app = express()
const database = require('./database')

app.use(express.urlencoded())
/**
 *  if its not using express over 4.16.0, included, the suggestion is 
 *  use the dependency body-parser and the method urlencoded() aswell
 *  */


app.get('/products', (req, res, next) => {
    const response = database.getProducts();
    res.send(response)
})

app.get('/product/:id', (req, res, next) => {
    const response = database.getProduct(req.params.id);
    res.send(response)
})

app.post('/product', (req, res, next) => {
    const product = database.saveProduct(
        {
            name: req.body.name,
            price: req.body.price
        }
    )
    res.send(product)
})

app.put('/product', (req, res, next) => {
    const product = database.saveProduct(
        {
            id:req.body.id,
            name: req.body.name,
            price: req.body.price
        }
    )
    res.send(product)
})

app.delete('/product/:id', (req, res, next) => {
    const response = database.deleteProduct(req.params.id);
    res.send(response)
})


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})