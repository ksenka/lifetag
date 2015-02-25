/**
 * Created by andrii on 18.02.15.
 */
var cities;
var citiesUkr;

$(document).ready(function(){

    $("#helpCity").focus(function(){
        if (cities == null){
            gapi.client.lifetagapi.getCities().execute(function(resp) {
                delete resp["kind"];
                delete resp["etag"];
                delete resp["result"];
                cities = resp;
                citiesUkr = new Array();
                for (var index in cities){
                    if (cities.hasOwnProperty(index))
                        citiesUkr.push(index);
                }
            });
        }
        checkCity();
    });

    $('#helpCity').bind('change paste keyup', function() {
        checkCity();
    });

    $(document).on('mousedown', ".autocompleteResult", function() {
        $('#helpCity').val($(this).html());
    });

    $("#helpCity").blur(function(){
        $("#autocomplete").css('display','none');
    });

    $("#getHelp").submit(function(event){
        event.preventDefault();
        var proceed = true;

        var city = $("#helpCity").val();

        if (proceed){
            //ajax
        }
    });

});

function checkCity(){
    var result = "";
    var value = $('#helpCity').val().toLowerCase();
    if(value.length > 1){
        citiesUkr.forEach(function(entry){
            if (entry.toLowerCase().indexOf(value) >= 0 && entry.toLowerCase() != value){
                result += "\n<tr> <td class=\"autocompleteResult\">" + entry + "</td> </tr>";
            }
        });
    }

    if (result != ""){
        result = "\n<table style=\"width: 100%; background-color: white; border-radius: 3px\">" + result + "\n</table>";
        $("#autocomplete").html(result);
        $("#autocomplete").css('display','block');
        centerHorizontal('#autocomplete', "0px");
        fontByWidth(".autocompleteResult", 0.07);
    }else{
        $("#autocomplete").css('display','none');
    }
}