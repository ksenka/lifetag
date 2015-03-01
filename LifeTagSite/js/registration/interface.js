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


});