// This function will perform JSON request from API
function ajaxCall() {
  $.ajax({
    url:
      'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' +
      $('#search').val(),
    dataType: 'jsonp',
    type: 'GET',
    success: function (data) {
      //   console.log(data);
      $('#update').empty();
      var data = JSON.stringify(data);
      data = JSON.parse(data);
      //
      var output = '';
      data.query.search.forEach(function (data) {
        var url =
          '<a href="https://en.wikipedia.org/wiki/' +
          data.title +
          '"' +
          '" target=_blank">';
        var title = '<h2>' + data.title + '</h2>' + '<br>';
        var endUrl = '</a>';
        var snippet = '<p>' + data.snippet + '</p>' + '<br>';

        output += url + title + endUrl + snippet + '<hr>';
      });
      $('#update').append(output);
    },
  });
}

function randomWiki() {
  $('#update').empty();
  $('#search').empty();
  $('iframe').attr('src', 'https://www.mediawiki.org/wiki/Special:Random');
}
$(document).ready(function () {
  $('#search').focus();
  //   $('#search').off('keyup');
  $('#search').on('keyup', function () {
    ajaxCall();
    $('iframe').attr('src', '');
  });
  // Show random wiki
  $('.random').on('click', function () {
    randomWiki();
    $(this).text('Show another wiki');
  });
});
