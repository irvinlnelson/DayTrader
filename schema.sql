DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

create table users (
  email varchar(35) not null,
  password varchar(18) not null,
  stock1 varchar(255),
  stock2 varchar(255),
  stock3 varchar(255),
  stock4 varchar(255)
)