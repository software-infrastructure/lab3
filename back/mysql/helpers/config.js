const config = {
    host: process.env.MYSQL_HOST ?? 'localhost',
    ...(process.env.MYSQL_HOST ? {} : { port: 2222 }),
    user: process.env.MYSQL_USER ?? 'root',
    password: process.env.MYSQL_PWD ?? 'rootpwd',
    database: 'main',
};

module.exports = config;
