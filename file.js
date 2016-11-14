//Twitter Button import
//
// window.twttr = (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0],
//     t = window.twttr || {};
//   if (d.getElementById(id)) return t;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://platform.twitter.com/widgets.js";
//   fjs.parentNode.insertBefore(js, fjs);
//
//   t._e = [];
//   t.ready = function(f) {
//     t._e.push(f);
//   };
//
//   return t;
// }(document, "script", "twitter-wjs"));
//


//Button Logic--------------------

var quoteText;
var quoteAuthor;

function updateTwitterValues(share_url, title) {
    // clear out the <a> tag that's currently there...probably don't really need this since you're replacing whatever is in there already.
    $("#twitter").html('&nbsp;');
    $("#twitter").html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + share_url + '" data-size="large" data-text="' + title + '" data-count="none">Tweet</a>');
    twttr.widgets.load(document.getElementById("twitter"));
}


$(document).ready(function() {
    $("#get-random-quote").click(function() {
        var random = Math.floor(Math.random() * 30);
        $.getJSON("https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(a) {
            quoteText = a[random].content;
            quoteAuthor = a[random].title;
            $("#goes-here").html(quoteText + "<p>— " + quoteAuthor + "</p>");
            // $("a").attr("href", "https://twitter.com/intent/tweet/?text=");
            //document.getElementById("twitter-share-button").href = "https://twitter.com/intent/tweet/?text=" + $("#goes-here").text();
            $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet/?text=" + $("#goes-here").text())+"https://random-4887e.firebaseapp.com/";
          });
    });
});


// var twitterUrl = "https://twitter.com/intent/tweet?text=Hello%20world";
// var tweetText = "\"" + quoteText + "\"" + " - " + quoteAuthor;
// twitterUrl += tweetText;
