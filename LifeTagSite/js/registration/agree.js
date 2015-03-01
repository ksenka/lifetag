/**
 * Created by mrrider on 01.03.15.
 */

function style(){

    heightByWidth("#headLabel", 0.15);
    heightByWidth("#mainText", 0.3);

    fontByHeight("#headLabel", 0.4);
    fontByHeight("#mainText", 0.05);

    centerHorizontal('#headLabel', "0px");
    centerHorizontal('#mainText', "0px");

}

$(document).ready(function(){
    style();
    $(window).resize(function(){
        style();
    });
});