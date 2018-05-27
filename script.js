(function($){
    var quoteObj;
    var quoteElement = $('.quote');
    var authorElement = $('.author');
    var tweetButton = $('.nav-twitter');

    $(document).ready(function() {
        getJsonHandler();
        
    });

    function getJsonHandler() {
        [r,g,b] = randomColor();
        animateColors(r,g,b);
        // $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(json) {
        //     quoteObj = json[0];
        //     console.log(quoteObj);
        //     updateElements(quoteObj);
        // });
        $.ajax({
            dataType: "json",
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            cache: false
            }).done(function(json) {
                quoteObj = json[0];
                updateElements(quoteObj);
            });
    }

    function updateElements(quoteObj) {

        //text z API zawiera znaki w formacie unicode np &#xxx dlatgo najpierw wpisuje je do elementu na strone...
        quoteElement.html(quoteObj.content);
        authorElement.html(quoteObj.title);

        //przez co znaki zostano przetlumaczone a pozniej pobieram je z elementu zeby tweet juz ich nie zawieral
        var text = document.querySelector('.quote p').innerHTML;
        console.log(text);
        tweetButton.html('');
        window.twttr.widgets.createShareButton(
            '/',
            document.getElementsByClassName('nav-twitter')[0],
            {
              text: text,
              size: "large",
              hashtag: "quote"
            }
          );
    }

    function randomColor() {
        var colors = []
        for (var i = 0; i < 3; i++) {
            colors.push(Math.floor(Math.random() * 255));
        }
        return colors;     
    }

    function animateColors(r,g,b) {
        $('.shared-color1').animate({
            backgroundColor: $.Color(`rgb(${r}, ${g}, ${b})`)
        }, {duration: 1200, queue: false});
        $('.shared-color2').animate({
            backgroundColor: $.Color(`rgb(${r}, ${g}, ${b})`)
        }, {duration: 300, queue: false});
    }


    $('.nav-button').on("click", () => getJsonHandler());
    //$('.nav-twitter').on("click", () => sendToTwitterHandler());
    
}($));

