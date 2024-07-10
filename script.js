document.addEventListener("DOMContentLoaded", function() {
    fetch('content.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerText = data;
        });
});
