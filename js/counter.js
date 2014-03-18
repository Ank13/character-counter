$(document).ready(function(){
  $('#user-text').on('keyup keydown', function(){
    updateCounts()
  })

  $('#clear-field').on('click', function(event){
    event.preventDefault()
    $('#user-text').val('')
    updateCounts()
  })
});

function updateCounts(){
 
 var totalCharacters = $('#user-text').val().length
 $('#char-count').html(totalCharacters)

 var charactersOnly = $('#user-text').val().replace(/ /g,'').length
 $('#char-only').html(charactersOnly)

 var tweetLeft = 140 - totalCharacters
 $('#tweet-left').html(tweetLeft)

 var smsLeft = 160 - totalCharacters
 $('#sms-left').html(smsLeft)
}
