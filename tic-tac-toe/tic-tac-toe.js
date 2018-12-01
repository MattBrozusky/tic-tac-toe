"use strict";
$(document).ready(function () {

//Global constants
    const box = $(".box");
    let move = 1;
    let play = true;


// Reset and play Buttons
    $('#reset').on('click', function () {
        $('#player-btns').removeClass('invisible');
        $('#game-container').addClass('invisible');
        for (let i = 1; i <= 9; i++){
            $('#box' + i).html('');
        }
        move = 1;
        box.on("click", playGame);
        box.on('click', checkForWinner);
    });

    $('#two-player').on('click', function () {
        $('#game-container').removeClass('invisible');
        $('#player-btns').addClass('invisible');
    });

//Game Functionality
    function playGame() {
        if (move % 2 === 1) {
            $(this, "span").append("X");
            if ($(this, "span").html("X")) {
                $(this).off('click');
            }
            move += 1;

        } else if (move % 2 === 0) {
            $(this, "span").append("O");
            if ($(this, "span").html("O")) {
                $(this).off('click');
            }
            move += 1;
        }
    }

    function checkForWinner() {
        let box1 = $('#box1'), box2 = $('#box2'), box3 = $('#box3'), box4 = $('#box4'), box5 = $('#box5'), box6 = $('#box6'), box7 = $('#box7'), box8 = $('#box8'), box9 = $('#box9');

        if (box1.html() === "X" && box2.html() === "X" && box3.html() === "X" || box1.html() === "O" && box2.html() === "O" && box3.html() === "O"){
            console.log(`Congrats ${box1.html()}! You won!`);
            box.off('click');

        } else if (box4.html() === "X" && box5.html() === "X" && box6.html() === "X" || box4.html() === "O" && box5.html() === "O" && box6.html() === "O"){
            console.log(`Congrats ${box4.html()}! You won!`);
            box.off('click');

        } else if (box7.html() === "X" && box8.html() === "X" && box9.html() === "X" || box7.html() === "O" && box8.html() === "O" && box9.html() === "O"){
            console.log(`Congrats ${box7.html()}! You won!`);
            box.off('click');

        } else if (box1.html() === "X" && box4.html() === "X" && box7.html() === "X" || box1.html() === "O" && box4.html() === "O" && box7.html() === "O"){
            console.log(`Congrats ${box1.html()}! You won!`);
            box.off('click');

        } else if (box2.html() === "X" && box5.html() === "X" && box8.html() === "X" || box2.html() === "O" && box5.html() === "O" && box8.html() === "O"){
            console.log(`Congrats ${box2.html()}! You won!`);
            box.off('click');

        } else if (box3.html() === "X" && box6.html() === "X" && box9.html() === "X" || box3.html() === "O" && box6.html() === "O" && box9.html() === "O"){
            console.log(`Congrats ${box3.html()}! You won!`);
            box.off('click');

        } else if (box1.html() === "X" && box5.html() === "X" && box9.html() === "X" || box1.html() === "O" && box5.html() === "O" && box9.html() === "O"){
            console.log(`Congrats ${box1.html()}! You won!`);
            box.off('click');

        } else if (box3.html() === "X" && box5.html() === "X" && box7.html() === "X" || box3.html() === "O" && box5.html() === "O" && box7.html() === "O"){
            console.log(`Congrats ${box3.html()}! You won!`);
            box.off('click');
        }
    }


//Initial Start
    box.on("click", playGame);
    box.on('click', checkForWinner);

});