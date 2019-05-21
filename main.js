// Creare una griglia 6x6, ad ogni click su un riquadro parte una richiesta AJAX
// che prende un numero random da 1 a 9
// (utilizzare l'API https://www.boolean.careers/api/random/int).
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function(){

  ///////////////////////////////////////////////////////////////

  //PREPARAZIONE TEMPLATE

  //salvo il template dentro a una variabile
  var quadrato = $('#template__container').html();
  //console.log(quadrato);

  //richiamo il compile
  var template__function = Handlebars.compile(quadrato);

  //genero e appando 36 quadrati
  for (var i = 0; i < 36; i++) {
    $('.grid').append(quadrato);
    //console.log(quadrato);
  }
  //console.log(quadrato);

  //////////////////////////////////////////////////////////////

  //al click del quadrato inserisco il numero e la logica
  $(document).on('click', '#square', function(){

    var square__click = $(this);
    console.log(square__click);

    //creo la richiesta AJAX
    $.ajax({
      'url': "https://www.boolean.careers/api/random/int",
      'metod': "GET",
      'success': function(data){ //<-- data <<risposta del server>>
        
        var numero = data.response;
        console.log(numero);

        square__click.text(numero);

        if (numero <= 5) {

          square__click.css({
            'backgroundColor': '#fff200',
            'color': 'black',
          });

        }else if (numero > 5) {

          square__click.css({
            'backgroundColor': '#27ae60',
            'color': 'white',
          });
        }

      }, 'error': function(richiesta, stato, errori) {
            alert(errori);
          }

    });

  });

  ////////////////////////////////////////////////////////////////


  // gen_num_ajax(data); //<--estraggo per elaborare tramite la funzione





});
