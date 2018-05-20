CREATE TABLE Users (
    id INT(32) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(256),
    password VARCHAR(2048),
    reg_date TIMESTAMP
);

INSERT INTO Users (
    email,
    password,
    reg_date
) VALUES (
    "104D3D@mailintator.com",
    "12345678",
    "2017-07-23 00:00:00"
);