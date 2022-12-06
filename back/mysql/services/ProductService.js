const query = require('../helpers/query');

exports.getAllProducts = async () => {
    return await query('SELECT * FROM products');
};

exports.createProduct = async (product) => {
    const id = Math.random().toString(36).slice(2);
    await query(`INSERT INTO products VALUES ('${id}', '${product.name}')`);
    return `Created product with name ${product.name} and id ${id}`;
};
exports.getProductById = async (id) => {
    return await query(`SELECT * FROM products WHERE _id='${id}'`);
};

exports.updateProduct = async (id, product) => {
    const fieldsToUpdate = Object.keys(product).reduce((acc, cur) => {
        return `${acc} ${cur}='${product[cur]}'`;
    }, '');
    await query(`UPDATE products SET ${fieldsToUpdate} WHERE _id='${id}';`);
    return `Updated product with id ${id}, added new fields ${fieldsToUpdate}`;
};

exports.deleteProduct = async (id) => {
    await query(`DELETE FROM products WHERE _id='${id}';`);
    return `Deleted product with id ${id}`;
};
