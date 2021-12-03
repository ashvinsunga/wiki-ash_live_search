$(document).ready(function () {
  $('.read').on('click', function () {
    var url = 'https://animechan.vercel.app/api/random';
    loading();

    $.getJSON(url, function (data) {
      var currentQuote = data;
      //   Check the length of the quote
      if (currentQuote.quote.length > 150) {
        $('.quoteBody').addClass('longQuote');
      } else if (currentQuote.quote.length > 450) {
        $('.quoteBody').addClass('longestQuote');
      } else {
        $('.quoteBody').removeClass('longQuote');
        $('.quoteBody').removeClass('longestQuote');
      }

      $('.quoteBody').html(currentQuote.quote);
      $('.quoteAnimeCharacter').html(currentQuote.character);
      $('.quoteAnime').html(currentQuote.anime);
      $('.read').html('Next Quote');
      $('.tweetQuote')
        .attr(
          'href',
          'https://twitter.com/intent/tweet?text=' +
            currentQuote.quote +
            '  -' +
            currentQuote.character
        )
        .attr('target', '_blank')
        .removeClass('disabled');
      complete();
    });
  });
  //   Show Loading
  var loader = document.getElementById('loader');
  var quoteBody = document.getElementById('quoteBody');
  var quoteAnimeCharacter = document.getElementById('quoteAnimeCharacter');
  var quoteAnime = document.getElementById('quoteAnime');
  var buttons = document.getElementsByClassName('btn');

  function loading() {
    loader.hidden = false;
    quoteBody.hidden = true;
    quoteAnimeCharacter.hidden = true;
    quoteAnime.hidden = true;
    buttons[0].hidden = true;
    buttons[1].hidden = true;
  }
  //   Hide Loading
  function complete() {
    if (!loader.hidden) {
      loader.hidden = true;
      quoteBody.hidden = false;
      quoteAnimeCharacter.hidden = false;
      quoteAnime.hidden = false;
      buttons[0].hidden = false;
      buttons[1].hidden = false;
    }
  }
});
