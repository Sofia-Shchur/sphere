var numArr = [1, 2, 3, 4];
var randomNum = numArr[Math.floor(Math.random() * numArr.length)];

var text = document.getElementById('answer');
var a = document.getElementById('sphereInside');

function change() {
    if (randomNum == 1) {
        text.innerHTML = 'ДА';
    } else if (randomNum == 2) {
        text.innerHTML = 'НЕТ';
    } else if (randomNum == 3) {
        text.innerHTML = 'ВОЗМОЖНО';
    } else if (randomNum == 4) {
        text.innerHTML = 'СПРОСИ ЕЩЁ РАЗ';
    }
}


function reload() {
    document.location.reload()
}