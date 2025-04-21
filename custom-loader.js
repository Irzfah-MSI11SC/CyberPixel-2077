// Custom loading animation (optional progress bar)
window.addEventListener("DOMContentLoaded", function () {
    let loader = document.getElementById("custom-loader");
    let progressBar = document.getElementById("progress-bar");

    // Simulasi progress (bisa kamu ganti dengan logic asli kalau mau)
    let progress = 0;
    let interval = setInterval(() => {
        progress += 2;
        if (progress >= 100) {
            clearInterval(interval);
            loader.style.display = "none";
        } else {
            progressBar.style.width = progress + "%";
        }
    }, 100);
});
