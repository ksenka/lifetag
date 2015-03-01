/**
 * Created by andrii on 18.02.15.
 */

function style(){

    styleHeader();

    adapt(1.1, "#main", "63.125%", "90%");
    adapt(1.1, "#iCanHelp", "90%", "90%");

    //size
    //find help
    heightByWidth("#main", 0.8112);
    heightByWidth("#INeedHelp", 0.12);
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

    //give help
    heightByWidth("#iCanHelp", 0.6);
    heightByWidth("#volonter", 0.9);
    heightByWidth("#donation", 1.2);
    heightByWidth("#iAmVolonter", 0.2);
    heightByWidth(".enterSite", 0.1);
    heightByWidth("#login", 0.15);
    heightByWidth("#pass", 0.15);
    heightByWidth("#loginButton", 0.15);
    heightByWidth("#registr", 0.2);
    heightByWidth("#helpProject", 0.083);
    heightByWidth("#description", 0.1);
    heightByWidth("#donateBoxesL", 0.9);
    heightByWidth("#donateBoxesR", 0.9);
    heightByWidth("input[type=radio].radioBox + label.radioLabel", 1);
    heightByWidth(".labelDonate", 0.3)
    heightByWidth("#diffPrice", 0.15);
    heightByWidth("#donateButton", 0.2);
    heightByWidth("#helloVol", 0.9);
    heightByWidth("#helloName", 0.2);
    heightByWidth("#inButt", 0.15);
    heightByWidth("#logout", 0.15);

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
    fontByWidth("#results", 0.025);
    fontByWidth(".autocompleteResult", 0.07);

    fontByHeight("#iAmVolonter", 0.42);
    fontByHeight(".enterSite", 0.7);
    fontByHeight("#login", 0.45);
    fontByHeight("#pass", 0.45);
    fontByHeight("#loginButton", 0.7);
    fontByHeight("#registr", 0.6);
    fontByHeight("#helpProject", 1);
    fontByHeight("#description", 0.65);
    fontByHeight(".labelDonate", 0.5);
    fontByHeight("#diffPrice", 0.6);
    fontByHeight("#donateButton", 0.5);
    fontByHeight("#helloName", 0.42);
    fontByHeight("#inButt", 0.5);
    fontByHeight("#logout", 0.5)

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
    centerHorizontal('#autocomplete', "0px");

    centerHorizontal('#iCanHelp', "0px");
    centerHorizontal('#vline', "1px");
    centerHorizontal('#loginButton', "0px");
    centerHorizontal('#description', "0px");
    centerHorizontal('#donateButton', "0px");
    centerHorizontal('#inButt', "0px");
    centerHorizontal('#logout', "0px");

    topByWidth("#main", 0.13);
    topByWidth("#iCanHelp", 0.13);

}


$(document).ready(function(){

    style();

    $(window).resize(function(){
        style();
    });

});