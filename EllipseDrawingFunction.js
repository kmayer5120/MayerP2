/*
*   Name:       Kyle Mayer
*   File:       EllipseDrawingFunction.js
*   Program:    Program 2
*   Purpose:    Design a web page that informs user about the purpose of a website.
*   Date:       9/10/2019
*/


//Source for function: http://www.williammalone.com/briefs/how-to-draw-ellipse-html5-canvas/
function drawEllipse(centerX, centerY, width, height) {

    var canvas = document.getElementById('ellipse');
    var context = canvas.getContext('2d')

    context.beginPath();

    context.moveTo(centerX, centerY - height / 2); // A1

    context.bezierCurveTo(
        centerX + width / 2, centerY - height / 2, // C1
        centerX + width / 2, centerY + height / 2, // C2
        centerX, centerY + height / 2); // A2

    context.bezierCurveTo(
        centerX - width / 2, centerY + height / 2, // C3
        centerX - width / 2, centerY - height / 2, // C4
        centerX, centerY - height / 2); // A1

    context.fillStyle = "white";
    context.fill();
    context.closePath();
}