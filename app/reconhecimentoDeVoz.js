const conteudoJs = document.getElementById('conteudoJs');
const elementoChutes = new Array();

window.SpeechRecognition = window.SpeechRecognition ||
    webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', OnSpeak);

function OnSpeak(e) {
    chute = e.results[0][0].transcript;
    console.log("antes do replace:", chute);
    chute = chute.replace('um', '1 ')
    chute = chute.replace('dois', '2 ')
    chute = chute.replace('três', '3 ')
    chute = chute.replace('quatro', '4 ')
    chute = chute.replace('cinco', '5 ')
    chute = chute.replace('seis', '6 ')
    chute = chute.replace('sete', '7 ')
    chute = chute.replace('oito', '8 ')
    chute = chute.replace('nove', '9 ')
    chute = chute.replace('dez', '10 ')
    chute = chute.replace('sem', '100 ')
    console.log("depois do replace:", chute);
    // console.log(chute);
    // return false;
    conteudoJs.innerHTML = ''

    if (chute.toUpperCase() === "GAME OVER") {
        document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>O número secreto era ${numeroSecreto} </h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.style.backgroundColor = "black";
    }
    

    var chuteSemiFiltrado = chute.replace(/([^0-9])/g, '.');
    var separandoString = chuteSemiFiltrado.split(".");
    var chutes = new Array();
    var j = 0;
    for (let i = 0; i < separandoString.length; i++) {
        if (separandoString[i] != "") {
            chutes[j] = separandoString[i];
            j++
        }

    }

    exibiChuteNaTela(chutes);
};

function exibiChuteNaTela(chutes) {
    for (i = 0; i < chutes.length; i++) {
        conteudoJs.innerHTML += `
        <br>
        <div>Você disse:</div>
        <span class="box">${chutes[i]}</span>
    `
        verificaSeOChutePossuiUmValorValido(chutes[i]);
    }
};



recognition.addEventListener('end', () => {
    recognition.start()
})
