var cards = ['f1','f2','f3','f4','f5','f6','f7','f8','f9'];
var current = null;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

function flip(card){
    $(card).toggleClass('flipped');
    if(!current){
        current = $(card); 
    } else{
        if(current.attr('data-name') != $(card).attr('data-name')){
            setTimeout(function(){ 
            $(card).toggleClass('flipped');
            current.toggleClass('flipped');
 
            current = null; 
        },500);
            
        } else{
            setTimeout(function(){
                $(card).css('opacity','0');
                current.css('opacity','0');
                current = null;
            },200);
            
        }
    }
}

$(function() {
    cards = cards.concat(cards);
    cards = shuffle(cards);
    var html = '';
    for(var i = 0; i < cards.length; i++){
        html += '<div class="container">' + 
        '<div class="card" data-name=" '+ cards[i] + ' "onlick="flip(this)" '
        '<div class="front"><img src="'+ cards[i] +'.jpg"/></div>'+
        '<div class="back"><img src="51g77lRci5L.jpg"/></div>' +
        '</div></div>';
    };

    $('.content').html(html);   
});


