$(document).ready(function(){

  $('#button-group').hide(0)

  $('#user-text').on('keyup keydown', function(){
    updateCounts()
  })

  $('#clear-field').on('click', function(event){
    event.preventDefault()
    $('#user-text').val('')
    updateCounts()
  })

  $('#save').on('click', function(event){
    event.preventDefault
    var text = $('#user-text').val()
    var count = ' <span class="the-count">' + text.length + '</span>'
    var restore = '<a href="#" class="restore">Restore</a>  '
    var trash = '<a href="#" class="delete">Delete</a>'
    var pasteIn = '<p><span>' + text + '</span>' + count + restore + trash + '</p>'
    $('#saved-text').prepend(pasteIn)
    updateCounts()
  })

  $('body').on('click', '.restore', function(event){
    event.preventDefault()
    var text = $(this).parent().children('span:first').text()
    $('#user-text').val(text)
    updateCounts()
  })

  $('body').on('click', '.delete', function(event){
    event.preventDefault()
    $(this).parent().html('')
  })

  $('#copy').on('click', function(event){
    event.preventDefault()
    $('#user-text').select()
  })

});

function updateCounts(){
 
 var totalCharacters = $('#user-text').val().length
 $('#char-count').html(totalCharacters)

 var charactersOnly = $('#user-text').val().replace(/ /g,'').length
 $('#char-only').html(charactersOnly)

 if (totalCharacters === 0) {
  $('#button-group').fadeOut()
 }
 else {
  $('#button-group').fadeIn()
 }
}
