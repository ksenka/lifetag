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
    heightByWidth("#myHelp", 0.1);
    heightByWidth(".cityName", 0.3);
    heightByWidth(".helpAid", 0.7);
    heightByWidth(".helpAid p", 0.3);
    heightByWidth(".helpAid div", 0.946);
    heightByWidth("#editBar", 0.4);
    heightByWidth("#editCityLabel", 0.20);
    heightByWidth("#newHelpCity", 0.20);
    heightByWidth("#newAids", 0.10);
    heightByWidth("#boxesL", 0.3);
    heightByWidth("#boxesR", 0.3);
    heightByWidth("#newHomeLabel", 0.1);
    heightByWidth("#newJobLabel", 0.1);
    heightByWidth("#newClothLabel", 0.1);
    heightByWidth("#newLawLabel", 0.1);
    heightByWidth("#newDriveLabel", 0.1);
    heightByWidth("#newGardenLabel", 0.1);
    heightByWidth("#newSchoolLabel", 0.1);
    heightByWidth("#edit", 0.2);
    //font
    fontByHeight(".label", 0.85);
    fontByHeight("#helpCity", 0.5);
    fontByHeight("#helpCityLabel", 1);
    fontByHeight(".autocompleteResult", 1);
    fontByHeight("#boxesOne p, #boxesTwo p, #boxesThree p,  #boxesLast p", 0.8);
    fontByHeight("#addButton", 0.7);
    fontByHeight(".editButton", 0.7);
    fontByHeight(".cityName", 1);
    fontByHeight(".helpAid p", 0.5);
    fontByHeight("#editCityLabel", 1);
    fontByHeight("#newHelpCity", 0.5);
    fontByHeight("#newAids", 0.5);
    fontByHeight("#newHomeLabel", 0.9);
    fontByHeight("#newJobLabel", 0.9);
    fontByHeight("#newClothLabel", 0.9);
    fontByHeight("#newLawLabel", 0.9);
    fontByHeight("#newDriveLabel", 0.9);
    fontByHeight("#newGardenLabel", 0.9);
    fontByHeight("#newSchoolLabel", 0.9);
    fontByHeight("#newFindButt", 0.6);
    fontByHeight("#edit", 0.7);
    //position
    centerHorizontal("#addDiv", "0px");
    centerHorizontal("#myHelp", "0px");
    centerHorizontal(".helpAid div", "0px");
    centerHorizontal("#editCityLabel", "-5%");
    centerHorizontal("#newHelpCity", "5%");
    centerHorizontal("#newAids", "0px");
    centerHorizontal("#edit", "0px");

    centerVertical("#helpCity", "0px");
    centerVertical("#helpCityLabel", "0px");
    centerVertical("#addButton", "0px");
    centerVertical(".editButton", "0px");

    centerAll("#editBar");

    topByWidth("#addDiv", 0.13);
    topByWidth("#myHelp", 0.3);

}


$(document).ready(function(){

    style();

    $(window).resize(function(){
        style();
    });

});