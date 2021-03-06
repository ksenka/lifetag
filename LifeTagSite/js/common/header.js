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
        style();
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
        if (getCookie("phone") != null){
            $("#volonter").css('display', 'none');
            $("#helloVol").css('display', 'block');
            $("#helloName").html("Привіт, " + getCookie("name"));
        }
        style();
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
        style();
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
        style();
    });

});

function styleHeader(){
    //size
    heightByWidth("#header", 0.10);
    heightByWidth(".label", 0.18);
    heightByWidth("#lifetaglogo", 0.40);

    //font
    fontByHeight(".label", 1);

    //position
    centerVertical("#lifetaglogo", "0px");
    centerVertical("#mainLabel", "0px");
    centerVertical("#helpLabel", "0px");
    centerVertical("#aboutLabel", "0px");
    centerVertical("#contactsLabel", "0px");

}
