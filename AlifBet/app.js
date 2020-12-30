
const alfa = document.querySelectorAll("#alfa")

alfa.forEach((daaraya) => {
    daaraya.addEventListener("click", function() {
        const audio = new Audio(`/audio/${daaraya.alt}.mp3`);
        audio.play();
    });
});

