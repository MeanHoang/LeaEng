const express = require('express');
const app = express();
const vocabularyController = require('./controllers/vocabularyController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

// Tuyến đường cho trang chủ
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Tuyến đường cho trang học từ vựng
app.get('/learn', (req, res) => {
    res.sendFile(__dirname + '/views/learn.html');
});

// Tuyến đường cho trang thêm từ vựng
app.get('/add', (req, res) => {
    res.sendFile(__dirname + '/views/add.html');
});

// Tuyến đường cho việc xem tất cả từ vựng
app.get('/vocabulary', vocabularyController.getAllVocabulary);

// Tuyến đường để thêm từ vựng mới
app.post('/vocabulary', vocabularyController.addVocabulary);

// Tuyến đường để lấy một từ vựng ngẫu nhiên
app.get('/vocabulary/random', vocabularyController.getRandomVocabulary);
app.get('/all-vocabulary', vocabularyController.getAllVocabulary);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
