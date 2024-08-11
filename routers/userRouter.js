const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {

    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })

});

//getall
//getbyid
//update
//delete

router.get('/getall', (req, res) => {
    res.send('Response from user getall');
});
router.get('/getbyid/:id', (req, res) => {
    res.send('Response from user getbyid');
    console.log(req.params.id);
    
});
router.get('/update', (req, res) => {
    res.send('Response from user update');
});
router.get('/delete', (req, res) => {
    res.send('Response from user delete');
});

module.exports = router;