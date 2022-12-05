CREATE DATABASE main;
USE main;

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'rootpwd';

CREATE TABLE Products (
    id varchar(255),
    name varchar(255)
);

INSERT INTO Products VALUES (333, 'Tomato');