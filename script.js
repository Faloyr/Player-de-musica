    var musicas = [
        {titulo:'Misread', artista:'Kings Of Convenience', source:'Músicas/Kings Of Convenience - Misread.mp3', img:'imagens/imagem2.jpg'},
        {titulo:'DZP - Bhangra', artista:'DZP', source:'Músicas/DZP - Bhangra.mp3', img:'imagens/imagem1.jpg'},
        {titulo:'Bleach Ichigo Crying theme', artista:'Shiro Sagisu', source:'Músicas/Bleach - Ichigo Crying Emotional Sad ᴴᴰ [ Rain + Never Meant to Belong ].mp3', img:'imagens/imagem3.jpg'}
    ];
    
    var musica = document.querySelector('audio');
    var musicaIndex = 0;
    var nomeMusica = document.querySelector('.descricao h2');
    var nomeArtista = document.querySelector('.descricao i');
    var imagem = document.querySelector('img');
    var tempoDecorrido = document.querySelector('.tempo .inicio');
    var duracaoMusica = document.querySelector('.tempo .fim');
    nomeMusica.textContent = musicas[musicaIndex].titulo;
    nomeArtista.textContent = musicas[musicaIndex].artista;
    imagem.setAttribute('src', musicas[musicaIndex].img);
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));





    document.querySelector('.botao-play').addEventListener('click', tocar);
    document.querySelector('.botao-pause').addEventListener('click',pausar);
    document.querySelector('.aumentar-volume').addEventListener('click',aumentarv);
    document.querySelector('.diminuir-volume').addEventListener('click',diminuirv);
    document.querySelector('.mutar').addEventListener('click',mutarv);
    musica.addEventListener('timeupdate',atualizarbarra);



    document.querySelector('.anterior').addEventListener('click', () => {
        musicaIndex--; 
        if (musicaIndex < 0){
            musicaIndex = 2;
        }
        renderizarMusica(musicaIndex);
        musica.play();
    });
    
    document.querySelector('.proximo').addEventListener('click', () => {
        musicaIndex++;
        if (musicaIndex > musicas.length){
            musicaIndex = 0;
        }
        renderizarMusica(musicaIndex);
        musica.play();
    });

    musica.volume=0.3

    function renderizarMusica(musicaIndex){
        musica.setAttribute('src', musicas[musicaIndex].source);
    
        musica.addEventListener('loadeddata', () => {
            nomeMusica.textContent = musicas[musicaIndex].titulo;
            nomeArtista.textContent = musicas[musicaIndex].artista;
            imagem.src = musicas[musicaIndex].img;
        
            duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        });
    
        document.body.append(musica);
    }

    function tocar() {
        musica.play();
        document.querySelector('.botao-pause').style.display = 'block';
        document.querySelector('.botao-play').style.display = 'none';
    }


    function pausar() {
        musica.pause();
        document.querySelector('.botao-play').style.display = 'block';
        document.querySelector('.botao-pause').style.display = 'none';
    }
    function segundosParaMinutos(segundos){
        var campoMinutos = Math.floor(segundos / 60);
        var campoSegundos = segundos % 60;
    
        if (campoSegundos < 10){
            campoSegundos = '0'+ campoSegundos;
        }
        return `${campoMinutos}:${campoSegundos}`;
    }
    function atualizarbarra(){
        var barra = document.querySelector('progress');
        barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
        tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    }
    function aumentarv() {
        if ( musica.volume < 1) {
            musica.volume = musica.volume + 0.1;
        }
    }
    function diminuirv() {
        if (musica.volume < 1 && musica.volume > 0) {
            musica.volume = musica.volume - 0.1;
        }
    }
    function mutarv() {
        if (musica.volume > 0.0) {
            musica.volume = 0.0;
        }
        else {
            musica.volume = 0.30
        }
    }
    
    if (musica.currentTime = musica.duration) {
        musicaIndex++;
        if (musicaIndex > musicas.length){
            musicaIndex = 0;
        }
        renderizarMusica(musicaIndex);
        musica.play();
    }
    
    
    
    