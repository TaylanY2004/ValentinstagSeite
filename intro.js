document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('background-music');
    // Video-Referenz entfernt
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const icon = muteButton.querySelector("i"); 

    // Standardwerte nur für Audio
    audio.volume = 1;
    audio.loop = true;

    audio.play().catch(error => {
        console.log('Autoplay wurde verhindert. Interaktion erforderlich.');
    });

    // Mute/Unmute nur für die Hintergrundmusik
    muteButton.addEventListener("click", function () {
        let isMuted = !audio.muted; 

        audio.muted = isMuted;
        // Video-Mute entfernt

        icon.className = isMuted ? "fa fa-volume-off" : "fa fa-volume-up";
        volumeSlider.value = isMuted ? 0 : audio.volume;
    });

    // Lautstärken-Slider nur für Audio
    volumeSlider.addEventListener("input", function () {
        let volume = volumeSlider.value;
        audio.volume = volume;
        // Video-Volume entfernt

        let isMuted = volume == 0;
        audio.muted = isMuted;

        icon.className = isMuted ? "fa fa-volume-off" : "fa fa-volume-up";
    });
});
