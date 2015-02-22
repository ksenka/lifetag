/**
 * Created by andrii on 18.02.15.
 */

$(document).ready(function(){
    //hovers for labels 
    $('#mainLabel').hover(
        function(){
            $('#mainLabelLine').css("display", "block");
            $(this).css("cursor", "pointer");

        },function(){
            $('#mainLabelLine').css("display", "none");
            $(this).css("cursor", "default");
    });


    $('#helpLabel').hover(
        function(){
            $('#helpLabelLine').css("display", "block");
            $(this).css("cursor", "pointer");

        },function(){
            $('#helpLabelLine').css("display", "none");
            $(this).css("cursor", "default");
    });


    $('#aboutLabel').hover(
        function(){
            $('#aboutLabelLine').css("display", "block");
            $(this).css("cursor", "pointer");

        },function(){
            $('#aboutLabelLine').css("display", "none");
            $(this).css("cursor", "default");
    });

     $('#contactsLabel').hover(
        function(){
            $('#contactsLabelLine').css("display", "block");
            $(this).css("cursor", "pointer");

        },function(){
            $('#contactsLabelLine').css("display", "none");
            $(this).css("cursor", "default");
    });
});

function styleHeader(){
    //size
    heightByWidth("#header", 0.10);
    heightByWidth("#mainLabel", 0.303448);
    heightByWidth("#helpLabel", 0.303448);
    heightByWidth("#aboutLabel", 0.303448);
    heightByWidth("#contactsLabel", 0.303448);
    heightByWidth("#lifetaglogo", 0.40);

    //font
    fontByHeight("#mainLabel", 1);
    fontByHeight("#helpLabel", 1);
    fontByHeight("#aboutLabel", 1);
    fontByHeight("#contactsLabel", 1);

    //position
    centerVertical("#mainLabel", "0px");
    centerVertical("#helpLabel", "0px");
    centerVertical("#aboutLabel", "0px");
    centerVertical("#contactsLabel", "0px");
    centerVertical("#lifetaglogo", "0px");

    centerRelative("#mainLabelLine", "#mainLabel", "0.65%", "11%");
    centerRelative("#helpLabelLine", "#helpLabel", "0.5%", "11%");
    centerRelative("#aboutLabelLine", "#aboutLabel", "-0.6%", "11%");
    centerRelative("#contactsLabelLine", "#contactsLabel", "1.2%", "11%");

}
