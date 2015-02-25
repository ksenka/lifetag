/**
 * Created by andrii on 24.02.15.
 */

function initAPI(){
    var lifetag = 'https://lifetagukraine.appspot.com/_ah/api';
    gapi.client.load('lifetagapi', 'v1', function() {
        //alert("did it!");
    }, lifetag);
}