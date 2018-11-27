"use strict";
$(document).ready(function () {






    var move = 1;
    var play = true;

    $(".box").on("click", function () {
        if (move % 2 !== 2 % 2 && ($(this).html() !== "X" || $(this).html() !== "Y")) {


                $(this, "span").append("X");
                if ($(this).html("X") || $(this).html("Y")) {
                    $('.this').off('click');
                }
                move += 1;

        } else if (move % 2 === 2 % 2 && ($(this).html() !== "X" || $(this).html() !== "Y")) {


                $(this, "span").append("Y");
                if ($(this).html("Y") || $(this).html("X")) {
                    $('.this').off('click');
                }
                move += 1;


        }

    });
















});