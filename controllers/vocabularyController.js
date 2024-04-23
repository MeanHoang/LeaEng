const vocabularyModel = require('../models/vocabularyModel');

const getAllVocabulary = (req, res) => {
    vocabularyModel.getAllVocabulary((results) => {
        res.json(results);
    });
};

const addVocabulary = (req, res) => {
    const { english_word, vietnamese_meaning } = req.body;

    vocabularyModel.addVocabulary(english_word, vietnamese_meaning, (err) => {
        if (err) {
            res.status(500).send('Error adding vocabulary');
        } else {
            res.status(201).send('Vocabulary added successfully');
        }
    });
};

const getRandomVocabulary = (req, res) => {
    vocabularyModel.getRandomVocabulary((result) => {
        res.json(result);
    });
};

module.exports = {
    getAllVocabulary,
    addVocabulary,
    getRandomVocabulary
};
