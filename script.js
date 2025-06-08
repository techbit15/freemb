// Countdown timer
let countdown = 10;
const countdownSpan = document.getElementById('countdown');
const shareBox = document.getElementById('share-box');

const timer = setInterval(() => {
    countdown--;
    countdownSpan.textContent = countdown;
    if (countdown <= 0) {
        clearInterval(timer);
        shareBox.style.display = 'block';
    }
}, 1000);

// Copy button
document.getElementById("copyBtn").addEventListener("click", function () {
    const url = "https://freemboffer.netlify.app";
    navigator.clipboard.writeText(url).then(() => {
        document.getElementById("copySuccess").style.display = "block";
        setTimeout(() => {
            document.getElementById("copySuccess").style.display = "none";
        }, 3000);
    }).catch((err) => {
        alert("Failed to copy the link.");
    });
});
