/**
 * Created by andrii on 18.02.15.
 */

$(document).ready(function(){
    //hovers for labels 
    $('#mainLabel').click(function(){
        $('.line').each(function( index ) {
            $(this).css("display", "none");
        });
        $('.page').each(function( index ) {
            $(this).css("display", "none");
        });
        $('#mainLabelLine').css("display", "block");
        $('#main').css("display", "block");
    });


    $('#helpLabel').click(function(){
        $('.line').each(function( index ) {
            $(this).css("display", "none");
        });
        $('.page').each(function( index ) {
            $(this).css("display", "none");
        });
        $('#helpLabelLine').css("display", "block");
        $('#iCanHelp').css("display", "block");
    });


    $('#aboutLabel').click(function(){
        $('.line').each(function( index ) {
            $(this).css("display", "none");
        });
        $('.page').each(function( index ) {
            $(this).css("display", "none");
        });
        $('#aboutLabelLine').css("display", "block");
        $('#aboutUs').css("display", "block");
    });

    $('#contactsLabel').click(function(){
        $('.line').each(function( index ) {
            $(this).css("display", "none");
        });
        $('.page').each(function( index ) {
            $(this).css("display", "none");
        });
        $('#contactsLabelLine').css("display", "block");
        $('#contacts').css("display", "block");
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
