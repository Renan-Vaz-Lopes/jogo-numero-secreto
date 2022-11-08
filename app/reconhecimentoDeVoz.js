const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition ||
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', OnSpeak);

function OnSpeak(e) {
    chute = e.results[0][0].transcript
    exibiChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
};

function exibiChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div 
    `
}
recognition.addEventListener('end', () => recognition.start())
