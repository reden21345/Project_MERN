const mongoose = require('mongoose')


const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Coffee name'],
        trim: true,
        maxLength: [100, 'Coffee name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter Coffee price'],
        maxLength: [5, 'Coffee name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter Coffee description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this Coffee'],
        enum: {
            values: [
                'Americano',
                'Black Coffee',
                'Cappuccino',
                'Espresso',
                'Latte',
                'Macchiato',
                "Mocha",
                'Cold Brew',
                'Frappuccino',
                'Iced Coffee',
                'Affogato',
                'Mazagran'
            ],
            message: 'Please select correct category for Coffee'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter Coffee seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter coffee stock'],
        maxLength: [5, 'coffee name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            // user: {
            //     type: mongoose.Schema.ObjectId,
            //     ref: 'User',
            //     required: true
            // },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('coffee', coffeeSchema);
