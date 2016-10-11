// 获取contentDiv
var contentDiv = document.getElementById('content');

// 获取所有span
var spanArr = document.getElementsByTagName('span');

// 记录当前宽度
var x = 0;
// 记录当前位置
var index = 0;

function changeWidth() {
    x++;
    spanArr[index].style.width = x + 'px';
    if (x == 30) {
        x = 0;
        spanArr[index].style.width = 0;
        index++;
        scroll();

    }
}
clearInterval(spanTimer);
var spanTimer = setInterval(changeWidth, 100);

var moveTimer;
function scroll() {
    var t = 0;
    var b = -1200 * (index - 1);
    var c = -1200 * index - contentDiv.offsetLeft;
    var d = 100;

    function move() {
        t++;
        contentDiv.style.left = Tween.Quad.easeInOut(t, b, c, d) + 'px';
        if (t == d) {

            if (index == 3) {
                index = 0;
                x = 0;
                contentDiv.style.left = 0;
            }
            clearInterval(moveTimer);
        }
    }
    clearInterval(moveTimer);
    moveTimer = setInterval(move, 10);
}