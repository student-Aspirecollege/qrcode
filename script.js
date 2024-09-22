let textEl = document.querySelector('.text');
let btn = document.querySelector('button');
let imgEl = document.querySelector('img');
let imgContainerEl = document.querySelector('.imgContainer');

btn.addEventListener('click', generateQRCode);
textEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generateQRCode();
    }
});
function generateQRCode() {
    let text = textEl.value;
    
    if (!text) {
        imgContainerEl.classList.add('hide');
        return;
    }
    
    let srcEl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    imgEl.src = srcEl;

    imgContainerEl.classList.remove('hide');
};
