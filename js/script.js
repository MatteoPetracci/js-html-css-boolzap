//  al click sull'icona invio  facciamo partire la funzione textsend()

$(document).ready(function (){
$('.fa-paper-plane').click(function() {
  textSend();
});

});

// Dentro una variabile prendiamo il valore dentro l'input con classe send mettiamo la condizione per non mandare messaggi a vuoto (la lunghezzo di text deve essere diversa da zero)

// Inserire in una variabile il clone di box_text che contiente la struttura del messaggio creato

// Aggiungiamo la classe sent per far si che appaia a destra fra i messaggi inviati

// con find() cerchiamo fra i suoi discendenti la classe text che è addociato a il tag p e modifichiamo il valore interno con text() andando a inserire la variabile che contiene il messaggio creato dall'utente nell'input

// con append aggiungiamo al main la variabile con all'interno quello che abbiamo clonato

function textSend() {
  var text = $('.send').val();
  console.log(text);
  if (text.length != 0) {
    var textHidden = $('.template .box_text').clone();
    console.log(textHidden);
    textHidden.addClass('sent');
    textHidden.find('.text').text(text);
    $('.main').append(textHidden);
  }
}
