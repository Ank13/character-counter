$(document).ready(function(){

  $('#user-text').on('keyup', function(){

    var total_characters = $(this).val().length
    $('#char-count').html(total_characters)

    var characters_only = $(this).val().replace(/ /g,'').length
    $('#char-only').html(characters_only)

  })

});