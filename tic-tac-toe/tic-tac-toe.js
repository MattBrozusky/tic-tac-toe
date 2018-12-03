"use strict";
$(document).ready(function () {

//Global constants
    const box = $(".box");
    let move = 1;
    let XWin = $('#player-x');
    let OWin = $('#player-o');

// Reset and play Buttons
    $('#reset').on('click', function () {
        $('#player-btns').removeClass('invisible');
        $('#game-container').addClass('invisible');
        for (let i = 1; i <= 9; i++){
            $('#box' + i).html('');
        }
        OWin.html('');
        box.off('click', playGame);
        box.off('click', checkForWinner);
        move = 1;
        box.on('click', playGame);
        box.on('click', checkForWinner);
    });

    $('#two-player').on('click', function () {
        $('#game-container').removeClass('invisible');
        XWin.html('Your Turn!');
        $('#player-btns').addClass('invisible');
    });

//Game Functionality
    function playGame() {
        if (move % 2 === 1) {
            $(this).append("X");
            if ($(this).html("X")) {
                $(this).off('click');
            }
            move += 1;
            OWin.html('Your Turn!');
            XWin.html('');

        } else {
            $(this).append("O");
            if ($(this).html("O")) {
                $(this).off('click');
            }
            move += 1;
            XWin.html('Your Turn!');
            OWin.html('');
        }
    }

    function checkForWinner() {
        let box1 = $('#box1'), box2 = $('#box2'), box3 = $('#box3'), box4 = $('#box4'), box5 = $('#box5'), box6 = $('#box6'), box7 = $('#box7'), box8 = $('#box8'), box9 = $('#box9');

        if (box1.html() === "X" && box2.html() === "X" && box3.html() === "X" || box1.html() === "O" && box2.html() === "O" && box3.html() === "O"){
            results(box1);

        } else if (box4.html() === "X" && box5.html() === "X" && box6.html() === "X" || box4.html() === "O" && box5.html() === "O" && box6.html() === "O"){
            results(box4);

        } else if (box7.html() === "X" && box8.html() === "X" && box9.html() === "X" || box7.html() === "O" && box8.html() === "O" && box9.html() === "O"){
            results(box7);

        } else if (box1.html() === "X" && box4.html() === "X" && box7.html() === "X" || box1.html() === "O" && box4.html() === "O" && box7.html() === "O"){
            results(box1);

        } else if (box2.html() === "X" && box5.html() === "X" && box8.html() === "X" || box2.html() === "O" && box5.html() === "O" && box8.html() === "O"){
            results(box2);

        } else if (box3.html() === "X" && box6.html() === "X" && box9.html() === "X" || box3.html() === "O" && box6.html() === "O" && box9.html() === "O"){
            results(box3);

        } else if (box1.html() === "X" && box5.html() === "X" && box9.html() === "X" || box1.html() === "O" && box5.html() === "O" && box9.html() === "O"){
            results(box1);

        } else if (box3.html() === "X" && box5.html() === "X" && box7.html() === "X" || box3.html() === "O" && box5.html() === "O" && box7.html() === "O"){
            results(box3);
        }
    }

    function results(boxNum){
        if (boxNum.html() === 'X'){
            XWin.html('Congrats! You won!');
            OWin.html('You Lost!')
        } else {
            OWin.html('Congrats! You won!');
            XWin.html('You Lost!')
        }
        box.off('click');
    }

//Initial Start
    box.on('click', playGame);
    box.on('click', checkForWinner);

});