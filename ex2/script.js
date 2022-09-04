let audioplay = document.getElementById('audioPlay');
let imagePlay = document.querySelector('img');

let musica= new Audio('https://file-examples.com/storage/fe6a5406fa63112369b75a2/2017/11/file_example_MP3_700KB.mp3');

let play = false;

function playAudio() {

    if (play) {
        musica.pause();
        imagePlay.setAttribute('src', 'img/play.png');
        play = false; 
     
    } else {
        musica.play();
        musica.loop = false;

        
        setTimeout(function(){
            imagePlay.setAttribute('src', 'img/loading.gif');
        
        }, 100); 

        imagePlay.setAttribute('src', 'img/pause.png');
        play = true;
    }

}

//setAttribute - Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.