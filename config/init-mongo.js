main = db.getSiblingDB('main');
main.createCollection('products');

main.products.insertOne({ _id: 333, name: 'Tomato' });
