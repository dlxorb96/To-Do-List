'use strict';
// html 시계를 가져왔음
const $h2 = document.querySelector('h2');

// 시계를 만드는 함수를 만든다.

function loadTime(){
    const clock = new Date();
    const hour = String(clock.getHours()).padStart(2,'0');
    const minute = String(clock.getMinutes()).padStart(2, '0');
    const second = String(clock.getSeconds()).padStart(2, '0');
    $h2.textContent = `${hour}:${minute}:${second}`;
}
loadTime()
setInterval(loadTime, 1000);