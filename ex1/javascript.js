let video = document.getElementById('meuVideo');
let meter = document.getElementById('meter');
let timeText = document.getElementById('timeText');

video.addEventListener('timeupdate', function() {

    meter.max = video.duration;
    meter.value = video.currentTime;

    timeText.innerText =  Math.ceil((meter.value % 150));


});