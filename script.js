function showMessage(title, text) {

    // Создать ноду жтмл с томтом, create element/
    // присвоить классы(для стилей)
    // Найти body
    // присобачить наш тост-хтмл с нашим текстом
    document.getElementsByTagName("body")[0].appendChild(createToast(title, text))
}

function createToast(title, text) {
    const toastEl = document.createElement('div');
    const titleEl = document.createElement('div');
    const textEl = document.createElement('div');

    toastEl.className = 'toast';
    titleEl.className = 'title';
    textEl.className = 'text';

    titleEl.innerText = title;
    textEl.innerText = text;

    toastEl.appendChild(titleEl);
    toastEl.appendChild(textEl);



    return toastEl;
}

