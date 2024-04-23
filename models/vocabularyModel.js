const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Kết nối với cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

const getAllVocabulary = (callback) => {
    const query = 'SELECT * FROM vocabulary';
    connection.query(query, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

const addVocabulary = (english_word, vietnamese_meaning, callback) => {
    const query = 'INSERT INTO vocabulary (english_word, vietnamese_meaning) VALUES (?, ?)';
    connection.query(query, [english_word, vietnamese_meaning], callback);
};

const getRandomVocabulary = (callback) => {
    const query = 'SELECT * FROM vocabulary ORDER BY RAND() LIMIT 1';
    connection.query(query, (err, results) => {
        if (err) throw err;
        callback(results[0]);
    });
};

module.exports = {
    getAllVocabulary,
    addVocabulary,
    getRandomVocabulary
};
