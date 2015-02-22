/**
 * Created by andrii on 12.12.14. v0.09
 */

//center block horizontal
function centerHorizontal(identifier, offset){
        $(identifier).each(function( index ) {
            var size = $(this).outerWidth();
            var pos = "calc(50% + " + offset + " - " + size/2 + "px)";
            $(this).css('left', pos);
            if ($(this).position().left<=0){
                $(this).css('left', '0');
            }
        });
}

//center block vertical
function centerVertical(identifier, offset) {
        $(identifier).each(function( index ) {
            var size = $(this).outerHeight();
            var pos = "calc(50% + " + offset + " - " + size/2 + "px)";
            $(this).css('top', pos);
            if ($(this).position().top<=0){
                $(this).css('top', '0');
            }
        });
}

//height of block by it's width
function heightByWidth(identifier, proportion){
    $(identifier).height($(identifier).width()*proportion);
}

function checkboxSize(identifier){
    $(identifier).height($(identifier).width());
//    var width = "" + 1280 / $(window).width + "em";
//    $(identifier).css("width", width);
//    $(identifier).css("height", width);
}

//font-size is set by height of block
function fontByHeight(identifier, proportion){
    $(identifier).each(function() {
        $(this).css('font-size', $(this).height()*proportion);
    });
}

//center vertical and horizontal
function centerAll(identifier){
    centerHorizontal(identifier, "0px");
    centerVertical(identifier, "0px");
}

//check if phone number is valid
function isValidUkrainianNumber(field){
    var number = $(field).val();
    if (number.length==13&&number.substr(0,4)=="+380")
        return true;
    else
        if(number.length==10&&number.substr(0,1)=="0")
            return true;
    return false;
}

//proportion = width/height
//className – blank class connected to blocks
//defaultSize - string with "xx%" or "XXpx" etc. and it's used by default
//adaptedSize - string with "xx%" or "XXpx" etc. and it's used for window size that matches proportion
function adapt(proportion, classname, defaultSize, adaptedSize){
    if (($(window).width()*proportion)<=$(window).height()){
        $(classname).each(function(index) {
            $(this).css('width', adaptedSize);
        });
    }else{
        $(classname).each(function(index) {
            $(this).css('width', defaultSize);
        });
    }
}

//center according to other block with offset

function centerRelative(target, parent, offsetX, offsetY){
    var pxPosX = $(parent).position().left + $(parent).outerWidth()/2 - $(target).outerWidth()/2;
    var pxPosY = $(parent).position().top + $(parent).outerHeight()/2 - $(target).outerHeight()/2;
    var posX = "calc(" + offsetX + " + " + pxPosX + "px)";
    var posY = "calc(" + offsetY + " + " + pxPosY + "px)";
    $(target).css('left', posX);
    $(target).css('top', posY);
}


//please do not use inside the elements with heightByWidth() applied
function topByWidth(target, percents){
    var posY = ($(window).width() * percents) + "px";
    $(target).css('top', posY);
}