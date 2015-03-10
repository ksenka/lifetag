/**
 * Created by mrrider on 01.03.15.
 */

function style(){

    styleHeader();

    //size
    heightByWidth("#addDiv", 0.9);
    heightByWidth("#helpCity", 0.2);
    heightByWidth("#helpCityLabel", 0.2);
    heightByWidth(".autocompleteResult", 0.1);
    heightByWidth("#boxesLeft", 0.7);
    heightByWidth("#boxesRight", 0.9);

    heightByWidth("#homeLabel, #jobLabel, #clothLabel, #schoolLabel, #gardenLabel, #lawLabel, #driveLabel", 0.2);

    heightByWidth("#addButton", 0.2);
    heightByWidth(".editButton", 0.2);
    heightByWidth(".myHelp", 0.9);
    heightByWidth(".cityName", 0.2);
    heightByWidth(".aid", 0.6);
    heightByWidth(".helpAid", 0.9);
    heightByWidth(".helpAid p", 0.5);
    heightByWidth(".helpAid div", 0.946);
    heightByWidth("#editBar", 0.8);

    heightByWidth("#editCityLabel", 0.1);

    heightByWidth("#newAids", 0.10);
    heightByWidth("#boxesL", 0.7);
    heightByWidth("#boxesR", 0.9);
    heightByWidth("#newHomeLabel", 0.2);
    heightByWidth("#newJobLabel", 0.2);
    heightByWidth("#newClothLabel", 0.2);
    heightByWidth("#newLawLabel", 0.2);
    heightByWidth("#newDriveLabel", 0.2);
    heightByWidth("#newGardenLabel", 0.2);
    heightByWidth("#newSchoolLabel", 0.2);
    heightByWidth("#edit", 0.2);
    heightByWidth("#delete", 0.2);
    heightByWidth("#exit", 1);
    //font

    fontByHeight("#helpCity", 0.5);
    fontByHeight("#helpCityLabel", 1);
    fontByHeight(".autocompleteResult", 1);
    fontByHeight("#homeLabel, #jobLabel, #clothLabel, #schoolLabel, #gardenLabel, #lawLabel, #driveLabel", 0.9);
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
    fontByHeight("#delete", 0.7);
    fontByHeight("#edit", 0.7);


    //position


    centerHorizontal("#editCityLabel", "0px");
    centerHorizontal("#newHelpCity", "5%");
    centerHorizontal("#newAids", "0px");
    centerHorizontal("#edit", "22%");
    centerHorizontal("#delete", "-22%");
    centerHorizontal("#addButton", "0px");
    centerHorizontal(".cityName", "0px");
    centerHorizontal(".editButton", "0px");
    centerHorizontal(".aid", "0px");

    centerAll("#editBar");

    topByWidth("#addDiv", 0.13);
    topByWidth(".myHelp", 0.13);

}


$(document).ready(function(){

    style();

    $(window).resize(function(){
        style();
    });

});