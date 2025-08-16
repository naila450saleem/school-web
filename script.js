// Simple demo: prevent form submission for now
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Demo form submitted!");
});
