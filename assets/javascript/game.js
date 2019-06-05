$(document).ready(function () {
    // Generates random number to guess
    var Random = Math.floor(Math.random() * 102 + 19)

    // Display random number
    $('#scoreToMatch').text(Random);

    //Generate random number for each crystal
    var num1 = Math.floor(Math.random() * 12 + 1)
    var num2 = Math.floor(Math.random() * 12 + 1)
    var num3 = Math.floor(Math.random() * 12 + 1)
    var num4 = Math.floor(Math.random() * 12 + 1)

    // Variables to keep track of wins, losses and total
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


