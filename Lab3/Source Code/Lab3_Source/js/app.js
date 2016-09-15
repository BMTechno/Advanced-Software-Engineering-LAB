/**
 * Created by saiteja on 07-09-2016.
 */

var accessToken;
// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        accessToken = response.authResponse.accessToken;
        console.log('access token caught:' + accessToken);
        testAPI();
        // window.location = "/Lab2_Source/Home.html"; ///just entered as test
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Website using Facebook.Have a great day :)';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '214495585631651',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.7', // use graph api version 2.7
        status     : true


    });

    FB.Event.subscribe('auth.login', function () {
        window.location = "/Lab3_Source/Texttospeech.html";
    });



    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.



    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {

    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
           'Thanks for logging in, ' + response.name + '!';
    });

}

function Logout() {

    FB.logout(function(){window.location = "/Lab3_Source/fbLogin.html";});

}


function speech() {

    var text = document.getElementById('text');
    console.log(text.value);
    var utterance = new SpeechSynthesisUtterance(text.value);
    window.speechSynthesis.speak(utterance);
    kqsearch()
}

function kqsearch(){
    var qtext = document.getElementById('text');
    console.log(qtext.value);
    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    var params = {
        'query': qtext.value.toString(),
        'limit': 10,
        'indent': true,
        'key' : 'AIzaSyArexDGv7J7WF8EqbwJAkf22ibn6KOvPn8',
    };
    $.getJSON(service_url + '?callback=?', params, function(response) {

        $.each(response.itemListElement, function(i, element) {
            $('<tr >', {text:element['result']['name']},'</tr>').appendTo('#display');
        });
    });

}

//function alchemy() {

  //  var watson = require(['node_modules/watson-developer-cloud']);
   // console.log(watson);
  //  var tone_analyzer = watson.tone_analyzer({
   //     username: 'sm47d@mail.umkc.edu',
   //     password: 'harish9*9',
   //     version: 'v3',
   //     version_date: '2016-05-19 '
   // });

    //tone_analyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
    //    function(err, tone) {
    //        if (err)
    //            console.log(err);
    //        else
    //            console.log(JSON.stringify(tone, null, 2));
    //    });
  ///  var text ='A word is dead when it is said, some say. Emily Dickinson';

    //var callback = httpGet("https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19?username=ec849a7e-d480-4ee7-8139-03c9476fb437?password=zR3ZaNaFuXLj&text=A%20word%20is%20dead%20when%20it%20is%20said,%20some%20say.%20Emily%20Dickinson");

    //console.log('starts here:');
     //console.log(callback);
     //console.log('end text');

     //callback.success(function (data) {
       // console.log('starts here----');
        //console.log(data);
        //console.log('end here-----');
        //if(data!=null && data.docSentiment!=null)
       // {
        //    console.log('sentiment::' + data.docSentiment.type);

           // $scope.ReviewWithSentiment = {"reviewText" : text,
           //     "sentiment":data.docSentiment.type,
           //     "score":data.docSentiment.score  };
           // document.getElementById('div_ReviewList').style.display = 'block';

        //}
    //})
//}


function httpGet(theUrl)
{
   var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}





