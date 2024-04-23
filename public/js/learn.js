document.addEventListener('DOMContentLoaded', () => {
    function fetchRandomVocabulary() {
        fetch('/vocabulary/random')
            .then(response => response.json())
            .then(data => {
                document.getElementById('random-word').textContent = `${data.english_word}: ${data.vietnamese_meaning}`;
                window.currentRandomWord = `${data.english_word}: ${data.vietnamese_meaning}`;
            });
    }

    document.getElementById('match-vocabulary-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const userInput = document.getElementById('match-input').value;

        if (userInput.trim() === window.currentRandomWord) {
            document.getElementById('match-feedback').textContent = 'Correct!';
        } else {
            document.getElementById('match-feedback').textContent = 'Incorrect. Try again.';
        }

        document.getElementById('match-input').value = '';
        fetchRandomVocabulary();
    });

    fetchRandomVocabulary();
});
