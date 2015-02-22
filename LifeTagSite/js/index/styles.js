/**
 * Created by andrii on 18.02.15.
 */

function style(){

    styleHeader();

    adapt(1.1, "#main", "63.125%", "90%");

    //size
    heightByWidth("#main", 0.8112);
    heightByWidth("#INeedHelp", 0.1285);
    heightByWidth("#helpCity", 0.12);
    heightByWidth("#helpCityLabel", 0.2);
    heightByWidth("#helpTel", 0.12);
    heightByWidth("#helpTelLabel", 0.2);
    heightByWidth("#personLogo", 1);
    heightByWidth("#tip", 0.12);
    heightByWidth("#boxesL", 0.3);
    heightByWidth("#boxesR", 0.3);
    heightByWidth("#homeLabel", 0.1);
    heightByWidth("#jobLabel", 0.1);
    heightByWidth("#clothLabel", 0.1);
    heightByWidth("#lawLabel", 0.1);
    heightByWidth("#driveLabel", 0.1);
    heightByWidth("#gardenLabel", 0.1);
    heightByWidth("#schoolLabel", 0.1);
    heightByWidth("#findButt", 0.15);
    heightByWidth("#helpBoxesLabel", 0.2);

    //font
    fontByHeight("#INeedHelp", 0.42);
    fontByHeight("#helpCity", 0.5);
    fontByHeight("#helpTel", 0.5);
    fontByHeight("#tip", 0.4);
    fontByHeight("#helpCityLabel", 0.58);
    fontByHeight("#helpBoxesLabel", 0.58);
    fontByHeight("#helpTelLabel", 0.58);
    fontByHeight("#homeLabel", 0.9);
    fontByHeight("#jobLabel", 0.9);
    fontByHeight("#clothLabel", 0.9);
    fontByHeight("#lawLabel", 0.9);
    fontByHeight("#driveLabel", 0.9);
    fontByHeight("#gardenLabel", 0.9);
    fontByHeight("#schoolLabel", 0.9);
    fontByHeight("#findButt", 0.6);

    //position
    centerHorizontal('#main', "0px");
    centerHorizontal("#INeedHelp", "0px");
    centerHorizontal("#helpCity", "0px");
    centerHorizontal("#helpTel", "0px");
    centerHorizontal('#personLogo', "0px");
    centerHorizontal("#tip", "3px");
    centerHorizontal('#boxesL', "3.2%");
    centerHorizontal('#boxesR', "25%");
    centerHorizontal('#findButt', "0px");

    topByWidth("#main", 0.13);


}


$(document).ready(function(){

    style();

    $(window).resize(function(){
        style();
    });

});