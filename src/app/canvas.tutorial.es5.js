/**
 * Created by wayne.zeng on 2017/10/30.
 * Practice canvas regards to MDN canvas tutorial
 */

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext('2d')

window.setInterval(function(){
        drawWithText(ctx)
    }, 1000)

// ctx.fillStyle = 'rgb(200, 0, 0)'
// ctx.fillRect(10, 10, 50, 50)
// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
// ctx.fillRect(30, 30, 50, 50)

function drawUsePathLine(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = 'blue'

    ctx.lineWidth = 9.5
    ctx.lineCap = 'round'
    ctx.moveTo(50, 50)
    ctx.lineTo(50, 175)
    ctx.moveTo(100, 50)
    ctx.lineTo(100, 175)
    ctx.stroke()
}

// draw smile face
function drawSmileFace(ctx) {
    ctx.beginPath()
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
    ctx.moveTo(110, 75)
    ctx.arc(75, 75, 35, 0, Math.PI, false)  // Mouth (clockwise)
    ctx.moveTo(65, 65)
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true)  // Left eye
    ctx.moveTo(95, 65)
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true)  // Right eye
    ctx.stroke()
}

/**
 *
 * @type {Path2D}
 */
function drawUsePath2D(ctx) {
    var rectangle = new Path2D()
    rectangle.rect(10,10, 50,50)

    var circle = new Path2D()
    circle.moveTo(125, 35)
    circle.arc(100, 35, 25, 0, 2 * Math.PI)

    ctx.stroke(rectangle)
    ctx.fill(circle)
}

/**
 * use fillStyle
 */
function drawUseFillStyle(ctx) {
    // globalAlpha = transparencyValue ; or use rgba(r, g, b, alpha)
    ctx.globalAlpha = 0.7
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - (255/6) * i) + ','
                + Math.floor( 255 - (255/6) * j) + ', 0'
            ctx.fillRect(25*i, 25*j, 25, 25)
        }
    }
}

/**
 * drawing text;
 * show time
 */
function drawWithText(ctx) {
    ctx.font = '48px serif'
    ctx.fillText('Hello world', 20, 100)
    // ctx.strokeText('Hello world', 20, 200)
    var now = new Date()
    ctx.clearRect( 20, 200, 300, -50)
    var sec = now.getSeconds()
    var min = now.getMinutes()
    var hour = now.getHours()
    var time = hour + ':' + min + ':' + sec
    ctx.fillText(time, 20, 200)
}

/**
 * drawing image
 */
function drawWithImage(ctx) {
    var img = new Image()
    img.onload = function () {
        ctx.drawImage(img, 50, 50)
    }
    img.src = './img/linechart.png'
}


