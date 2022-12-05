const mongoProductService = require('../mongo/services/ProductService');
const mysqlProductService = require('../mysql/services/ProductService');

const services = {
    mongo: mongoProductService,
    mysql: mysqlProductService,
};

class ProductController {
    constructor(database) {
        this.service = services[database];
    }
    getAllProducts = async (req, res) => {
        try {
            const products = await this.service.getAllProducts();
            res.json({ data: products, status: 'success' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    createProduct = async (req, res) => {
        try {
            const product = await this.service.createProduct(req.body);
            res.json({ data: product, status: 'success' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    getProductById = async (req, res) => {
        try {
            const product = await this.service.getProductById(req.params.id);
            res.json({ data: product, status: 'success' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    updateProduct = async (req, res) => {
        try {
            const product = await this.service.updateProduct(
                req.params.id,
                req.body
            );
            res.json({ data: product, status: 'success' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    deleteProduct = async (req, res) => {
        try {
            const product = await this.service.deleteProduct(req.params.id);
            res.json({ data: product, status: 'success' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
}

module.exports = { ProductController, slugs: Object.keys(services) };
