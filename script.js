document.addEventListener("DOMContentLoaded", function () {
    const text = "SERRURIER EN URGENCE 24/7";
    const container = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        container.innerHTML = "";
        index = 0;
        function typing() {
            if (index < text.length) {
                container.innerHTML += text.charAt(index);
                index++;
                let delay = (text.charAt(index - 1) === ' ') ? 100 : 250; // Réduction du délai après les espaces
                setTimeout(typing, delay);
            } else {
                setTimeout(() => typeEffect(), 4000); // Pause plus longue avant de recommencer
            }
        }
        typing();
    }

    typeEffect();
});
