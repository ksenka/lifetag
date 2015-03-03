/**
 * Created by mrrider on 01.03.15.
 */

var code;
var tel;

function sendCode(){

}


$(document).ready(function(){

    $("#jsNeeded").css('display', 'none');

    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

    $('#submitTelButt').click(function(){
        if (tel == null && isValidUkrainianNumber('#telephone')){
            tel = $('#telephone').val();
            $("#telephone").css('box-shadow', '');
            $("#telephone").css('border', '');
            $('#submitTel').css('display', 'block');
            $('#submitButt').css('display', 'block');
            $('#submitTelephoneLabel').css('display', 'block');
            $(this).css("background-image", "url('img/submActive.svg')");
            $(this).css("opacity", "1");
            code = Math.floor((Math.random() * 999999) + 1);
            $.post('php/send.php', { phone: tel, code: code},
                function(returnedData){
                    //alert(returnedData);
                });
        }else{
            if (tel == null){
                $("#telephone").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
                $("#telephone").css('border', '1px solid rgba(255, 0, 0, 1)');
            }
        }

    });

    $('#submitButt').click(function(){
        var confCode = $('#submitTel').val();
        if (confCode == code){
            $('#agreeLabel').css('display', 'block');
            $('#agree').css('display', 'block');
            $('#register').css('display', 'block');
            $("#submitTel").css('box-shadow', '');
            $("#submitTel").css('border', '');
            $(this).css("background-image", "url('img/submActive.svg')");
            $(this).css("opacity", "1");
        }else{
            $("#submitTel").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#submitTel").css('border', '1px solid rgba(255, 0, 0, 1)');
        }

    });

    $('#rules').click(function(){

    });

    //hovers for labels
    $('#helpLabelLine').css("display", "block");
    $('#mainReg').css("display", "block");
    $('#mainLabelLine').css("display", "none");

    $("#registerForm").submit(function(event){

        event.preventDefault();

        var name = $('#nameVol').val();
        var surname = $('#surnameVol').val();
        var email = $('#email').val();
        var pass = $('#password').val();
        var confPass = $('#submitPass').val();
        var agree = $('#agree').prop("checked");
        var proceed = true;
        var confCode = $('#submitTel').val();

        if (name.length < 2){
            $("#nameVol").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#nameVol").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#nameVol").css('box-shadow', '');
            $("#nameVol").css('border', '');
        }

        if (surname.length < 2){
            $("#surnameVol").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#surnameVol").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#surnameVol").css('box-shadow', '');
            $("#surnameVol").css('border', '');
        }

        if (!isEmail(email)){
            $("#email").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#email").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#email").css('box-shadow', '');
            $("#email").css('border', '');
        }

        if (pass.length < 5){
            $("#password").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#password").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#password").css('box-shadow', '');
            $("#password").css('border', '');
        }

        if (confPass != pass){
            $("#submitPass").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#submitPass").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }else{
            $("#submitPass").css('box-shadow', '');
            $("#submitPass").css('border', '');
        }

        if (code == confCode){
            $("#submitTel").css('box-shadow', '');
            $("#submitTel").css('border', '');
        }else{
            $("#submitTel").css('box-shadow', '0 0 10px rgba(255, 0, 0, 1)');
            $("#submitTel").css('border', '1px solid rgba(255, 0, 0, 1)');
            proceed = false;
        }

        if (!agree){
            alert("Ви повинні погодитися з умовами для реєстрації");
            proceed = false;
        }

        if (proceed){
            gapi.client.lifetagapi.register({
                "phone": $("#telephone").val(),
                "password": pass,
                "name": name,
                "surname": surname,
                "email": email
            }).execute(function (resp) {
                if (resp["bool"]) {
                    setCookie("phone", $("#login").val(), {expires: 3600, path: "/"});
                    setCookie("password", CryptoJS.SHA256($("#pass").val()), {expires: 3600, path: "/"});
                    setCookie("name", name, {expires: 3600, path: "/"});
                    window.location.href = "index.html?page=help";
                } else {
                    alert("Реєстрація не вдалась, користувач з таким номером вже зареєстрований");
                }
            });

            var button =  $("#register");
            button.prop('disabled', true);
            setTimeout(function() {
                button.prop('disabled', false);
            }, 1000);

        }


    });

});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}