db.createUser({
    user: 'someuser',
    pwd: 'somepwd',
    roles: [
        {
            role: 'readWrite',
            db: 'main',
        },
    ],
});

db.createCollection('products');
