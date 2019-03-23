var quotes, length;

quotes = [
 //quotes
];


var quoteSelection;
var lastRandom;
var clearQuote;
var random;


init();


document.querySelector('.button').addEventListener('click', function(){
    document.querySelector('.quote_place').style.display='block'
 
    random = parseInt(Math.floor(Math.random() * quotes.length));


    if (random !== -1 && random !== lastRandom){
        document.querySelector('.quotation').textContent = quotes[random];
       // console.log(random);

    }else if (random === lastRandom && random <= quotes.length){
        random--;
        document.querySelector('.quotation').textContent = quotes[random];
        if(random <= -1 || lastRandom <=-1){
            random=1;
            document.querySelector('.quotation').textContent = quotes[random];
        }
        //console.log('smt'+random);
    }else if (random === lastRandom && random === 0){
        random++;
        document.querySelector('.quotation').textContent = quotes[random];
        //console.log('smtttt'+random);
    }
       


    lastRandom = random;

});

function clearQuoteField(){
    document.querySelector('.clear_btn').addEventListener('click', function(){
        //document.querySelector('.quotation').textContent= '';
        clearQuote.textContent= '';
        random = 0;
        lastRandom = 0;
    });
}

function init(){
    document.querySelector('.quote_place').style.display='none'
    clearQuote = document.querySelector('.quotation');
    clearQuote.textContent= '';
    random = 0;
    lastRandom = 0;
    clearQuoteField();

}


