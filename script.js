document.addEventListener("DOMContentLoaded", function() {
    // 加載內容
    fetch('content.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerText = data;
        });

    // 按讚功能
    let likeCount = 0;
    const likeButton = document.getElementById('like-button');
    const likeCountElement = document.getElementById('like-count');

    likeButton.addEventListener('click', function() {
        likeCount++;
        likeCountElement.innerText = likeCount;
    });
});
