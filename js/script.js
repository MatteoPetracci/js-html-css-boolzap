//   faccio partire la funzione textsend() al click sull'icona invio  e quando premo il tasto invio nella tastiera che corrisponde a 13

$(document).ready(function (){

$('.fa-paper-plane').click(function() {
  textSend();
});


$('.send').keyup(function () {
  if (event.which == 13) {
    textSend();
  }
});

$(document).on('click', '.fa-angle-down', function() {
  $(this).next('.dropdown').toggleClass('active');
});

$(document).on('click', '.delete', function() {
  $(this).parents('.box_text').remove();
});


$(document).on('click','ul.flex_list li', function() {
  var data = $(this).attr('data');
  $('.wrapper_text').removeClass('block');
  $('.wrapper_text').each(function() {
      if ($(this).attr('data') == data) {
        $(this).addClass('block');
        $(this).addClass('none');
      }
  });
})

});

// Dentro una variabile prendo il valore dentro l'input con classe send mettiamo la condizione per non mandare messaggi a vuoto (la lunghezzo di text deve essere diversa da zero)

// Inserire in una variabile il clone di box_text che contiente la struttura del messaggio creato

// Aggiungiamo la classe sent per far si che appaia a destra fra i messaggi inviati

// con find() cerco fra i suoi discendenti la classe text che è associato a il tag p e modifico il valore interno con text() andando a inserire la variabile che contiene il messaggio creato dall'utente nell'input

// con append aggiungo al main la variabile con all'interno quello che ho clonato

function textSend() {
  var text = $('.send').val();
  console.log(text);
  if (text.length != 0) {
    var textHidden = $('.template .box_text').clone();
    console.log(textHidden);
    textHidden.addClass('sent');
    textHidden.find('.text').text(text);
    $('.main').append(textHidden);
    // annullare il valore inserito nel campo input
    $('.send').val('');

// creare delle variabile per prendere l'ora e i minuti correnti
    var date = new Date();
    console.log(date);
    var hour = date.getHours();
    console.log(hour);
    var minute = zero(date.getMinutes());
    console.log(minute);
    textHidden.find('.time').text(hour + ':' + minute);

// con setTimeout come primo argomento passo la funzione che clona il mio box_text aggiungo la classe receive in modo che vada a sinistra tra i messaggi ricevuti e come fatto per i messaggi inviati prendo la classe text e modifico il valore del tag contenuto in p poi con append lo stampo nel main

    setTimeout(function () {
      var received = $('.template .box_text').clone();
      received.addClass('receive');
      received.find('.text').text("Va bene, grazie.");
      $('.main').append(received);
    }, 1500);
// Come secondo argomento passo il tempo che deve passare in questo caso 1.5s
  }
}

// Creare funzioni che aggiungo lo 0 ai minuti fino a 09

function zero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}


 // uso keyup() su id contact

 // in una variabile  prendo il valore di quello che l'utente inserisce nell'input
$('#contact').keyup(function() {
  var contact = $(this).val();
  console.log(contact);

  // uso  Each  negli <li> della lista  come se fosse un ciclo for su tutti gli h4
$('.flex_list li').each(function() {
  // in una variabile prendo il valore di tutti gli h4 find() e li trasformo in lettere minuscole
  var nameFriend = $(this).find('h4').text().toLowerCase();
  console.log(nameFriend);
  //  creo la condizione e controllo se negli h4 che contengono il nome di un utente sono incluse le lettere inserite nell'input

  // se la condizione è vera mostro il nome altrimenti nascondo
  if (nameFriend.includes(contact)) {
    $(this).show();
  } else {
    $(this).hide();
  }

});
});
