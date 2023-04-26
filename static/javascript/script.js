const textElement = document.getElementById('type-text');
const text = textElement.innerText;
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML = text.slice(0, ++index);
        setTimeout(type, 100);
    }
}

type();