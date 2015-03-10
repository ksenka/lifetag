/**
 * Created by mrrider on 10.03.15.
 */

$(document).ready(function(){

    $('#mainLabelLine').css("display", "none");
    $('#helpLabelLine').css("display", "block");
   $('#exit').click(function(){
       $('#overlay').css("display", "none");
       style();
   });

    $('.editButton').click(function(){
        $('#overlay').css("display", "block");
        style();
    });
});