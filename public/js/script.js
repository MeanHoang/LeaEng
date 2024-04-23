document.addEventListener('DOMContentLoaded', () => {
    function fetchVocabulary() {
        fetch('/vocabulary')
            .then(response => response.json())
            .then(data => {
                const vocabularyList = document.getElementById('vocabulary-list');
                vocabularyList.innerHTML = '';
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.innerHTML = `<strong>${item.english_word}:</strong> ${item.vietnamese_meaning}`;
                    vocabularyList.appendChild(div);
                });
            });
    }

    document.getElementById('add-vocabulary-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const englishWord = document.getElementById('english-word').value;
        const vietnameseMeaning = document.getElementById('vietnamese-meaning').value;

        const vocabularyData = {
            english_word: englishWord,
            vietnamese_meaning: vietnameseMeaning
        };

        fetch('/vocabulary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vocabularyData)
        })
            .then(response => {
                if (response.ok) {
                    document.getElementById('feedback').textContent = 'Vocabulary added successfully';
                    document.getElementById('add-vocabulary-form').reset();
                    fetchVocabulary(); // Cập nhật danh sách từ vựng
                } else {
                    document.getElementById('feedback').textContent = 'Error adding vocabulary';
                }
            });
    });

    fetchVocabulary();
});
