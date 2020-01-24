// facciamo click sull'icona del tasto invio, creo una variabile dove salvare quello che l'utente inserisce grazie a val() senza passare nessun valore

// Con clone() clono l'elemento identificato con l'id #text_hidden e lo salvo in una variabile

// Con find sull'elemento clonato e passando come valore p selezioniamo tutti i paragrafi che sono discendenti

// su text invece inserisco la variabile che contiene il contenuto di quello che ha scritto l'utente

// Nel container generale main uso append per inserire il contenuto di textHidden.

// $(document).ready(function () {
//   var textUser = $('box_text_user');
//   $(".fa-paper-plane").click(function () {
//     var text = $("#send").val();
//     console.log(text);
//     var textHidden = $("#text_hidden").clone();
//     console.log(textHidden);
//     textHidden.find("p").text(text);
//     $(".main").append(textHidden);
//     if (text === "") {
//       alert('prova')
//     }
//   });
// });

$(document).ready(function (){
$('.fa-paper-plane').click(function() {
  textSend();
})


});


function textSend() {
  var text = $('.send').val();
  console.log(text);
  if (text.length != 0) {
    var textHidden = $('.template').clone();
    console.log(textHidden);
  }
}
