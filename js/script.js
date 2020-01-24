//  al click sull'icona invio  facciamo partire la funzione textsend()

$(document).ready(function (){
$('.fa-paper-plane').click(function() {
  textSend();
// con setTimeout come primo argomento passo la funzione che clona il mio box_text aggiungo la classe receive in modo che vada a sinistra tra i messaggi ricevuti e come fatto per i messaggi inviati prendo la classe text e modifico il valore del tag contenuto in p poi con append lo stampo nel main

 // Come secondo argomento passo il tempo che deve passare in questo caso 2.5s
  
  setTimeout(function () {
    var received = $('.template .box_text').clone();
    received.addClass('receive');
    received.find('.text').text("Va bene, grazie.");
    $('.main').append(received);
  }, 2500);
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

// creare delle variabile per prendere l'ora e i minuti correnti
    var date = new Date();
    console.log(date);
    var hour = date.getHours();
    console.log(hour);
    var minute = zero(date.getMinutes());
    console.log(minute);
    textHidden.find('.time').text(hour + ':' + minute);

  }
}

// Creare funzioni che aggiungo lo 0 ai minuti fino a 09

function zero(num) {
  if (num < 10) {
    numbero += 0;
  }
  return num;
}
