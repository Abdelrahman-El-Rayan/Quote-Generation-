/*global $, jQuery, alert */
$(document).ready(function ()
{    
    var quote = [" “Don't cry because it's over, smile because it happened.” ",
                 " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
                 " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
                 " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
                 " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
                 " “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” " ];
    
    
    var author= ["“Marcus Tullius Cicero“" , "“Mae West“" , "“Mahatma Gandhi“" , "“Robert Frost“" , "“Mark Twain“" , "“Elbert Hubbard“"];
    
    
    function getLenght(){
        return quote.length;
    }
    
    function generateRandom(){
        return Math.floor( Math.random() * getLenght() );
    }
    
    
    $(".container .generate").on("click",function(){
        var x  = generateRandom();
        var q  =  quote[x];
        var au =  author[x];
        
       $(".container .qoute p").html(q);
       $(".container .qoute span").html(au);
        
        $(".container .twitt").on("click",function(){
        
            var quo = q + au;
            var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(quo);
            window.open(twtLink,'_blank');
        
        });
        
    });
    
    
    
});