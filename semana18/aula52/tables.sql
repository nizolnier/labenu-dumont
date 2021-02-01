CREATE TABLE Users_Aula50 (
	id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

DESCRIBE Users_Aula50;

SELECT * from Users_Aula50;

ALTER TABLE Users_Aula50
ADD role ENUM("NORMAL", "ADMIN") DEFAULT("NORMAL");

CREATE TABLE Users_Address (
	id VARCHAR(255) UNIQUE PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL,
    complement VARCHAR(255),
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users_Aula50(id)
);
