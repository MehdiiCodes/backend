const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {

    console.log();
    
    res.send('Response from user add');

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