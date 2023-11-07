const Coffee = require('../models/coffee')
const APIFeatures = require('../utils/apiFeatures');

//create new coffee
exports.newCoffee = async (req, res, next) => {
   
    // req.body.user = req.user.id;
    const coffee = await Coffee.create(req.body);
    res.status(201).json({
        success: true,
        coffee
    })
}
exports.getCoffee = async (req, res, next) => {
    // const coffees = await coffee.find();
    const resPerPage = 4;
    const coffeesCount = await Coffee.countDocuments();
    const apiFeatures = new APIFeatures(Coffee.find(), req.query).search();
    apiFeatures.pagination(resPerPage);
    const coffees = await apiFeatures.query;
    if (!coffees){
        return res.status(404).json({
            success:false,
            message: 'No coffees'
        })
    }
    res.status(200).json({
        success: true,
        count: coffees.length,
        coffees,
        coffeesCount
    })
}


// exports.getCoffee = async (req,res,next) => {
   
//  const resPerPage = 4;
//  const coffeesCount = await coffee.countDocuments();
//  const apiFeatures = new APIFeatures(coffee.find(),req.query).search()
//  // .filter();


//  // const coffees = await coffee.find();
//  apiFeatures.pagination(resPerPage);
//  const coffees = await apiFeatures.query;
//  res.status(200).json({
//      success: true,
//      count: coffees.length,
//      coffeesCount,
//      coffees
//  })
// }


exports.getSingleCoffee = async (req, res, next) => {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) {
        return res.status(404).json({
            success: false,
            message: 'Coffee not found'
        })
    }
    res.status(200).json({
        success: true,
        coffee
    })
}


exports.updateCoffee = async (req, res, next) => {
    let coffee = await Coffee.findById(req.params.id);
    console.log(req.body)
    if (!coffee) {
        return res.status(404).json({
            success: false,
            message: 'Coffee not found'
        })
    }
    coffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    if (!coffee) {
        return res.status(404).json({
            success: false,
            message: 'coffee not updated'
        })
    }
    res.status(200).json({
        success: true,
        coffee
    })
}


exports.deleteCoffee = async (req, res, next) => {
    const coffee = await Coffee.findByIdAndDelete(req.params.id);
    if (!coffee) {
        return res.status(404).json({
            success: false,
            message: 'Coffee not found'
        })
    }
   
    res.status(200).json({
        success: true,
        message: 'Coffee deleted'
    })
}
