/**
 * Created by mrrider on 01.03.15.
 */


$(document).ready(function(){
   $('.telButt').click(function(){
       $(this).css("background-image", "url('img/submActive.svg')");
       $(this).css("opacity", "1");
   });

    $('#submitTelButt').click(function(){
        $('#submitTel').css('display', 'block');
        $('#submitButt').css('display', 'block');
        $('#submitTelephoneLabel').css('display', 'block');
    });

    $('#submitButt').click(function(){
        $('#agreeLabel').css('display', 'block');
        $('#agree').css('display', 'block');
        $('#register').css('display', 'block');
    });

    $('#rules').click(function(){

    });

    //hovers for labels
    $('#helpLabelLine').css("display", "block");
    $('#mainReg').css("display", "block");
    $('#mainLabelLine').css("display", "none");

    $('#helpLabel').click(function(){
        $('.line').each(function( index ) {
            $(this).css("display", "none");
        });
        $('.page').each(function( index ) {
            $(this).css("display", "none");
        });

        $('#helpLabelLine').css("display", "block");
        $('#mainReg').css("display", "block");
        style();
    });

    $('#mainLabel').click(function(){
        window.location = "index.html";
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