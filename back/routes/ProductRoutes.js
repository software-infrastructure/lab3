const express = require('express');
const {
    ProductController,
    slugs,
} = require('../controllers/ProductController');

const router = express.Router();

slugs.forEach((slug) => {
    const {
        getAllProducts,
        createProduct,
        getProductById,
        updateProduct,
        deleteProduct,
    } = new ProductController(slug);

    router.route(`/${slug}`).get(getAllProducts).post(createProduct);
    router
        .route(`/${slug}/:id`)
        .get(getProductById)
        .put(updateProduct)
        .delete(deleteProduct);
});

module.exports = router;
