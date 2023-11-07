

const express = require('express');
const router = express.Router();

const {newCoffee, getCoffee, getSingleCoffee, updateCoffee, deleteCoffee} = require('../controllers/coffeeController');


router.post('/coffee/new', newCoffee);
router.get('/coffees', getCoffee);
router.get('/coffee/:id', getSingleCoffee);
router.route('/admin/coffee/:id').put(updateCoffee).delete(deleteCoffee);


module.exports = router;