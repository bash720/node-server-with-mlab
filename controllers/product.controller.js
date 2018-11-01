const Product = require('../models/product.model');;


exports.test = (req, res) =>{
    res.send('Greetings!');
};

exports.product_create = (req, res) =>{
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save((err) =>{
        if( err) {
          return  res.status(500).send({error: err});
        }
        res.status(201).send({message: 'Product Created successfully'});
    });
};

exports.product_update = (req, res) =>{
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) =>{
        if( err) {
          return  res.status(500).send({error: err});
        }
        res.status(200).send({message: 'Product Updated successfully'});
    });
};

exports.product_details = (req, res) =>{
    Product.findById(req.params.id, (err, product) =>{
        if( err) {
          return  res.status(500).send({error: err});
        }
        res.status(200).send(product);
    });
};

exports.product_delete = ( req, res) => {
    Product.findByIdAndDelete(req.params.id, (err) =>{
        if(err){
            return res.send({Error: err});
        }

        res.send({message: 'Deleted successfully!'});
    })
};

exports.products  = ( req, res ) => {
    Product.find((err, products) => {
        if(err){
            res.send('No record Found');
        }
        res.send(products);
    });
};
