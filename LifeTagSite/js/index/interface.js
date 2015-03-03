/**
 * Created by andrii on 18.02.15.
 */
var cities;
var citiesUkr = new Array();
var dictionary = {
    "home": "жилье",
    "job": "работа",
    "cloth": "одежда",
    "school": "школа",
    "kinderGarden": "детский сад",
    "law": "право",
    "drive": "проезд"
};

$(document).ready(function(){

    $("#jsNeeded").css('display', 'none');

    $('#registr').click(function(){
        window.location = "registration.html";
    });

    $("#helpCity").focus(function(){
        if (cities == null){
            gapi.client.lifetagapi.getCities().execute(function(resp) {
                delete resp["kind"];
                delete resp["etag"];
                delete resp["result"];
                cities = resp;
                for (var index in cities){
                    if (cities.hasOwnProperty(index)){
                        citiesUkr.push(index);
                        cities[index.toLowerCase()] = cities[index];
                    }
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
        if (cities == null || !cities.hasOwnProperty(city.toLowerCase())){
            $("#helpCity").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#helpCity").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#helpCity").css('box-shadow', '');
            $("#helpCity").css('border', '');
            city = cities[city.toLowerCase()].toLowerCase();
        }

        var counter = 0;
        var home = false;
        var job = false;
        var cloth = false;
        var school = false;
        var garden = false;
        var law = false;
        var drive = false;

        if($("#home").prop("checked")){
            counter++;
            home = true;
        }

        if($("#job").prop("checked")){
            counter++;
            job = true;
        }

        if($("#cloth").prop("checked")){
            counter++;
            cloth = true;
        }

        if($("#school").prop("checked")){
            counter++;
            school = true;
        }

        if($("#garden").prop("checked")){
            counter++;
            garden = true;
        }

        if($("#law").prop("checked")){
            counter++;
            law = true;
        }

        if($("#drive").prop("checked")){
            counter++;
            drive = true;
        }

        if (counter <= 0) {
            proceed = false;
            alert('Оберіть хоча б одну потребу');
        }

        var number = $('#helpTel').val();

        if(!isValidUkrainianNumber('#helpTel')){
            $("#helpTel").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#helpTel").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#helpTel").css('box-shadow', '');
            $("#helpTel").css('border', '');
        }

        if (proceed){
            gapi.client.lifetagapi.getAid({"city" : city,"number" : number,"home" : home,"job" : job,"cloth" : cloth,"school" : school,"kinderGarden" : garden,"law" : law,"drive" : drive}).execute(function(resp) {
                var res = "";
                var html = $("#prototypeTable").html();
                for (var index in resp["response"]){
                    var name = index.split(" ")[1];
                    var helps = "";
                    resp["response"][index].forEach(function(data){
                        helps += dictionary[data]+" ";
                    });
                    var phone = index.split(" ")[0];
                    res += "\n<tr>\
                        <td style=\"width: 20%\">"+name+"</td>\
                        <td style=\"width: 60%\" class=\"phoneResult\">"+helps+"</td>\
                        <td class=\"phoneResult\" style=\"width: 20%\">"+phone+"</td>\
                    </tr>";
                }

                if (res == ""){
                    res += "\n<tr> \
                    <td style=\"width: 20%\"></td>\
                        <td style=\"width: 60%\" class=\"phoneResult\">Нічого не знайдено, спробуйте пізніше</td>\
                        <td style=\"width: 20%\"></td>\
                    </tr>";
                }
                html += res;
                $("#resultsTable").html(html);
                $("#results").css('display', 'block');
                $("html, body").animate({ scrollTop: $(document).height() }, 500);
            });
        }
    });

    $("#loginForm").submit(function(event){
        event.preventDefault();

        var proceed = true;

        if ($("#login").val() <= 3){
            $("#login").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#login").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#login").css('box-shadow', '');
            $("#login").css('border', '');
        }

        if ($("#pass").val() <= 3){
            $("#pass").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#pass").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#pass").css('box-shadow', '');
            $("#pass").css('border', '');
        }

        if (proceed) {
            gapi.client.lifetagapi.login({
                "phone": $("#login").val(),
                "password": $("#pass").val()
            }).execute(function (resp) {
                if (resp["bool"]) {
                    setCookie("phone", $("#login").val(), {expires: 3600, path: "/"});
                    setCookie("password", CryptoJS.SHA256($("#pass").val()), {expires: 3600, path: "/"});
                } else {
                    //add some code in case of wrong login/password
                    alert("Невірний номер/пароль");
                }
            });
            if(getCookie("phone") != undefined)
                gapi.client.lifetagapi.getName({
                    "phone": $("#login").val(),
                    "password": CryptoJS.SHA256($("#pass").val())
                }).execute(function (resp) {
                    setCookie("name", resp["name"], {expires: 3600, path: "/"});
                });

            if(getCookie("name") != undefined)
                window.location.href = "profile.html";

            var button =  $("#findButt");
            button.prop('disabled', true);
            setTimeout(function() {
                button.prop('disabled', false);
            }, 1000);
        }

    });

    var get = location.search.substring(1);
    var request = get.split("&");
    var params = [];
    request.forEach(function(element){
        var el = element.split("=");
        params[el[0]] = el[1];
    });

    if (params["page"]=="help"){
        $('#mainLabelLine').css("display", "none");
        $('#main').css("display", "none");
        $('#helpLabelLine').css("display", "block");
        $('#iCanHelp').css("display", "block");
        if (getCookie("phone") != null){
            $("#volonter").css('display', 'none');
            $("#helloVol").css('display', 'block');
            $("#helloName").html("Привіт, " + getCookie("name"));
        }
        style();
    }

    if (params["page"]=="about"){
        $('#mainLabelLine').css("display", "none");
        $('#main').css("display", "none");
        $('#aboutLabelLine').css("display", "block");
        $('#aboutUs').css("display", "block");
        style();
    }

    if (params["page"]=="contacts"){
        $('#mainLabelLine').css("display", "none");
        $('#main').css("display", "none");
        $('#contactsLabelLine').css("display", "block");
        $('#contacts').css("display", "block");
        style();
    }

});

function checkCity(){
    var result = "";
    var value = $('#helpCity').val().toLowerCase();
    if(value.length > 1 && citiesUkr.length > 0){
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