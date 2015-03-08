/**
 * Created by mrrider on 01.03.15.
 */

function style(){

    styleHeader();

    //size
    heightByWidth("#addDiv", 0.20);
    heightByWidth("#helpCity", 0.20);
    heightByWidth("#helpCityLabel", 0.20);
    heightByWidth(".autocompleteResult", 0.1);
    heightByWidth("#boxesOne, #boxesTwo, #boxesThree, #boxesLast", 0.9);
    heightByWidth("#boxesOne p, #boxesTwo p, #boxesThree p,  #boxesLast p", 0.7);
    heightByWidth("#addButton", 0.2);
    heightByWidth(".editButton", 0.2);
    heightByWidth("#myHelp", 0.2);
    heightByWidth(".cityName", 0.3);
    heightByWidth(".helpAid", 0.7);
    heightByWidth(".helpAid p", 0.3);
    heightByWidth(".helpAid div", 0.946);

    //font
    fontByHeight(".label", 0.85);
    fontByHeight("#helpCity", 0.5);
    fontByHeight("#helpCityLabel", 1);
    fontByHeight(".autocompleteResult", 1);
    fontByHeight("#boxesOne p, #boxesTwo p, #boxesThree p,  #boxesLast p", 1);
    fontByHeight("#addButton", 0.7);
    fontByHeight(".editButton", 0.7);
    fontByHeight(".cityName", 1);
    fontByHeight(".helpAid p", 0.7);

    //position
    centerHorizontal("#addDiv", "0px");
    centerHorizontal("#myHelp", "0px");
    centerHorizontal(".helpAid div", "0px");

    centerVertical("#helpCity", "0px");
    centerVertical("#helpCityLabel", "0px");
    centerVertical("#addButton", "0px");
    centerVertical(".editButton", "0px");

    topByWidth("#addDiv", 0.13);
    topByWidth("#myHelp", 0.3);

}


$(document).ready(function(){

    style();

    $(window).resize(function(){
        style();
    });

});