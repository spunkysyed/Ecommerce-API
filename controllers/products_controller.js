import Product from '../models/product.js';
import Counter from '../models/counter.js';

// Function to show all the products
export const products = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                data: {
                    products
                }
            })
        }
    });
};

// Function to create a new product
export const create = (req, res) => {
    Counter.findByIdAndUpdate(
        { _id: 'productid' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true },
        (err, counter) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            const { name, quantity } = req.body;
            const newProduct = new Product({
                _id: counter.seq,
                name,
                quantity
            });

            newProduct.save((err, savedProduct) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).send({
                        data: {
                            product: {
                                id: savedProduct._id,
                                name: savedProduct.name,
                                quantity: savedProduct.quantity
                            }
                        }
                    });
                }
            });
        }
    );
};

// Function to delete a product using its ID
export const deleteProduct = async(req, res) => {
    const productId = req.params.productID;

    await Product.findByIdAndDelete(productId);

    // Retrieve the current counter document
    let counter = await Counter.findOne({ _id: 'productid' });
    let products=await Product.find({});
    counter.seq=products.length;
    await counter.save();
    res.status(200).send("product deleted");
};


// Function to update a product's quantity
export const updateQuantity = async (req, res) => {
    const productId = req.params.productID; // Extract product ID from URL params
    const number = parseInt(req.query.number); // Extract number from query params

    try {
        // Find the product by ID, update quantity, and save
        const product = await Product.findByIdAndUpdate(
            productId,
            { $inc: { quantity: number } }, // Increment or decrement quantity based on number
            { new: true } // Return the updated document
        );

        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.status(200).send({
            data: {
                product
            },
            message: 'Updated successfully'
        });

    } catch (err) {
        console.error(err);
        res.status(500).send(err.message || "Internal Server Error");
    }
};
