const mongoose = require("mongoose");

const DB_URL =
//"mongodb://localhost:27017/online-shop";
"mongodb+srv://thanhtuan090398:Tuan09031998@cluster0-jodk9.mongodb.net/online-shop?retryWrites=true&w=majority";
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String
});

const Product = mongoose.model("product", productSchema);

exports.addNewProduct = data => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                let newProduct = new Product(data);
                return newProduct.save();
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                return Product.find({});
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.getProductsByCategory = category => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                return Product.find({ category: category });
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect(reject(err));
            });
    });
};

exports.getProductById = id => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                return Product.findById(id);
            })
            .then(product => {
                mongoose.disconnect();
                resolve(product);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.getFirstProduct = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                return Product.findOne({});
            })
            .then(product => {
                mongoose.disconnect();
                resolve(product);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};
