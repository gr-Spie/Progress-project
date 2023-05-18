import Progress from "./Progress.js";

// связываем переменные с DOM-элементами
const progressContainer = document.getElementById('progress-container'); // контейнер для отображения прогресса
const progressInput= document.getElementById('progress-input'); // ввод значения прогресса
const progressAnimToggle = document.getElementById('progress-anim-toggle'); // переключатель состояния Animate
const progressHideToggle = document.getElementById('progress-hide-toggle');

const progressRing = new Progress(progressContainer); // привязваем новый инстанс класса к элементу


progressInput.addEventListener('input', (e) => {
    let progressValue = parseInt(e.target.value); // значение value привязываем к переменной

    if (progressValue > 100 ) {
        progressValue = 100;
    } 
    e.target.value = progressRing.setProgress(progressValue, styleName, style); // отображаем прогресс в зависимости от value

}); // при изменении значения ввода вызываем метод setProgress()

progressAnimToggle.addEventListener('change', (e) => {
    progressRing.setAnimated(e.target.checked);
    progressInput.value = 0;
    progressHideToggle.checked = progressHideToggle.hidden;
}) // при изменении значения вывода переключаем переключатель Animate

progressHideToggle.addEventListener('change',(e) => {
    progressRing.setHidden(e.target.checked);
    progressInput.value = 0;
    progressAnimToggle.checked = progressRing.state.animated;
});// при изменении значения вывода переключаем переключатель Hidden

