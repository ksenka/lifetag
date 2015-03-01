/**
 * Created by mrrider on 01.03.15.
 */

function style(){

    styleHeader();

    heightByWidth("#mainReg", 0.6);
    heightByWidth("#beVol", 0.1);
    heightByWidth("#inputs", 0.8);
    heightByWidth(".inputReg", 0.1);
    heightByWidth("#labels", 0.8);
    heightByWidth(".labelsText", 0.2);
    heightByWidth("#repeat", 0.1);
    heightByWidth("#submitTelButt", 1);
    heightByWidth("#submitButt", 1);
    heightByWidth("#agreeLabel", 0.18);
    heightByWidth("#register", 0.18);

    fontByHeight("#mainReg", 0.5);
    fontByHeight("#beVol", 0.5);
    fontByHeight(".inputReg", 0.5);
    fontByHeight(".labelsText", 0.35);
    fontByHeight("#repeat", 0.3);
    fontByHeight("#agreeLabel", 0.3);
    fontByHeight("#register", 0.4);

    centerHorizontal('#mainReg', "0px");
    centerHorizontal('#beVol', "0px");

    topByWidth("#mainReg", 0.13);
}


$(document).ready(function(){

    style();

    $(window).resize(function(){
        style();
    });

});