DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE Users (
    id SERIAL PRiMARY KEY NOT NULL,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(255) NOT NULL 
);

DROP TABLE IF EXISTS Movies_list CASCADE;
CREATE TABLE Movies(
    movie_id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(100) NOT NULL,
    movie_desc text NOT NULL,
    rating decimal(8,2) NOT NULL,
    image text NOT NULL,
    Duration time NOT NULL,
    Budget decimal(10,2) NOT NULL,
    year Date
);

DROP TABLE IF EXISTS Genres CASCADE;
CREATE TABLE Genres(
    id SERIAL PRIMARY KEY,
    genres VARCHAR(100),
    movie_id int,
    FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
);

DROP TABLE IF EXISTS Category CASCADE;
CREATE TABLE Category(
    id SERIAL PRIMARY KEY,
    c_name VARCHAR(100),
    movie_id int,
    FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
);

DROP TABLE IF EXISTS Actors CASCADE;
CREATE TABLE Actors(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(100),
    lname VARCHAR(100),
    image text,
    actorname VARCHAR(100),
    movie_id int,
    FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
);