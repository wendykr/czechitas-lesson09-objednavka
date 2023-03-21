// tady je místo pro náš program

const formElm = document.querySelector('form');
const inputElm = document.querySelector('input');
const selectElm = document.querySelector('select');

const process = (event) => {
    event.preventDefault();
    
    formElm.innerHTML = `<h1>Hotovo</h1>
        <p>Objednávka odeslána ke zpracování.</p>`;

    console.log('Úspěch');

    console.log(inputElm.value);
    console.log(selectElm.value);
}

formElm.addEventListener('submit', process);